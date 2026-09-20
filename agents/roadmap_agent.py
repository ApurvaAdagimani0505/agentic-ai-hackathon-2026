class RoadmapAgent:
    def create_roadmap(self, missing_skills, timeline):
        roadmap = []
        for index, skill in enumerate(missing_skills):
            roadmap.append({
                "week": index + 1,
                "skill": skill,
                "tasks": [
                    f"Learn {skill} basics",
                    f"Practice {skill}",
                    f"Complete a small {skill} project"
                ]
            })
        return {
            "timeline": timeline,
            "roadmap": roadmap
        }
