function accumulateErrors(acc, item) {
	if(acc[0] === "ERR") {
		return acc
	} else if(item[0] === "ERR") {
		return item
	} else {
		return ["OK", acc[1].concat([item[1]])]
	}
}

function mapResult(errOrOk, mapper, res) {
	if(res[0] === errOrOk) {
		return [res[0], mapper(res[1])]
	} else {
		return res
	}
}

function resultAndThen(nextTask, res) {
	if(res[0] === "ERR") {
		return res
	} else {
		return nextTask(res[1])
	}
}

function zip(rows) {
	return rows[0]
		.map(
			(_, i) => rows.map(row => row[i])
		)
		.filter((tup) => tup[1] !== undefined)
}

function getRawXml(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.addEventListener("load", () => {
			if(req.status != 200) {
				reject("Not a 200 status code: " + req.status)
			} else {
				resolve(req.responseText)
			}
		});
		req.addEventListener("error", () => {
			reject("Unspecified request error (not received)")
		});
		req.open("GET", url);
		req.setRequestHeader("X-Requested-With", "localhost");
		req.send();
	})
}

// Post authors are often formatted like "First Last (email)"
// If the author looks like its in this format, convert it to just first and last
// Otherwise return unchanged
function transformAuthor(author) {
	let firstIndex = author.indexOf("(");
	let lastIndex = author.lastIndexOf(")");

	if(
		firstIndex < lastIndex - 1 &&
		firstIndex !== -1
	) {
		return author.substr(firstIndex + 1, lastIndex - firstIndex - 1)
			.trim();
	} else {
		return author
	}
}

function parseDate(datestr) {
	let millis = Date.parse(datestr);
	if(Number.isNaN(millis)) {
		return ["ERR", "Malformed date"]
	} else {
		return ["OK", new Date(millis)]
	}
}

function parseXml(rawXml) {
	let parser = new DOMParser();
	let xml = parser.parseFromString(rawXml, "text/xml");
	let errorNode = xml.querySelector('parsererror');
	if(errorNode) {
		return ["ERR", "Problem parsing RSS feed:  " + errorNode.textContent]
	}
	let items = Array.from(
		xml.getElementsByTagName("item")
	)
	let transformedItems = items
		// Parse each item
		.map((item) => {
			let title = item.getElementsByTagName("title")[0]
			let link = item.getElementsByTagName("link")[0]
			let description = item.getElementsByTagName("description")[0]
			let author = item.getElementsByTagName("author")[0]
			let date = item.getElementsByTagName("pubDate")[0]
			let enclosure = item.getElementsByTagName("enclosure")[0]

			if(title === undefined) {
				return ["ERR", "title"]
			} else if(link === undefined) {
				return ["ERR", "link"]
			} else if(description === undefined) {
				return ["ERR", "description"]
			} else if(author === undefined) {
				return ["ERR", "author"]
			} else if(date === undefined) {
				return ["ERR", "pubDate"]
			} else if(enclosure === undefined) {
				return ["ERR", "enclosure"]
			} else if(enclosure.getAttribute("url") === null) {
				return ["ERR", "enclosure.url"]
			} else {
				return mapResult("OK", (date) => {
					return {
						title: title.innerHTML,
						link: link.innerHTML,
						description: description.innerHTML,
						date: date,
						author: transformAuthor(author.innerHTML),
						image: enclosure.getAttribute("url"),
					}
				}, parseDate(date.textContent))
			}
		})
		// Accumulate errors
		.reduce(accumulateErrors, ["OK", []])

	return mapResult("ERR", (field) => "Missing field: " + field, transformedItems)
}

function fillNewsElement(elem, item) {
	let img = elem.getElementsByTagName("img")[0];
	let date = elem.getElementsByClassName("event-date")[0];
	let title = elem.getElementsByTagName("h3")[0];
	let author = elem.getElementsByClassName("author")[0];
	let description = elem.getElementsByClassName("description")[0];

	if(
		img === undefined ||
		date === undefined ||
		title === undefined ||
		author === undefined ||
		description === undefined
	) {
		return ["ERR", "Unexpected DOM layout, events feed script called on wrong page?"]
	} else {
		img.src = item.image
		title.textContent = item.title
		author.textContent = item.author
		description.textContent = stripCDATA(item.description)
		date.textContent = item.date.toDateString().substr(4)
		return ["OK", null]
	}
}

function fillAllNews(items) {
	let news = document.getElementsByClassName("event-card")
	return zip([items, news])
		.map((itemEle) => fillNewsElement(itemEle[1], itemEle[0]))
		.reduce(accumulateErrors, ["OK", []])

}

function writeErrorToPage(error) {
	let errorSpaces = Array.from(document.getElementsByClassName("news-error"));
	errorSpaces.forEach((s) => s.textContent = error)
}

// Strings CDATA annotations from an XML string
function stripCDATA(str) {
	const patt = /^\s*<!\[CDATA\[(.*)\]\]>\s*$/ms;
	return str.replace(patt, "$1").trim()
}

async function loadNews(rssUrl) {
	let parsedXml = await getRawXml(rssUrl)
		.then(parseXml)
		.catch((err) => ["ERR", "Problem contacting news server:  " + err])
	let finalResult =
		resultAndThen(fillAllNews,
			mapResult("ERR", (msg) => "Problem parsing XML:  " + msg, parsedXml))
	if(finalResult[0] === "OK") {
		console.log("News successfully loaded");
	} else {
		console.log("Error loading news:  " + finalResult[1]);
		writeErrorToPage(finalResult[1]);
	}
}
