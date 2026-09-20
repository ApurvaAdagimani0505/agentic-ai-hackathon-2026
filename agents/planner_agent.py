class PlannerAgent:
    def create_plan(self, roadmap, hours_per_week):
        plan = []
        for item in roadmap:
            plan.append({
                "week": item["week"],
                "skill": item["skill"],
                "available_hours": hours_per_week,
                "tasks": item["tasks"]
            })
        return plan
