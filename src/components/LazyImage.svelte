<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let src;
	export let alt = '';

	let imgElement: HTMLImageElement;

	let observer: any;

	let imgSrc = `https://image.tmdb.org/t/p/w500${src}`;
	function handleImgError(e: any) {
		e.target.onerror = null;
		imgSrc = `https://placehold.co/500x750?text=NoImage`;
	}
	onMount(() => {
		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							imgElement.src = imgSrc;
							observer.unobserve(imgElement);
						}
					});
				},
				{
					rootMargin: '50px'
				}
			);
			observer.observe(imgElement);
		} else {
			imgElement.src = imgSrc;
		}
	});

	onDestroy(() => {
		observer && observer.unobserve(imgElement);
	});
</script>

<img
	bind:this={imgElement}
	{alt}
	loading="lazy"
	class="w-full transform object-cover transition duration-300 ease-in-out hover:scale-115"
	onerror={handleImgError}
/>
