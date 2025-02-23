import { fetchMovieDetails } from '../../../api/tmdb';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	return {
		movie: await fetchMovieDetails(params.id)
	};
};
