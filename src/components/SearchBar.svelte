<script lang="ts">
	import { moviesStore } from '../stores/movies';

	let timeoutId: number;
	const DEBOUNCE_DELAY = 300; // 300ms

	function handleSearch(e: Event) {
		const query = (e.target as HTMLInputElement).value;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			moviesStore.update((state) => ({
				...state,
				query: String(query).trim(),
				currentPage: 1,
				movies: []
			}));
		}, DEBOUNCE_DELAY);
	}
</script>

<input
	type="text"
	placeholder="Search movies..."
	on:input={handleSearch}
	class="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
/>
