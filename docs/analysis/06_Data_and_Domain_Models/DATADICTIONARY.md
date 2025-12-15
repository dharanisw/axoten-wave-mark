| Field Name          | Description               | Type        |
| ------------------- | ------------------------- | ----------- |
| user_id             | Unique user identifier    | String      |
| role                | Student / Teacher / Admin | Enum        |
| assessment_id       | Assessment identifier     | String      |
| question_id         | Essay question identifier | String      |
| question_text       | Essay question content    | Text        |
| reference_answer    | Teacher’s model answer    | Text        |
| reference_embedding | Vector from Gemini        | Float Array |
| submission_id       | Student submission ID     | String      |
| student_answer      | Student essay text        | Text        |
| student_embedding   | Student answer vector     | Float Array |
| similarity_score    | Similarity value          | Float       |
| creativity_weight   | Adjustment factor         | Float       |
| final_marks         | Marks awarded             | Float       |
| feedback            | AI-generated feedback     | Text        |
| created_at          | Timestamp                 | DateTime    |
