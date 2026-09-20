class CareerAgent:
    def analyze(self, user_data):
        career = user_data.get("target_career", "")
        career_skills = {
            "Data Analyst": [
                "Python",
                "SQL",
                "Excel",
                "Statistics",
                "Power BI",
                "Tableau"
            ],
            "Frontend Developer": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Git",
                "APIs"
            ],
            "Data Scientist": [
                "Python",
                "Statistics",
                "Machine Learning",
                "SQL",
                "Pandas",
                "NumPy"
            ],
            "Cybersecurity Engineer": [
                "Networking",
                "Linux",
                "Python",
                "Cybersecurity Fundamentals",
                "Ethical Hacking",
                "Security Tools"
            ]
        }
        required_skills = career_skills.get(career, [])
        return {
            "career": career,
            "required_skills": required_skills
        }
