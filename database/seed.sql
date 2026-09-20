INSERT INTO users (name, email)
VALUES
('Apurva', 'apurva@example.com'),
('Anushka', 'anushka@example.com');

INSERT INTO user_preferences
(
    user_id,
    target_career,
    compare_career,
    career_goal,
    interests,
    work_mode,
    location,
    timeline,
    hours_per_week,
    budget,
    language,
    free_resources_only,
    learning_style
)
VALUES
(
    1,
    'Data Analyst',
    'Data Scientist',
    'Get a job as a Data Analyst',
    'Data, Technology, Analytics',
    'Hybrid',
    'Kolhapur',
    '3 months',
    10,
    0,
    'English',
    TRUE,
    'Video, Practice'
);


INSERT INTO user_skills
(
    user_id,
    skill_name,
    skill_level
)
VALUES
(1, 'Python', 'Beginner'),
(1, 'Excel', 'Beginner'),
(1, 'SQL', 'Beginner');

INSERT INTO career_recommendations
(
    user_id,
    career_name,
    match_reason
)
VALUES
(
    1,
    'Data Analyst',
    'Matches the user interest in data and analytics.'
);

INSERT INTO user_progress
(
    user_id,
    skill_name,
    progress_percentage,
    completed
)
VALUES
(1, 'Python', 30, FALSE),
(1, 'Excel', 50, FALSE),
(1, 'SQL', 20, FALSE);
