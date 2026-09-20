CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_preferences (
    preference_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    target_career VARCHAR(100),
    compare_career VARCHAR(100),
    career_goal VARCHAR(200),
    interests TEXT,
    work_mode VARCHAR(50),
    location VARCHAR(100),
    timeline VARCHAR(50),
    hours_per_week INTEGER,
    budget INTEGER,
    language VARCHAR(50),
    free_resources_only BOOLEAN DEFAULT TRUE,
    learning_style TEXT
);

CREATE TABLE user_skills (
    skill_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    skill_name VARCHAR(100),
    skill_level VARCHAR(50)
);

CREATE TABLE career_recommendations (
    recommendation_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    career_name VARCHAR(100),
    match_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roadmaps (
    roadmap_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    career_name VARCHAR(100),
    timeline VARCHAR(50),
    roadmap_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_progress (
    progress_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    skill_name VARCHAR(100),
    progress_percentage INTEGER DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE
);
