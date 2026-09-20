class ResourceAgent:
    def find_resources(self, skills, language, free_only):
        resources = []
        for skill in skills:
            resources.append({
                "skill": skill,
                "language": language,
                "free_only": free_only,
                "type": "Video + Practice"
            })
        return resources
