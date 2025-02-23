<script lang="ts">
	import { SortMethod } from '../enums/sort.enum';
	import { moviesStore } from '../stores/movies';

	const sortOptions = [
		{ value: SortMethod.TitleAsc, label: 'A-Z' },
		{ value: SortMethod.TitleDesc, label: 'Z-A' },
		{ value: SortMethod.PopularityDesc, label: 'Most Popular' },
		{ value: SortMethod.VoteAverageDesc, label: 'Highest Rating' },
		{ value: SortMethod.VoteAverageAsc, label: 'Lowest Rating' },
		{ value: SortMethod.ReleaseDateDesc, label: 'Newest Releases' },
		{ value: SortMethod.ReleaseDateAsc, label: 'Oldest Releases' }
	];

	function handleSortChange(event: Event) {
		const sortBy = (event.target as HTMLSelectElement).value;
		moviesStore.update((state) => ({
			...state,
			sortBy,
			currentPage: 1,
			movies: []
		}));
	}
</script>

<select
	bind:value={$moviesStore.sortBy}
	on:change={handleSortChange}
	class="h-[42px] w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
>
	{#each sortOptions as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>
