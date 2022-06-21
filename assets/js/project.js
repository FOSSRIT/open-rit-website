/* Script to get project information from Mystic for the project.html layout */

/* TODO: replace with live Mystic URL */
const MYSTIC_URL = new URL("http://localhost:5000/");
const API_PREFIX = "/";

/* PROJECT_SLUG set by project.html layout */
function get_endpoint_url() {
	const api_url      = new URL(API_PREFIX, MYSTIC_URL);
	const endpoint_url = new URL(`${PROJECT_SLUG}.json`, api_url);
	return endpoint_url;
}

function fetch_data() {
	fetch(get_endpoint_url())
		.then(response => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw new Error("HTTP Error " + response.status +
				                ": " + response.statusText);
			}
		})
		.then(json_data => {
			if (document.readyState === "complete") {
				populate(json_data);
			} else {
				window.addEventListener("load", () => {
					populate(json_data);
				});
			}
		})
		.catch(error => {
			console.log(error);
			unhide_div("loading-error");
		});
}

function unhide_div(div_id) {
	const div = document.getElementById(div_id);
	div.classList.remove("hidden");
}

function populate(data) {
	/* Populate about section */
	const project_about_div = document.getElementById("project-about");
	project_about_div.innerText = data["desc"];
	/* Populate sources list */
	const sources_ul = document.getElementById("project-sources");
	data["sources"].forEach(source_data => {
		const source_li = create_source(source_data);
		sources_ul.appendChild(source_li);
	});
	/* Populate project metrics */
	const project_metrics_div = document.getElementById("project-metrics");
	data["embeds"].forEach(embed_data => {
		const embed = create_embed(embed_data);
		project_metrics_div.appendChild(embed);
	});
	/* Content ready to show */
	unhide_div("project-content");
}

function create_source(source_data) {
	/* Create the list item */
	const source_li = document.createElement("li");
	/* Create the link */
	const source_a = document.createElement("a");
	source_a.setAttribute("href", source_data["url"]);
	source_a.innerText = source_data["type"];
	/* Put the link in the list item and return it */
	source_li.appendChild(source_a);
	return source_li;
}

function create_embed(embed_data) {
	/* Create the container */
	const embed_container = document.createElement("div");
	embed_container.classList.add("embed-container");
	/* Create the embed label */
	const embed_title = document.createElement("h4");
	embed_title.innerText = embed_data["title"];
	/* Create the embed */
	const embed = document.createElement("iframe");
	embed.setAttribute("src", new URL(embed_data["url"], MYSTIC_URL));
	embed.setAttribute("title", embed_data["title"]);
	embed.setAttribute("scrolling", "no");
	if (embed_data["tall"]) {
		embed.classList.add("tall");
	}
	/* Put the content in the container and return it */
	embed_container.appendChild(embed_title);
	embed_container.appendChild(embed);
	return embed_container;
}
