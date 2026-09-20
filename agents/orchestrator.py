from agents.career_agent import CareerAgent
from agents.skill_gap_agent import SkillGapAgent
from agents.roadmap_agent import RoadmapAgent
from agents.resource_agent import ResourceAgent
from agents.planner_agent import PlannerAgent

class Orchestrator:
    def __init__(self):
        self.career_agent = CareerAgent()
        self.skill_gap_agent = SkillGapAgent()
        self.roadmap_agent = RoadmapAgent()
        self.resource_agent = ResourceAgent()
        self.planner_agent = PlannerAgent()

    def generate_plan(self, user_data, current_skills):
        career_result = self.career_agent.analyze(user_data)
        skill_result = self.skill_gap_agent.analyze(
            career_result["required_skills"],
            current_skills
        )
        roadmap_result = self.roadmap_agent.create_roadmap(
            skill_result["missing_skills"],
            user_data.get("timeline", "")
        )
        resources = self.resource_agent.find_resources(
            skill_result["missing_skills"],
            user_data.get("language", "English"),
            user_data.get("free_resources_only", True)
        )
        plan = self.planner_agent.create_plan(
            roadmap_result["roadmap"],
            user_data.get("hours_per_week", 10)
        )
        return {
            "career": career_result,
            "skill_gap": skill_result,
            "roadmap": roadmap_result,
            "resources": resources,
            "weekly_plan": plan
        }
