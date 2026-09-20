from agents.resource_agent import ResourceAgent

def test_resource_agent():
    agent = ResourceAgent()

    skills = [
        "Python",
        "SQL"
    ]

    result = agent.find_resources(
        skills,
        "English",
        True
    )

    assert len(result) == 2
    assert result[0]["skill"] == "Python"
    assert result[0]["language"] == "English"
    assert result[0]["free_only"] is True
    assert result[0]["type"] == "Video + Practice"
