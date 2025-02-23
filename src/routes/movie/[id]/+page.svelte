<script lang="ts">
	import type { MovieDetail } from '../../../stores/movies';

	export let data: { movie: MovieDetail };

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<a href="/" class="mb-4 inline-block text-blue-500 hover:underline">← Back to Movies</a>

	<div class="rounded-lg bg-white p-6 shadow-md">
		<div class="flex flex-col gap-6 md:flex-row">
			<img
				src={`https://image.tmdb.org/t/p/w500${data.movie.poster_path}`}
				alt={data.movie.title}
				class="w-full rounded-lg md:w-1/3"
			/>
			<div class="flex-1">
				<h1 class="mb-4 text-3xl font-bold">{data.movie.title}</h1>
				<p class="mb-4 text-gray-600">{data.movie.overview}</p>

				<div class="space-y-2">
					<p>
						<span class="font-semibold">Release Date:</span>
						{data.movie.release_date}
					</p>
					<p>
						<span class="font-semibold">Runtime:</span>
						{data.movie.runtime} minutes
					</p>
					<p>
						<span class="font-semibold">Language:</span>
						<span class="uppercase">{data.movie.original_language}</span>
					</p>
					<p>
						<span class="font-semibold">Rating:</span>
						⭐ {data.movie.vote_average.toFixed(1)}
					</p>
					<p>
						<span class="font-semibold">Genres:</span>
						{data.movie.genres.map((genre) => genre.name).join(', ')}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
