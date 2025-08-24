# 🎓 Career Recommendation & Roadmap Generator

An **AI-powered career guidance system** that recommends suitable academic courses based on a student’s **interests and qualifications**, and generates a **4-year structured roadmap** toward career success.

This project integrates **Sentence-BERT** for semantic similarity, **Google Gemini AI** for roadmap generation, and **Graphviz** for visualization. The system outputs both a **machine-readable JSON roadmap** and a **visually appealing PDF flowchart** covering academics, skills, projects, internships, and job readiness.

---

## 🌟 Key Features
- **Personalized Course Recommendation** → Matches user interests with the best course using Sentence-BERT.
- **Related Alternatives** → Gemini AI suggests additional relevant degree programs.
- **Structured Roadmap** → Semester-wise plan including curriculum, skills, projects, online courses, and career prep.
- **Visualization** → Outputs JSON roadmap and generates a PDF flowchart with color-coded hierarchy.
- **End-to-End Guidance** → Covers academics, soft skills, hackathons, internships, and job placement.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Language** | Python |
| **AI Models** | Sentence-BERT (`all-MiniLM-L6-v2`), Google Gemini 1.5 Pro |
| **Libraries** | Pandas, Scikit-learn, SentenceTransformers, Graphviz |
| **Visualization** | Graphviz PDF flowchart |
| **Dataset** | Custom dataset (`final_course_data_for_bert.csv`) |

---

## 📂 Project Structure

```bash
Career_Recommendation/
│
├── UI/
│
├── public/
│
├── src/
│   └── README.md
│
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
│
├── backend/
│
├── ScriptFile.py                  # Main Python script
├── courses.pdf                    # Flowchart visualization
├── final_course_data_for_bert.csv # Dataset
├── flowchart.json                 # Structured roadmap (JSON)
└── README.md
```

---

## ⚙️ Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/SHAKEEL347/Power_Rangers.git](https://github.com/SHAKEEL347/Power_Rangers.git)
    cd Power_Rangers
    ```
2.  **Create a virtual environment (optional but recommended)**
    ```bash
    python -m venv venv
    source venv/bin/activate      # On Windows: venv\Scripts\activate
    ```
3.  **Install dependencies**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Setup Google Gemini API Key**
    Generate an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    
    Add the key in your code:
    ```python
    genai.configure(api_key="YOUR_API_KEY")
    ```

---
## Program Flow

1. Enter your interests (e.g., “Artificial Intelligence, Web Development”).
2. Enter your qualification (e.g., “12th grade”, “Diploma”, “Bachelor’s”).
3. Get the best course recommendation.
4. View alternative course suggestions.
5. Select a course → receive a complete roadmap.
---

## Output Files Generated

- **flowchart.json** → structured JSON roadmap  
- **courses.pdf** → flowchart visualization  
---

# Visualization

## 📊 Example Output  

**Recommended Course:**  

🎯 Recommended Course: B.Tech in Computer Science (Data Science & AI)  

**Related Alternatives:**  
1. B.Tech in Computer Science (Data Science & AI)  (model-recommended)  
2. B.Tech in Artificial Intelligence  
3. B.Tech in Machine Learning  
4. B.Tech in Big Data Analytics  
5. B.Tech in Robotics & Automation  

---

## Sample Roadmap JSON (excerpt):

```
{
  "roadmap": {
    "title": "B.Tech in Data Science & AI",
    "Year 1": {
      "Semester 1": {
        "Subjects": ["Mathematics", "Programming Fundamentals", "Computing Basics"],
        "Skills": ["Python Basics", "Problem Solving"],
        "Projects": ["Calculator App", "Basic Data Visualizer"]
      }
    }
  }
}
```

## Flowchart Visualization:
The roadmap is rendered in courses.pdf with hierarchical nodes for semesters, subjects, projects, and skills.

---

# 📌 Roadmap

- Personalized course matching using **Sentence-BERT**  
- Career roadmap generation via **Gemini AI**  
- JSON + PDF visualization of academic plans  
- Web-based UI (**Flask/Streamlit**)  
- Job recommendation engine (**LinkedIn/Indeed API integration**)  
- Multi-language support  
