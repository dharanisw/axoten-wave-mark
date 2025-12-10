| Field               | Description                   | Type   | Example |
| ------------------  | :---------------------------- | :----- | :-------|
| question_id         |   Unique question reference   | String | Q123 |
| question_text       |   Essay prompt                | Text   | “Explain MAC Address” |
| reference_answer    |   Teacher answer              | Text   |  “MAC Address is..” |
| reference_embedding |   Embedding vector            | Array  | [0.23,0.91...] |
| student_id          |   User ID                     | String | STU110 |
| student_answer      |   Student essay               | Text   | "In Computers..."|
| student_embedding   |   Embedding vector            | Array  | [..] |
| similarity          |   Score between vectors       | Float  | 0.78 |
| marks               |   Assigned score              | Float  | 18 |