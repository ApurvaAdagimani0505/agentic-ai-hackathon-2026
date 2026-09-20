from pydantic import BaseModel
from typing import List

class UserPreference(BaseModel):
    target_career: str
    interests: List[str]
    work_mode: str
    location: str
    timeline: str
    hours_per_week: int
    budget: int
    language: str
    free_resources_only: bool
    learning_style: List[str]
