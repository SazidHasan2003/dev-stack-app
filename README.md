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

---

## React Questions

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. We use it in React because it makes writing UI components clean, readable, and easy to structure.

### 2. What is the difference between props and state?

- **Props (Properties):** Read-only data passed from a parent component to a child component. The child cannot change it.
- **State:** Internal data managed within a component. It can be updated dynamically and triggers a re-render when changed.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React hook used to store and track changing data (state) in a component.

- **Where used:** In `TechCatalog.tsx`, I used `useState<ITechType[]>([])` to hold and update the list of selected technologies (`selectedStack`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` allows us to run side effects in a component, such as fetching data from an external source or API when the component renders.
_(Note: In this project, data was fetched using standard Promises with React's `Suspense` and `use()` hook, but `useEffect` is traditionally used to fetch JSON data after the component mounts)._

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify which items have changed, been added, or removed. A unique key helps React update the UI faster and prevents rendering bugs.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements based on certain conditions (like an `if/else` statement).

- **Example in this project:** Displaying the empty stack message when no items are selected in `TechCatalog.tsx`:
  ```tsx
  {selectedStack.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    /* Render stack items */
  )}
  ```
