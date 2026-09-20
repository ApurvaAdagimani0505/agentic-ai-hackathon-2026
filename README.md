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


# CareerPath

CareerPath is an AI-powered career guidance platform that helps
students choose career paths, identify skill gaps, create personalized
learning roadmaps, find learning resources, and generate weekly study plans.

## Features

- Career analysis
- Skill gap analysis
- Personalized learning roadmap
- Learning resource recommendations
- Weekly study planning
- LLM-powered career guidance
- PostgreSQL database
- AI agent orchestration

## AI Agents

1. Career Agent
2. Skill Gap Agent
3. Roadmap Agent
4. Resource Agent
5. Planner Agent
6. Orchestrator

## Technology Stack

- Frontend: React
- Backend: FastAPI
- Programming Language: Python
- Database: PostgreSQL
- AI/LLM: LLM API
- Testing: Pytest
- Version Control: GitHub

## Project Structure

```text
agentic-ai-hackathon-2026/
agents/
backend/
data/
 database/
 llm/
 models/ notebooks/
 tests/
 requirements.txt
 .gitignore
README.md
