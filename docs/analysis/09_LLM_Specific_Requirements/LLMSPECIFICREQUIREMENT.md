# Prompt Templates

Reference Answer Embedding Prompt: “Generate an embedding vector for the following reference answer: [text].”

Student Answer Evaluation Prompt: “Generate an embedding vector for this student answer: [text].”

Feedback Prompt: “Provide short, constructive feedback comparing this student answer to the reference answer.”

# Marking Logic Explanation

* Embeddings represent both answers as vectors.

* Cosine similarity determines closeness.

* Score = similarity × maximum marks.

* Thresholds can adjust difficulty.

# Risks (Hallucination, Bias, Incorrect Score)

* Feedback may introduce incorrect claims.

* Embeddings may favour certain writing styles.

* Similarity may not reflect true understanding.

# Guard Rails & Fallback Steps

* Re-check similarity if sudden large deviation.

* If embedding generation fails twice, queue for manual review.

* Flag submissions with extremely high/low scores.

# Expected Output Structure of Gemini

* Embedding: array

* Feedback: short text string

* Tokens used: integer

* Error object if failure occurs