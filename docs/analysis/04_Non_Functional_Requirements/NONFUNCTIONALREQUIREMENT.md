# Performance Needs

* Embedding generation should complete within 2–5 seconds.

* Scoring per submission must complete within 1 second after embedding.

* Results pages should load under 2 seconds with up to 1000 entries.

# Reliability Targets

* System uptime target: 99%.

* Score calculation must produce consistent results for identical inputs.

* No data loss during embedding or scoring.

# Security & Privacy Notes

* All data must be encrypted in transit.

* Student data must remain confidential.

* API keys stored securely.

* No raw embeddings shared to users.

* Teacher feedback logs restricted.

# Audit & Logging Needs

* Log question creation, edits, and deletions.

* Log student submissions (without storing essay text in logs).

* Log scoring engine failures.

* Admin can review logs.

# File Handling Limit

* Student answer text limit: 3000–5000 characters.

* Reference answer text limit: 8000 characters.

* No file uploads for answers; only text.

# Data Retention Rule

* Answers retained for minimum 1 year.

* Embeddings retained as long as the course is active.

* Logs retained for 180 days.

* Admin can archive old assessment data.