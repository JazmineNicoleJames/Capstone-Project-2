
DROP DATABASE halloween;
CREATE DATABASE halloween;
\connect halloween;
\i halloween-seed.sql;

CREATE TABLE IF NOT EXISTS costumes (
    item_name TEXT PRIMARY KEY,
    theme TEXT,
    experience_level TEXT,
    gender_pref TEXT,
    result_type TEXT,
    youtube_video_id TEXT,
    amazon_link_id TEXT,
    img TEXT
)