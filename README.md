# Photo Gallery

A responsive photo gallery web app built with React, Vite, and Tailwind CSS. It fetches photos from the [Lorem Picsum](https://picsum.photos) API and lets users search and favourite them.

## Features

- Fetches 30 photos from the Lorem Picsum API on load
- Search photos by author name (real-time filtering)
- Toggle favourites with a heart button (❤️ / 🤍)
- Favourites are persisted in `localStorage` across page refreshes
- Responsive grid layout (1 → 2 → 4 columns)
- Loading spinner while photos are being fetched
- Error message displayed if the API call fails

## Tech Stack

- [React 19](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — build tool & dev server
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling

## Project Structure

```
src/
├── components/
│   ├── Gallery.jsx          # Main gallery with search & grid
│   ├── PhotoCard.jsx        # Individual photo card with favourite toggle
│   └── Spinner.jsx          # Loading spinner
├── hooks/
│   └── useFetchPhotos.js    # Custom hook to fetch photos from API
├── reducer/
│   └── favouritesReducer.js # useReducer logic + localStorage persistence
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/photo-gallery.git
cd photo-gallery
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## API

Photos are fetched from the public [Lorem Picsum API](https://picsum.photos/v2/list?limit=30) — no API key required.
