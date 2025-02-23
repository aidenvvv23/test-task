<script lang="ts">
	import type { Movie } from '../stores/movies';
	import LazyImage from './LazyImage.svelte';
	export let movie: Movie;
</script>

<article class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
	<div class="h-64 overflow-hidden">
		<LazyImage src={movie.poster_path} alt={movie.title} />
	</div>
	<div class="p-4">
		<h3 class="mb-2 line-clamp-2 h-[56px] text-lg font-bold">{movie.title}</h3>
		<div class="flex justify-between text-sm text-gray-600">
			<span>{new Date(movie.release_date).toDateString()}</span>
			<span>⭐ {movie.vote_average.toFixed(1)}</span>
		</div>
	</div>
</article>
