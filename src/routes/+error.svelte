<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<div class="screen flex min-h-screen flex-grow items-center justify-center bg-gray-50">
		<div class="rounded-lg bg-white p-8 text-center shadow-xl">
			<h1 class="mb-4 text-4xl font-bold">404</h1>
			<p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
			<a
				href="/"
				class="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
			>
				Go back to Home
			</a>
		</div>
	</div>
{:else}
	<div class="py-16 text-center">
		<h1 class="mb-4 text-4xl font-bold text-red-600">{$page.status}</h1>
		<p class="text-xl text-gray-600">{$page.error?.message}</p>
	</div>
{/if}

<style lang="scss">
	.screen {
		display: flex;
		min-height: 100vh;
		align-items: center;
		justify-content: center;
		background-color: #f3f4f6;
	}
</style>
