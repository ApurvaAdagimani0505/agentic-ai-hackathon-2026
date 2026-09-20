from agents.orchestrator import Orchestrator


class AgentService:

    def __init__(self):
        self.orchestrator = Orchestrator()

    def generate_career_plan(self, user_data, current_skills):

        result = self.orchestrator.generate_plan(
            user_data,
            current_skills
        )

        return result