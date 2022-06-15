/* Script to do searching and filtering for the projects-grid.html partial */

const SEARCHABLE_FIELDS = ["name", "tldr", "owner"]; // config

const PROJECTS_LIST = [];
let prev_search = "";

/* PROJECTS_DATA set by projects-grid.html partial */
function init_search() {
	/* Get all of the divs and put them in the projects list */
	Object.entries(PROJECTS_DATA)
		.forEach(([project_id, project]) => {
			const project_div = document.getElementById(project_id);
			project.div = project_div;
			project.search_valid = true;
			project.search_order = 0;
			project.filter_valid = true;
			project.hidden = false; // performance: avoid DOM checks
			PROJECTS_LIST.push(project);
		});
	/* Enable searching */
	const search_bar = document.getElementById("projects-search-bar");
	search_bar.addEventListener("input", handle_search);
	unhide_div("projects-search");
}

function handle_search(event) {
	/* Get the search text */
	const search_text = event.target.value;
	/* Don't waste effort if the search is the same */
	if (search_text === prev_search) {
		return;
	}
	prev_search = search_text;
	/* Apply search */
	const searched_projects = PROJECTS_LIST.map(project => {
		project.search_valid = Object.entries(project)
			.some(([field, value]) => {
				if (SEARCHABLE_FIELDS.includes(field)) {
					return value
						.toLowerCase()
						.indexOf(search_text.toLowerCase()) !== -1;
				}
				return false
			});
	});
	/* Apply sorting */
	// TODO
	/* Update projects grid */
	update_content();
}

function update_content() {
	PROJECTS_LIST.forEach(project => {
		if (project.search_valid && project.filter_valid) {
			if (project.hidden) {
				project.div.classList.remove("hidden");
				project.hidden = false;
			}
		} else {
			if (!project.hidden) {
				project.div.classList.add("hidden");
				project.hidden = true;
			}
		}
	});
}

// function projects_compare(project_a, project_b) {
//	
// }

function unhide_div(div_id) {
	const div = document.getElementById(div_id);
	div.classList.remove("hidden");
}
