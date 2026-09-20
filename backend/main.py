from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.career import router as career_router
from backend.routes.user import router as user_router


app = FastAPI(
    title="Agentic AI CareerPath API",
    description="Backend API for personalized career planning",
    version="1.0.0"
)


# Allow frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Agentic AI Backend is running!"
    }


app.include_router(
    career_router,
    prefix="/api/career",
    tags=["Career"]
)

app.include_router(
    user_router,
    prefix="/api/user",
    tags=["User"]
)