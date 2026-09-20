from agents.orchestrator import Orchestrator

def test_orchestrator():
    orchestrator = Orchestrator()

    user_data = {
        "target_career": "Data Analyst",
        "timeline": "3 months",
        "language": "English",
        "free_resources_only": True,
        "hours_per_week": 10
    }

    current_skills = [
        "Python"
    ]

    result = orchestrator.generate_plan(
        user_data,
        current_skills
    )

    assert "career" in result
    assert "skill_gap" in result
    assert "roadmap" in result
    assert "resources" in result
    assert "weekly_plan" in result

    assert result["career"]["career"] == "Data Analyst"

    assert "SQL" in result["skill_gap"]["missing_skills"]

    assert len(result["roadmap"]["roadmap"]) > 0

    assert len(result["resources"]) > 0

    assert len(result["weekly_plan"]) > 0
