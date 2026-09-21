from fastapi import APIRouter

from backend.services.agent_service import AgentService
from backend.services.database_service import DatabaseService


router = APIRouter()

agent_service = AgentService()
database_service = DatabaseService()


@router.post("/generate-plan")
def generate_plan(request_data: dict):

    user_id = request_data.get("user_id")
    user_data = request_data.get("user_data", {})
    current_skills = request_data.get("current_skills", [])

    # Generate the career plan using the agents
    result = agent_service.generate_career_plan(
        user_data,
        current_skills
    )

    # Save career recommendation to PostgreSQL
    if user_id and result.get("career"):

        career_name = result["career"].get(
            "career",
            user_data.get("target_career", "Unknown")
        )

        match_reason = (
            f"Career recommendation generated for {career_name}."
        )

        # database_service.save_career_recommendation(
        #     user_id,
        #     career_name,
        #     match_reason
        # )

    return result
