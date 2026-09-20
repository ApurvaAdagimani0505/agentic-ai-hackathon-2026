CAREER_ANALYSIS_PROMPT = """
You are a career guidance AI.
Analyze the user's information and identify suitable career options.

Consider:
- Target career
- Career goal
- Interests
- Work mode
- Location
- Timeline
- Available hours
- Budget
- Language
- Learning style

User information:
{user_data}

Provide:
1. Target career analysis
2. Required skills
3. Important skills
4. Reason for the career direction
5. Suggested next steps

Return a clear and structured response.
"""
SKILL_GAP_PROMPT = """
You are a skill gap analysis AI.

Compare the user's current skills with the skills required for the target career.

Required skills:
{required_skills}

Current skills:
{current_skills}

Identify:
1. Skills already known
2. Missing skills
3. Skill priority
4. Suggested learning order

Return a clear and structured response.
"""

ROADMAP_PROMPT = """
You are a career learning roadmap AI.

Create a personalized learning roadmap.

Missing skills:
{missing_skills}

Available timeline:
{timeline}

Available hours per week:
{hours_per_week}

For each learning stage provide:
1. Skill
2. Topics
3. Practice task
4. Project task
5. Estimated time

Make the roadmap realistic for the user's available time.
"""

RESOURCE_PROMPT = """
You are a learning resource recommendation AI.

Recommend learning resources according to:

Skills:
{skills}

Language:
{language}

Budget:
{budget}

Free resources only:
{free_only}

Learning style:
{learning_style}

Return resources suitable for each skill.
"""

PLANNER_PROMPT = """
You are a personalized study planning AI.

Create a weekly study plan from the given roadmap.

Roadmap:
{roadmap}

Available hours per week:
{hours_per_week}

Include:
1. Learning
2. Practice
3. Projects
4. Revision
5. Progress tracking

Make the schedule realistic and balanced.
"""
