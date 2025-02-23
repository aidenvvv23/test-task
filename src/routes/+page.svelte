<script lang="ts">
	import { moviesStore } from '../stores/movies';
	import { fetchMovies } from '../api/tmdb';
	import MovieCard from '../components/MovieCard.svelte';
	import SearchBar from '../components/SearchBar.svelte';
	import Header from '../components/Header.svelte';

	import { onMount } from 'svelte';
	let loading = false;
	let lastQuery = $moviesStore.query;
	let sortBy = $moviesStore.sortBy;

	const checkScroll = () => {
		const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
		if (nearBottom && !loading && $moviesStore.currentPage < $moviesStore.totalPages) {
			loadMore();
		}
	};

	const loadMore = async () => {
		loading = true;
		moviesStore.update((state) => ({ ...state, isLoading: true }));
		try {
			const nextPage = $moviesStore.currentPage + 1;
			const data = await fetchMovies(nextPage, $moviesStore.query, $moviesStore.sortBy);

			moviesStore.update((state) => ({
				...state,
				movies: [...state.movies, ...data.results],
				currentPage: nextPage,
				totalPages: data.total_pages,
				isLoading: false
			}));
			loading = false;
		} catch (error: any) {
			moviesStore.update((state) => ({
				...state,
				error: error.message,
				isLoading: false
			}));
			loading = false;
		}
	};

	$: {
		const isQueryChanged = !!$moviesStore.query && lastQuery !== $moviesStore.query;
		const isSortByChanged = !!$moviesStore.sortBy && sortBy !== $moviesStore.sortBy;
		if (!loading && (isQueryChanged || isSortByChanged)) {
			lastQuery = $moviesStore.query;
			sortBy = $moviesStore.sortBy;
			loadMovies($moviesStore.currentPage, $moviesStore.query, $moviesStore.sortBy);
		}
	}

	async function loadMovies(page: number, query: string, sortBy?: string) {
		try {
			moviesStore.update((state) => ({ ...state, isLoading: true }));
			const data = await fetchMovies(page, query, sortBy);

			moviesStore.update((state) => ({
				...state,
				isLoading: false,
				movies: data.results,
				totalPages: data.total_pages
			}));
		} catch (e: any) {
			moviesStore.update((state) => ({ ...state, isLoading: false, error: e.message }));
		}
	}

	onMount(() => {
		loadMovies(1, '');
	});

	// Infinite scroll
	onMount(() => {
		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
		};
	});
</script>

<main class="">
	<Header />
	<div class="container mx-auto px-4 pb-8">
		<h1 class="mt-8 text-center text-3xl font-bold">Popular Movies</h1>

		<div class="mt-6 mb-4">
			<SearchBar />
		</div>

		{#if $moviesStore.query && !$moviesStore.isLoading}
			{#if $moviesStore.movies.length === 0}
				<div class="py-8 text-center">No results found</div>
			{/if}

			{#if $moviesStore.movies.length > 0}
				<div class="py-4 text-center font-semibold">
					Showing results for "{$moviesStore.query}"
					{#if $moviesStore.totalPages > 1}
						- Page {$moviesStore.currentPage} of {$moviesStore.totalPages}
					{/if}
				</div>
			{/if}
		{/if}

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each $moviesStore.movies as movie}
				<a href={`/movie/${movie.id}`}>
					<MovieCard {movie} />
				</a>
			{/each}
		</div>



		{#if $moviesStore.isLoading}
			<div class="py-8 text-center">Loading...</div>
		{:else if $moviesStore.error}
			<div class="py-8 text-center text-red-500">Error: {$moviesStore.error}</div>
		{/if}
	</div>
</main>
