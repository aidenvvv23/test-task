<script lang="ts">
	const menus = [
		{ name: 'Discover', href: '/discover' },
		{ name: 'Favorite', href: '#' },
		{ name: 'Watch List', href: '#' }
	];
	let isShowMenu = false;
	const toggleMenu = () => {
		isShowMenu = !isShowMenu;
	};

	const handleLogin = () => {
		alert('Login clicked');
	};
</script>

<header class="bg-white pb-0 shadow-lg lg:pb-0">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- lg+ -->
		<nav class="flex h-16 items-center justify-between lg:h-20">
			<div class="flex-shrink-0">
				<a href="/" title="" class="flex">
					<!-- logo here -->
					<h1 class="text-2xl font-bold">Movie App</h1>
				</a>
			</div>

			<button
				type="button"
				class="cursor-pointer inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
				aria-controls="mobile-menu"
				aria-expanded={isShowMenu}
				on:click={toggleMenu}
			>
				<svg
					class="block h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 8h16M4 16h16"
					/>
				</svg>

				<!-- Menu open: "block", Menu closed: "hidden" -->
				<svg
					class="hidden h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
				{#each menus as menu}
					<a
						href={menu.href}
						title=""
						class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
					>
						{menu.name}
					</a>
				{/each}
			</div>

			<a
				href="#"
				title=""
				class="ml-10 hidden items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 lg:inline-flex"
				role="button"
				on:click={handleLogin}
			>
				Log In
			</a>
		</nav>

		<!-- xs to lg -->
		{#if isShowMenu}
			<nav class="rounded-md bg-white py-3 lg:hidden">
				<div class="flow-root">
					<div class="-my-2 flex flex-col space-y-2">
						{#each menus as menu}
							<a
								href={menu.href}
								title=""
								class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
							>
								{menu.name}
							</a>
						{/each}
					</div>
				</div>

				<div class="mt-6">
					<a
						href="#"
						title=""
						class="tems-center inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
						role="button"
						on:click={handleLogin}
					>
						Log in
					</a>
				</div>
			</nav>
		{/if}
	</div>
</header>
