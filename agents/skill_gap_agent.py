class SkillGapAgent:
    def analyze(self, required_skills, current_skills):
        missing_skills = []
        for skill in required_skills:
            if skill not in current_skills:
                missing_skills.append(skill)
        return {
            "current_skills": current_skills,
            "missing_skills": missing_skills
        }
