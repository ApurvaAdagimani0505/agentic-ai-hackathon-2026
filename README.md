# agentic-ai-hackathon-2026
An Agentic AI solution developed for the 24-hour hackathon, featuring intelligent agents, LLM integration and automated task execution.


# CareerPath Frontend

React + Vite frontend for the multi-step career roadmap/profile builder.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:5173`.

## Included

- 5-step responsive form
- About, Education, Skills & Experience, Career Goal, Learning Preferences
- Client-side validation
- Skill search + add/remove
- Skill level selector (0–4)
- Resume file picker
- Career/interests/work-mode selectors
- Study-hours slider
- Budget + free-resources toggle
- Learning-style multi-select
- Dark UI matching the supplied reference images

## Backend integration

The final `submit()` function currently logs the collected object and shows an alert. Replace that section with a `fetch()`/Axios call to your backend API.

Example:

```js
await fetch("http://localhost:8000/api/profile", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
```
