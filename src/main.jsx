import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft, ArrowRight, Check, Plus, X, Upload, Github,
  Linkedin, Sparkles, Target, BookOpen, GraduationCap, UserRound,
  BriefcaseBusiness, Clock3, Wallet, Languages, ChevronDown
} from "lucide-react";
import "./styles.css";

const steps = [
  { id: 1, title: "About you", icon: UserRound },
  { id: 2, title: "Education", icon: GraduationCap },
  { id: 3, title: "Skills & experience", icon: BriefcaseBusiness },
  { id: 4, title: "Career goal", icon: Target },
  { id: 5, title: "Learning preferences", icon: BookOpen }
];

const skillOptions = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
  "MongoDB", "MySQL", "Python", "Java", "C++", "Git/GitHub",
  "REST APIs", "Data Structures", "Machine Learning", "Data Science",
  "SQL", "Tailwind CSS"
];

const roleOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Developer",
  "Data Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "DevOps Engineer",
  "UI/UX Designer"
];

const initialData = {
  fullName: "",
  email: "",
  status: "Student",
  degree: "B.E./B.Tech",
  branch: "Computer Science",
  currentYear: "3rd year",
  graduationYear: "",
  college: "",
  cgpa: "",
  skills: [],
  skillLevels: {},
  projects: "",
  experience: "",
  certifications: "",
  github: "",
  linkedin: "",
  resume: null,
  targetCareer: "Frontend Developer",
  compareCareer: "",
  careerGoal: "",
  interests: [],
  workMode: "No preference",
  location: "",
  timeline: "6 months",
  studyHours: 10,
  budget: 0,
  freeOnly: true,
  language: "English",
  learningStyles: []
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const update = (key, value) => setData(prev => ({ ...prev, [key]: value }));

  const validate = () => {
    const e = {};
    if (currentStep === 1 && !data.fullName.trim()) e.fullName = "Full name is required.";
    if (currentStep === 2) {
      if (!data.degree) e.degree = "Select your degree.";
      if (!data.branch) e.branch = "Select your branch.";
      if (!data.currentYear) e.currentYear = "Select your current year.";
    }
    if (currentStep === 3 && data.skills.length === 0) e.skills = "Add at least one skill.";
    if (currentStep === 4) {
      if (!data.targetCareer) e.targetCareer = "Select a target career.";
      if (!data.careerGoal.trim()) e.careerGoal = "Write your career goal.";
      if (!data.timeline) e.timeline = "Select a target timeline.";
    }
    if (currentStep === 5) {
      if (!data.studyHours) e.studyHours = "Choose your weekly study hours.";
      if (data.budget < 0) e.budget = "Budget cannot be negative.";
      if (!data.language) e.language = "Select a language.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    setCurrentStep(s => Math.min(5, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setErrors({});
    setCurrentStep(s => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = () => {
    if (!validate()) return;
    console.log("Career profile:", data);
    alert("Profile saved! Connect this action to your backend/API.");
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark"><Sparkles size={17} /></div>
          <span>CareerPath</span>
        </div>
        <span className="demo-badge">Profile Builder</span>
      </header>

      <main className="page">
        <section className="hero">
          <p className="eyebrow">BUILD YOUR ROADMAP</p>
          <h1>Tell us about yourself.</h1>
          <p className="hero-text">
            Answer a few questions and we’ll use your background, skills and
            goals to create a practical learning roadmap.
          </p>
        </section>

        <StepNavigation currentStep={currentStep} setCurrentStep={setCurrentStep} />

        <section className="form-card">
          <StepHeader step={steps[currentStep - 1]} currentStep={currentStep} />

          {currentStep === 1 && <AboutStep data={data} update={update} errors={errors} />}
          {currentStep === 2 && <EducationStep data={data} update={update} errors={errors} />}
          {currentStep === 3 && <SkillsStep data={data} update={update} errors={errors} />}
          {currentStep === 4 && <CareerStep data={data} update={update} errors={errors} />}
          {currentStep === 5 && <PreferencesStep data={data} update={update} errors={errors} />}

          <div className="form-footer">
            <button className="btn secondary" onClick={back} disabled={currentStep === 1}>
              <ArrowLeft size={17} /> Back
            </button>

            {currentStep < 5 ? (
              <button className="btn primary" onClick={next}>
                Continue <ArrowRight size={17} />
              </button>
            ) : (
              <button className="btn primary" onClick={submit}>
                <Check size={17} /> Create roadmap
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function StepNavigation({ currentStep, setCurrentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const done = step.id < currentStep;
        const active = step.id === currentStep;
        return (
          <React.Fragment key={step.id}>
            <button
              className={`step-item ${active ? "active" : ""} ${done ? "done" : ""}`}
              onClick={() => step.id <= currentStep && setCurrentStep(step.id)}
            >
              <span className="step-circle">
                {done ? <Check size={15} /> : <Icon size={15} />}
              </span>
              <span className="step-label">{step.title}</span>
            </button>
            {index < steps.length - 1 && <div className={`step-line ${done ? "filled" : ""}`} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function StepHeader({ step, currentStep }) {
  const Icon = step.icon;
  return (
    <div className="step-header">
      <div className="step-icon"><Icon size={21} /></div>
      <div>
        <div className="step-count">STEP {currentStep} OF 5</div>
        <h2>{step.title}</h2>
      </div>
    </div>
  );
}

function Field({ label, required, hint, error, children }) {
  return (
    <div className="field">
      <div className="label-row">
        <label>{label}{required && <span className="required"> *</span>}</label>
        {hint && <span className="hint">{hint}</span>}
      </div>
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <div className="select-wrap">
      <select className="input select" value={value} onChange={e => onChange(e.target.value)}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown size={16} />
    </div>
  );
}

function AboutStep({ data, update, errors }) {
  return (
    <div className="form-grid">
      <Field label="Full name" required error={errors.fullName}>
        <Input value={data.fullName} onChange={v => update("fullName", v)} placeholder="e.g. Name Surname" />
      </Field>

      <Field label="Email" hint="Optional">
        <Input type="email" value={data.email} onChange={v => update("email", v)} placeholder="you@example.com" />
      </Field>

      <Field label="Current status" required>
        <Select
          value={data.status}
          onChange={v => update("status", v)}
          options={["Student", "Working professional", "Career switcher", "Job seeker"]}
        />
      </Field>

      <div className="info-box full">
        <UserRound size={18} />
        <div>
          <strong>Why we ask</strong>
          <p>Your current status helps us adjust the roadmap to your available time and starting point.</p>
        </div>
      </div>
    </div>
  );
}

function EducationStep({ data, update, errors }) {
  return (
    <div className="form-grid">
      <Field label="Degree" required error={errors.degree}>
        <Select
          value={data.degree}
          onChange={v => update("degree", v)}
          options={["Diploma", "B.E./B.Tech", "B.Sc", "BCA", "B.Com", "BA", "BBA", "M.Tech", "MCA", "MBA", "M.Sc", "Other"]}
        />
      </Field>

      <Field label="Branch or specialization" required error={errors.branch}>
        <Select
          value={data.branch}
          onChange={v => update("branch", v)}
          options={["Computer Science", "IT", "ECE", "EEE", "Mechanical", "Civil", "Commerce", "Arts", "Other"]}
        />
      </Field>

      <Field label="Current year" required error={errors.currentYear}>
        <Select
          value={data.currentYear}
          onChange={v => update("currentYear", v)}
          options={["1st year", "2nd year", "3rd year", "4th year", "Graduated"]}
        />
      </Field>

      {data.currentYear === "Graduated" && (
        <Field label="Graduation year" required>
          <Input type="number" value={data.graduationYear} onChange={v => update("graduationYear", v)} placeholder="2026" />
        </Field>
      )}

      <Field label="College or university">
        <Input value={data.college} onChange={v => update("college", v)} placeholder="Your college / university" />
      </Field>

      <Field label="CGPA or percentage">
        <Input type="number" value={data.cgpa} onChange={v => update("cgpa", v)} placeholder="e.g. 8.9 or 89.0" />
      </Field>
    </div>
  );
}

function SkillsStep({ data, update, errors }) {
  const [skillSearch, setSkillSearch] = useState("");
  const filtered = skillOptions.filter(s =>
    s.toLowerCase().includes(skillSearch.toLowerCase()) && !data.skills.includes(s)
  );

  const addSkill = skill => {
    update("skills", [...data.skills, skill]);
    update("skillLevels", { ...data.skillLevels, [skill]: 1 });
    setSkillSearch("");
  };

  const removeSkill = skill => {
    update("skills", data.skills.filter(s => s !== skill));
    const levels = { ...data.skillLevels };
    delete levels[skill];
    update("skillLevels", levels);
  };

  const setLevel = (skill, level) =>
    update("skillLevels", { ...data.skillLevels, [skill]: Number(level) });

  return (
    <div>
      <Field label="Skills you have" required hint="Search and add" error={errors.skills}>
        <div className="search-box">
          <input
            className="input"
            value={skillSearch}
            onChange={e => setSkillSearch(e.target.value)}
            placeholder="Search skills..."
          />
          {skillSearch && filtered.length > 0 && (
            <div className="suggestions">
              {filtered.slice(0, 6).map(skill => (
                <button key={skill} onClick={() => addSkill(skill)}>{skill}<Plus size={14} /></button>
              ))}
            </div>
          )}
        </div>
      </Field>

      {data.skills.length > 0 && (
        <div className="skills-list">
          {data.skills.map(skill => (
            <div className="skill-row" key={skill}>
              <div className="skill-name">
                <span className="skill-dot" />
                {skill}
                <button className="icon-btn" onClick={() => removeSkill(skill)}><X size={14} /></button>
              </div>
              <div className="level-selector">
                {[0, 1, 2, 3, 4].map(level => (
                  <button
                    key={level}
                    className={data.skillLevels[skill] === level ? "level active" : "level"}
                    onClick={() => setLevel(skill, level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <span className="level-text">{["Not started", "Beginner", "Basic", "Working", "Advanced"][data.skillLevels[skill]]}</span>
            </div>
          ))}
        </div>
      )}

      <div className="two-col">
        <Field label="Projects" hint="Optional">
          <textarea className="textarea" value={data.projects} onChange={e => update("projects", e.target.value)} placeholder="Project title + tools used..." />
        </Field>
        <Field label="Internships or work experience" hint="Optional">
          <textarea className="textarea" value={data.experience} onChange={e => update("experience", e.target.value)} placeholder="Role, company, duration..." />
        </Field>
        <Field label="Certifications">
          <Input value={data.certifications} onChange={v => update("certifications", v)} placeholder="e.g. NPTEL, AWS..." />
        </Field>
        <Field label="GitHub">
          <div className="icon-input"><Github size={17} /><Input value={data.github} onChange={v => update("github", v)} placeholder="github.com/username" /></div>
        </Field>
        <Field label="LinkedIn">
          <div className="icon-input"><Linkedin size={17} /><Input value={data.linkedin} onChange={v => update("linkedin", v)} placeholder="linkedin.com/in/username" /></div>
        </Field>
        <Field label="Resume upload" hint="PDF / DOCX">
          <label className="upload">
            <Upload size={18} />
            <span>{data.resume ? data.resume.name : "Choose resume"}</span>
            <input type="file" accept=".pdf,.doc,.docx" onChange={e => update("resume", e.target.files?.[0] || null)} />
          </label>
        </Field>
      </div>
    </div>
  );
}

function CareerStep({ data, update, errors }) {
  const interests = ["Web development", "AI / ML", "Data", "Cloud", "Open source", "UI/UX", "Cybersecurity"];

  const toggleInterest = item => {
    update("interests", data.interests.includes(item)
      ? data.interests.filter(x => x !== item)
      : [...data.interests, item]);
  };

  return (
    <div className="form-grid">
      <Field label="Target career" required error={errors.targetCareer}>
        <Select value={data.targetCareer} onChange={v => update("targetCareer", v)} options={roleOptions} />
      </Field>

      <Field label="Compare with another career" hint="Optional">
        <Select value={data.compareCareer} onChange={v => update("compareCareer", v)} options={["", ...roleOptions]} />
      </Field>

      <Field label="Career goal in your words" required error={errors.careerGoal}>
        <textarea className="textarea full" value={data.careerGoal} onChange={e => update("careerGoal", e.target.value)} placeholder='Example: "Join a product company as a data analyst."' />
      </Field>

      <Field label="Interests">
        <div className="tag-grid">
          {interests.map(item => (
            <button key={item} className={`tag ${data.interests.includes(item) ? "selected" : ""}`} onClick={() => toggleInterest(item)}>
              {data.interests.includes(item) && <Check size={14} />} {item}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Work mode">
        <div className="segmented">
          {["Remote", "Onsite", "Hybrid", "No preference"].map(item => (
            <button key={item} className={data.workMode === item ? "selected" : ""} onClick={() => update("workMode", item)}>{item}</button>
          ))}
        </div>
      </Field>

      <Field label="Location preference">
        <Input value={data.location} onChange={v => update("location", v)} placeholder="e.g. Pune, Bengaluru, Anywhere" />
      </Field>

      <Field label="Target timeline" required error={errors.timeline}>
        <Select value={data.timeline} onChange={v => update("timeline", v)} options={["3 months", "6 months", "12 months", "Custom"]} />
      </Field>
    </div>
  );
}

function PreferencesStep({ data, update, errors }) {
  const styles = ["Videos", "Reading & docs", "Hands-on projects", "Guided courses"];

  return (
    <div>
      <div className="preference-grid">
        <Field label="Study hours per week" required error={errors.studyHours}>
          <div className="range-card">
            <div className="range-value"><Clock3 size={17} /> {data.studyHours} hours</div>
            <input
              type="range"
              min="1"
              max="40"
              value={data.studyHours}
              onChange={e => update("studyHours", Number(e.target.value))}
            />
            <div className="range-labels"><span>1h</span><span>20h</span><span>40h</span></div>
          </div>
        </Field>

        <Field label="Budget" required error={errors.budget}>
          <div className="budget-box">
            <Wallet size={18} />
            <span>₹</span>
            <input
              type="number"
              value={data.budget}
              min="0"
              onChange={e => update("budget", Number(e.target.value))}
            />
          </div>
          <label className="checkbox">
            <input type="checkbox" checked={data.freeOnly} onChange={e => update("freeOnly", e.target.checked)} />
            Free resources only
          </label>
        </Field>

        <Field label="Preferred language" required error={errors.language}>
          <Select value={data.language} onChange={v => update("language", v)} options={["English", "Hindi", "Kannada", "Marathi", "Tamil", "Telugu"]} />
        </Field>
      </div>

      <Field label="Learning style">
        <div className="learning-options">
          {styles.map(style => (
            <button
              key={style}
              className={`learning-card ${data.learningStyles.includes(style) ? "selected" : ""}`}
              onClick={() => update(
                "learningStyles",
                data.learningStyles.includes(style)
                  ? data.learningStyles.filter(x => x !== style)
                  : [...data.learningStyles, style]
              )}
            >
              <span className="check-square">{data.learningStyles.includes(style) ? <Check size={14} /> : null}</span>
              <span>{style}</span>
            </button>
          ))}
        </div>
      </Field>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
