# Dev Stack Catalog

A modern, interactive Web Development Technology Catalog designed to help developers explore, compare, and build their ideal tech stack for upcoming software projects.

---

## About The Project

Dev Stack Catalog provides a seamless UI for browsing popular frontend, backend, database, and system tooling options. Users can inspect detailed technology specifications—including difficulty levels, ratings, and badges—and curate a custom stack list in real time with interactive UI updates and toast notifications.

---

## Tech Stack

- **Frontend Framework:** React (with Suspense and `use` hook)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4) & Plus Jakarta Sans typography
- **Icons & Notifications:** React Icons (`tb`), React Toastify
- **Asset Loading:** Asynchronous Promise fetching (`technologies.json`)

---

## Key Features

1. **Interactive Stack Management**
   Select technology cards to add items directly into your personal sidebar. Features duplication checks, individual item removal, and a single-click "Remove All" stack clear functionality.

2. **Real-Time Toast Feedback**
   Provides visual feedback using `react-toastify` for state actions including additions, duplicate warnings, individual removals, and stack resets.

3. **Modern Async UI & Responsive Layout**
   Leverages React's `Suspense` and dynamic loading spinner states alongside a responsive grid system adapted across mobile, tablet, and desktop viewports.
