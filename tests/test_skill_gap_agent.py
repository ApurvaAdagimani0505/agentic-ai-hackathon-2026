from agents.skill_gap_agent import SkillGapAgent

def test_skill_gap_agent():

    agent = SkillGapAgent()

    required_skills = [
        "Python",
        "SQL",
        "Excel"
    ]

    current_skills = [
        "Python"
    ]

    result = agent.analyze(
        required_skills,
        current_skills
    )

    assert "Python" not in result["missing_skills"]
    assert "SQL" in result["missing_skills"]
    assert "Excel" in result["missing_skills"]
