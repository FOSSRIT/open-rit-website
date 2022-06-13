/* TODO: replace with live Mystic URL */
const MYSTIC_URL = new URL("http://localhost:5000/");
const API_PREFIX = "/";

/* MYSTIC_PID set by project.html layout */
function get_endpoint_url() {
	const api_url      = new URL(API_PREFIX, MYSTIC_URL);
	const endpoint_url = new URL(`${MYSTIC_PID}.json`, api_url);
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
	div.classList.remove("hidden"); // remove hidden
}

function populate(data) {
	console.log(data);
	
	const project_about_div = document.getElementById("project-about");
	project_about_div.innerText = data["desc"];
	
	const project_metrics_div = document.getElementById("project-metrics");
	data["embeds"].forEach(embed_data => {
		const embed = create_embed(embed_data);
		project_metrics_div.appendChild(embed);
	});
	
	/* Content ready to show */
	unhide_div("project-content");
}

function create_embed(embed_data) {
	/* Create the container */
	const embed_container = document.createElement("div");
	embed_container.classList.add("embed-container");
	/* Create the embed */
	const embed = document.createElement("iframe");
	embed.setAttribute("src", new URL(embed_data["url"], MYSTIC_URL));
	embed.setAttribute("title", embed_data["title"]);
	embed.setAttribute("scrolling", "no");
	if (embed_data["tall"]) {
		embed.classList.add("tall");
	}
	/* Put the embed in the container and return it */
	embed_container.appendChild(embed);
	return embed_container;
}
