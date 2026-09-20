from agents.career_agent import CareerAgent
def test_career_agent():

    agent = CareerAgent()
    user_data = {
        "target_career": "Data Analyst"
    }
    result = agent.analyze(user_data)
  
    assert result["career"] == "Data Analyst"
    assert "Python" in result["required_skills"]
    assert "SQL" in result["required_skills"]
    assert "Excel" in result["required_skills"]
