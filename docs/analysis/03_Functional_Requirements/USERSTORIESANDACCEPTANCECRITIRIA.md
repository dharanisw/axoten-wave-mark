# Story S1: Create Question

As a teacher, I want to create an essay question so that students can answer it.

# Acceptance Criteria:

* Teacher can enter question text.
* Teacher can add reference answer.
* System creates embedding successfully.
* Teacher receives confirmation.

# Story S2: Submit Answer

As a student, I want to submit my essay answer so the system can score it.

# Acceptance Criteria:

*  Student can view all assigned questions.
* Submission is saved.
* Embedding is generated.
* Student receives message confirming submission.

# Story S3: Automatic Scoring

As the system, must score each student submission.

# Acceptance Criteria:

* Reference embedding is retrieved.
* Student embedding processed.
* Similarity calculation completed.
* Score stored.

# Story S4: View Score

As a student, I want to see my marks and feedback.

# Acceptance Criteria:

* Marks appear correctly.
* Feedback text displayed.
* Only the owner of the submission can view it.

# Story S5: View Class Performance

As a teacher, I want to view class performance trends.

# Acceptance Criteria:

* Score list displayed.
* Summary chart available.
* Teacher can filter by question.