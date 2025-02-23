const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchMovies(page: number, query: string = '', sortBy: string = '') {
	let url = query
		? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
		: `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

	if (sortBy) {
		url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sortBy}&page=${page}`;
	}

	const response = await fetch(url);
	if (!response.ok) throw new Error('Failed to fetch movies');
	return response.json();
}

export async function fetchMovieDetails(id: string) {
	const response = await fetch(
		`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=genres`
	);
	if (!response.ok) throw new Error('Failed to fetch movie details');
	return response.json();
}
