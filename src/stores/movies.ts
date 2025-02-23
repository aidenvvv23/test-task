import { writable } from 'svelte/store';
import { SortMethod } from '../enums/sort.enum';

export interface Movie {
	id: number;
	title: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

export interface MovieDetail extends Movie {
	overview: string;
	runtime: number;
	genres: { id: number; name: string }[];
	original_language: string;
	budget: number;
	revenue: number;
}

interface MoviesState {
	movies: Movie[];
	currentPage: number;
	totalPages: number;
	query: string;
	isLoading: boolean;
	error: string | null;
	sortBy?: string;
}

const initialState: MoviesState = {
	movies: [],
	currentPage: 1,
	totalPages: 1,
	query: '',
	isLoading: false,
	error: null,
	sortBy: SortMethod.PopularityDesc,
};

export const moviesStore = writable<MoviesState>(initialState);
