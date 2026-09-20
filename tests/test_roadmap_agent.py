from agents.roadmap_agent import RoadmapAgent

def test_roadmap_agent():
    agent = RoadmapAgent()
    missing_skills = [
        "Python",
        "SQL"
    ]
    result = agent.create_roadmap(
        missing_skills,
        "2 months"
    )

    assert result["timeline"] == "2 months"
    assert len(result["roadmap"]) == 2
    assert result["roadmap"][0]["skill"] == "Python"
    assert result["roadmap"][0]["week"] == 1
    assert "tasks" in result["roadmap"][0]
