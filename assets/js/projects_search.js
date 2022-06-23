/* Script to do searching and filtering for the projects-grid.html partial */

/* Config - Field and its search weight (scalar) */
// TODO: refine values
const SEARCHABLE_FIELDS = {
	"name":  3.5,
	"owner": 1.75,
	"tldr":  1,
};

const PROJECTS_LIST = [];
let prev_search = "";

/* PROJECTS_DATA set by projects-grid.html partial */
function init_search() {
	/* Get all of the divs and put them in the projects list */
	Object.entries(PROJECTS_DATA)
		.forEach(([project_slug, project]) => {
			const project_div = document.getElementById(project_slug);
			project.div = project_div;
			project.search_valid = true;
			project.filter_valid = true;
			project.search_score = 0;
			project.search_order = 0;
			project.cur_search_order = 0; // performance: avoid DOM checks
			project.hidden = false;       // performance: avoid DOM checks
			PROJECTS_LIST.push(project);
		});
	/* Enable searching */
	const search_bar = document.getElementById("projects-search-bar");
	search_bar.addEventListener("input", handle_search);
	unhide_div("projects-search");
}

function handle_search(event) {
	/* Get the search text */
	const search_text = event.target.value.trim();
	/* Don't waste effort if the search is the same */
	if (search_text === prev_search) return;
	prev_search = search_text;
	/* Only search if the query isn't empty */
	if (search_text.length > 0) {
		const searched_projects = search_projects(search_text);
		sort_projects(search_text, searched_projects);
	} else {
		/* Reset to default */
		PROJECTS_LIST.forEach(project => {
			project.search_valid = true;
			project.search_order = 0;
		})
	}
	/* Update projects grid */
	update_content();
}

function search_projects(search_text) {
	return PROJECTS_LIST.filter(project => {
		project.search_valid = Object.entries(project)
			.some(([field, value]) => {
				if (Object.keys(SEARCHABLE_FIELDS).includes(field)) {
					return value
						.trim()
						.toLowerCase()
						.indexOf(
							search_text
								.trim()
								.toLowerCase()
						) !== -1;
				}
				return false;
			});
		return project.search_valid;
	});
}

function sort_projects(search_text, projects) {
	projects.forEach(project => {
		const scores = [];
		Object.entries(SEARCHABLE_FIELDS)
			.forEach(([search_field, weight]) => {
				const value = project[search_field];
				const dist = levenshtein(value, search_text);
				const score = (dist * weight) / value.length;
				scores.push(score);
			});
		project.search_score = Math.min(...scores);
	});
	projects
		.sort((a, b) => (
			b.search_score - a.search_score
		))
		.forEach((project, i) => {
			project.search_order = i;
		});
}

function update_content() {
	PROJECTS_LIST.forEach(project => {
		/* Apply visibility */
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
		/* Apply order */
		if (project.search_order !== project.cur_search_order) {
			project.div.style.order = project.search_order;
			project.cur_search_order = project.search_order;
		}
	});
}

function levenshtein(a, b) {
	/* Check if either string is empty/nonexistent */
	if (!a || a.length === 0) return b.length;
	if (!b || b.length === 0) return a.length;
	/* Construct matrix */
	const matrix = Array(b.length + 1).fill().map(() => (
		Array(a.length + 1).fill(0)
	));
	/* Set initial matrix values */
	for (let i = 0; i <= a.length; i++) {
		matrix[0][i] = i;
	}
	for (let j = 0; j <= b.length; j++) {
		matrix[j][0] = j;
	}
	/* Inscrutable algorithmic absurdity */
	for (let j = 1; j <= b.length; j++) {
		for (let i = 1; i <= a.length; i++) {
			const s = a[i - 1] === b[j - 1] ? 0 : 1;
			matrix[j][i] = Math.min(
				matrix[j][i - 1] + 1,
				matrix[j - 1][i] + 1,
				matrix[j - 1][i - 1] + s,
			);
		}
	}
	/* Return the final calculated value */
	return matrix[b.length][a.length];
}

function unhide_div(div_id) {
	const div = document.getElementById(div_id);
	div.classList.remove("hidden");
}
