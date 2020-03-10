import { omdbEndpoint } from "./config"

function fetchMovieDetails(searchTerm) {
	return fetch(`${omdbEndpoint}&t=${searchTerm}`);
}

export { fetchMovieDetails };
