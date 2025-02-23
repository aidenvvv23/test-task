# Movie Search App

A SvelteKit application for browsing and searching movies using TMDb API.

## Setup

1. Clone repo
2. Install dependencies: `npm install`
3. Create `.env` file with `VITE_TMDB_API_KEY=your_api_key`
4. Run: `npm run dev`

## Features

- Infinite scroll pagination
- Movie search with debounce
- Responsive design
- Error handling
- Lazy loading images

## Component Structure

- `/src/routes`: Application pages
- `/src/components`: Reusable components
- `/src/stores`: Svelte state management
- `/src/api`: API integration
- `/src/enums`: Enums