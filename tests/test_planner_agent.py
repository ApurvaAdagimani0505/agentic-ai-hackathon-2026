from agents.planner_agent import PlannerAgent

def test_planner_agent():
    agent = PlannerAgent()
    roadmap = [
        {
            "week": 1,
            "skill": "Python",
            "tasks": [
                "Learn Python basics",
                "Practice Python",
                "Complete a small Python project"
            ]
        }
    ]

    result = agent.create_plan(
        roadmap,
        10
    )

    assert len(result) == 1
    assert result[0]["week"] == 1
    assert result[0]["skill"] == "Python"
    assert result[0]["available_hours"] == 10
    assert "tasks" in result[0]
