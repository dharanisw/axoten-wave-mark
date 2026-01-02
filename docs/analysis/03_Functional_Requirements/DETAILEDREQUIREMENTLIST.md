R-01: Account & Roles

* Must support Teacher, Student, and Admin roles.

* Must restrict access based on role.

R-02: Question Creation

* Teacher provides text for question.

* Teacher adds modeule answer.

* System generates embedding and stores it.

R-03: Student Submission

* Student writes answer within UI.

* System validates answer length and format.

R-04: Score Calculation

* Similarity algorithm threshold rules configurable.

* Mark range from 0 to maximum defined by teacher.

R-05: Feedback Generation

* System creates brief text feedback using Gemini API.

R-06: Data Storage

* Store questions, answers, embeddings, scores, timestamps.

R-07: Results Viewing

* Students see only their results.

* Teachers see class-level and individual-level results.

R-08: Export & Reporting

* Teachers can export results to CSV.

R-09: Logs & Audit

* System logs any changes to questions and marks.

R-10: Error Messaging

* Clear messages for failures, missing data, or API issues.