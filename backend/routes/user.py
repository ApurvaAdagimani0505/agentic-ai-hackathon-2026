from fastapi import APIRouter, HTTPException
from backend.services.database_service import DatabaseService


router = APIRouter()

database_service = DatabaseService()


@router.get("/{user_id}")
def get_user(user_id: int):

    user = database_service.get_user(user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "user_id": user[0],
        "name": user[1],
        "email": user[2]
    }