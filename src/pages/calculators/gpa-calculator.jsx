import React, { useState } from "react";

const GPACalculator = () => {
  const [grades, setGrades] = useState([
    { course: "", credits: "", grade: "" }
  ]);
  const [gpa, setGPA] = useState(null);
  const [includePrevGPA, setIncludePrevGPA] = useState(false);
  const [prevGPA, setPrevGPA] = useState("");
  const [prevCredits, setPrevCredits] = useState("");
  const [errors, setErrors] = useState([]);
  const [prevErrors, setPrevErrors] = useState({});

  const gradePoints = {
    "A+": 4,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
    F: 0.0,
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    let newErrors = [];
    let hasError = false;

    // Reset errors before validation
    let prevErr = {};

    grades.forEach(({ course, credits, grade }) => {
      let rowErrors = { course: "", credits: "", grade: "" };

      // Validation
      if (!course.trim()) {
        rowErrors.course = "Course name is required.";
        hasError = true;
      }
      if (!credits.trim()) {
        rowErrors.credits = "Credits are required.";
        hasError = true;
      }
      if (!grade.trim()) {
        rowErrors.grade = "Grade is required.";
        hasError = true;
      }

      newErrors.push(rowErrors);

      // Accumulate credits and grade points only if valid
      if (
        credits.trim() &&
        !isNaN(credits) &&
        gradePoints[grade] !== undefined
      ) {
        totalCredits += parseFloat(credits);
        totalPoints += parseFloat(credits) * gradePoints[grade];
      }
    });

    // Handle Previous GPA if included
    if (includePrevGPA) {
      if (!prevGPA.trim()) {
        prevErr.prevGPA = "Previous GPA is required.";
        hasError = true;
      }
      if (!prevCredits.trim()) {
        prevErr.prevCredits = "Previous credits are required.";
        hasError = true;
      }
      if (
        prevGPA.trim() &&
        !isNaN(prevGPA) &&
        prevCredits.trim() &&
        !isNaN(prevCredits)
      ) {
        totalCredits += parseFloat(prevCredits);
        totalPoints += parseFloat(prevCredits) * parseFloat(prevGPA);
      }
    }

    setErrors(newErrors);
    setPrevErrors(prevErr);

    // Final GPA calculation
    if (!hasError) {
      const finalGPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
      setGPA(finalGPA);
    } else {
      setGPA(null); // Clear GPA if there's an error
    }
  };
  const handleChange = (index, field, value) => {
    const newGrades = [...grades];
    const newErrors = [...errors];
    if (value.trim()) {
      newErrors[index] = {
        ...newErrors[index],
        [field]: "",
      };
    }
    newGrades[index][field] = value;
    setGrades(newGrades);
    setErrors(newErrors);
  };

  const addRow = () => {
    setGrades([...grades, { course: "", credits: "", grade: "" }]);
    setErrors([...errors, { course: "", credits: "", grade: "" }]);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-screen-xl mx-auto">
    <div className="flex-1 p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">GPA Calculator</h1>
      <p className="mb-4 text-gray-700">
        The Grade Point Average (GPA) is a widely used metric for assessing academic performance. It is calculated by averaging the grades earned in courses while considering the assigned credit hours.
      </p>

      <table className="w-full border-collapse border border-gray-300 mb-4 max-w-[400px]">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Course</th>
            <th className="border border-gray-300 px-4 py-2">Credits</th>
            <th className="border border-gray-300 px-4 py-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-2 py-2">
                <input
                  type="text"
                  value={row.course}
                  onChange={(e) => handleChange(index, "course", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Course"
                />
                {errors[index]?.course && (
                    <p className="text-red-500 text-sm">{errors[index].course}</p>
                  )}
              </td>
              <td className="border border-gray-300 px-2 py-2">
                <input
                  type="number"
                  value={row.credits}
                  onChange={(e) => handleChange(index, "credits", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Credits"
                />
                {errors[index]?.credits && (
                    <p className="text-red-500 text-sm">{errors[index].credits}</p>
                  )}
              </td>
              <td className="border border-gray-300 px-2 py-2">
                <select
                  value={row.grade}
                  onChange={(e) => handleChange(index, "grade", e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Grade</option>
                  {Object.keys(gradePoints).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade} 
                    </option>
                  ))}
                </select>
                {errors[index]?.grade && (
                    <p className="text-red-500 text-sm">{errors[index].grade}</p>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <label className="flex items-center mb-4 cursor-pointer w-fit ">
        <input
          type="checkbox"
          checked={includePrevGPA}
          onChange={() => setIncludePrevGPA(!includePrevGPA)}
          className="mr-2"
        />
        Include Previous Semester GPA
      </label>

      {includePrevGPA && (
        <div className="flex gap-5 mb-4">
          <div>
          <input
            type="number"
            placeholder="Previous GPA"
            value={prevGPA}
            onChange={(e) => setPrevGPA(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {prevErrors.prevGPA && (
                <p className="text-red-500 text-sm">{prevErrors.prevGPA}</p>
              )}
              </div>
              <div>
          <input
            type="number"
            placeholder="Previous Semester Credits"
            value={prevCredits}
            onChange={(e) => setPrevCredits(e.target.value)}
            className="w-full p-2 border rounded"
          />
                        {prevErrors.prevCredits && (
                <p className="text-red-500 text-sm">{prevErrors.prevCredits}</p>
              )}
              </div>
        </div>
      )}

      <button
        onClick={addRow}
        className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md mr-2 mb-4 cursor-pointer"
      >
        Add Course
      </button>
      <button
        onClick={calculateGPA}
        className="bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Calculate GPA
      </button>
      {gpa && (
        <div className="mt-4 p-4 bg-gray-900 text-white font-bold rounded">
          Your GPA: {gpa}
        </div>
      )}

      <div  className="pt-10 max-w-2xl bg-white">
      <h3 className="text-3xl font-bold mb-4 text-gray-900">Understanding Letter Grades and Their Numerical Equivalents:</h3>

<p>Grade Point Average (GPA) is a widely used measure of a student's academic performance. It represents the average of the grades received in each course, factoring in the course credit. GPA systems vary by country and even by school. This calculator can handle both letter grades and numerical inputs, converting the letter grades to the corresponding numerical values shown below.</p>
<br/>
<ul>
  <li>A+ = 4 grade points</li>
  <li>A = 4 grade points</li>
  <li>A- = 3.7 grade points</li>
  <li>B+ = 3.3 grade points</li>
  <li>B = 3 grade points</li>
  <li>B- = 2.7 grade points</li>
  <li>C+ = 2.3 grade points</li>
  <li>C = 2 grade points</li>
  <li>C- = 1.7 grade points</li>
  <li>D+ = 1.3 grade points</li>
  <li>D = 1 grade point</li>
  <li>D- = 0.7 grade points</li>
  <li>F = 0 grade points</li>
  <li>P (pass), NP (not pass), I (incomplete), and W (withdrawal) will be ignored.</li>
</ul>
<br/>
<p>Most U.S. schools, colleges, and universities use this grading scale, though in some cases, an "E" may be used instead of "F." It's important to note that grading systems can differ between institutions, and some may not use grades like A+ or B-. Additionally, some schools give more weight to certain courses, meaning the grade received in those classes will have a larger impact on your overall GPA. This calculator takes course credits into account, where the credit value acts as the course's "weight," as shown in the examples below.</p>
<br/>
<p><b>Examples:</b></p>
<br/>
<table className="cinfoT">
  <thead>
    <tr>
      <th className="cinfoHd">Course</th>
      <th className="cinfoHdL">Credit</th>
      <th className="cinfoHdL">Grade</th>
      <th className="cinfoHdL">Grade Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Math</td>
      <td className="cinfoBodL">4</td>
      <td className="cinfoBodL">A+</td>
      <td className="cinfoBodL">4 x 4.3 = 17.2</td>
    </tr>
    <tr>
      <td>Physics</td>
      <td className="cinfoBodL">2</td>
      <td className="cinfoBodL">B</td>
      <td className="cinfoBodL">2 x 3 = 6</td>
    </tr>
    <tr>
      <td>English</td>
      <td className="cinfoBodL">3</td>
      <td className="cinfoBodL">A</td>
      <td className="cinfoBodL">3 x 4 = 12</td>
    </tr>
    <tr>
      <td className="cinfoHd" style={{borderBottom: '1px solid #000'}}>Total</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>9</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>NA</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>35.2</td>
    </tr>
    <tr>
      <td className="cinfoHd">GPA</td>
      <td className="cinfoHdL" colSpan="3">35.2 / 9 = 3.91</td>
    </tr>
  </tbody>
</table>

<br />

<table className="cinfoT">
  <thead>
    <tr>
      <th className="cinfoHd">Course</th>
      <th className="cinfoHdL">Credit</th>
      <th className="cinfoHdL">Grade</th>
      <th className="cinfoHdL">Grade Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Biology</td>
      <td className="cinfoBodL">4</td>
      <td className="cinfoBodL">C</td>
      <td className="cinfoBodL">4 x 2 = 8</td>
    </tr>
    <tr>
      <td>Chemistry</td>
      <td className="cinfoBodL">3</td>
      <td className="cinfoBodL">B</td>
      <td className="cinfoBodL">3 x 3 = 9</td>
    </tr>
    <tr>
      <td>Chemistry Lab</td>
      <td className="cinfoBodL">2</td>
      <td className="cinfoBodL">A</td>
      <td className="cinfoBodL">2 x 4 = 8</td>
    </tr>
    <tr>
      <td className="cinfoHd" style={{borderBottom: '1px solid #000'}}>Total</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>9</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>NA</td>
      <td className="cinfoHdL" style={{borderBottom: '1px solid #000'}}>25</td>
    </tr>
    <tr>
      <td className="cinfoHd">GPA</td>
      <td className="cinfoHdL" colSpan="3">25 / 9 = 2.78</td>
    </tr>
  </tbody>
</table>
      </div>

      <div className="pt-10 max-w-2xl bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Tips for Improving Your GPA</h2>

<p>There’s no one-size-fits-all approach to boosting your GPA, and what works for one person might not work for another. That said, there are some key habits and strategies that can generally help when working towards a higher GPA. While these tips are based on personal experiences and aren't foolproof, they can be beneficial for enhancing your learning, which could, in turn, improve your grades.</p>

<h3 className="text-xl font-bold my-4 text-gray-900">Be Present in Class:</h3>
<p>Classes are an investment—whether paid for by you or your parents. Missing classes is not only a waste of that investment but also a missed opportunity for learning. Even if you feel that attending a class isn’t helping or the professor isn’t great, there’s often valuable information shared simply by being there. For example, if you skip class, you might miss important announcements, like changes to exam locations or materials, which could negatively affect your GPA.</p>
<p>It’s also important to note that while professors often post lecture notes online, attending class gives you the chance to hear student questions and explanations that could provide valuable insights. These moments can clarify important concepts and may even be the key to doing better on exams. Interacting with the professor and your peers can help deepen your understanding of the subject and might give you that extra little detail that makes a big difference on tests.</p>
<p>Additionally, regular class attendance, especially in smaller classes, allows professors to recognize you. This can work in your favor if you encounter issues like missed deadlines due to emergencies. Professors are often more understanding of students they know are engaged and proactive. Active participation helps you stay engaged with the material in a way that reading notes or textbooks may not. You can also get immediate clarification on topics you're confused about, which could have a direct impact on your GPA.</p>

<h3 className="text-xl font-bold my-4 text-gray-900">Plan and Organize Your Time:</h3>
<p>Every student learns differently. Some prefer to work for long stretches at a time, while others prefer frequent breaks. There’s no perfect method; it’s about finding what works best for you based on your learning style, schedule, and preferences. The key to success is using your time effectively, which can improve learning and, ultimately, your GPA.</p>
<p>Organization is a big part of this. It’s not just about taking notes, but also about being able to find them when you need them. Notes are most valuable when they can be easily referenced to help reinforce what you've learned. Professors typically present a lot of information, and you may not have time to absorb everything in class. Practicing effective note-taking can help you retain and access information when you need it most.</p>
<p>Effective time management also plays a huge role in planning. With only 24 hours in a day, it’s crucial to make sure you’re using your time wisely. Taking on too many courses or extracurricular activities can overwhelm you, leading to stress and potentially lower grades. Once you know what your schedule looks like, planning your workload for each course can make a big difference in managing stress and maximizing productivity. When you break down your tasks, it becomes easier to see whether you’ve taken on more than you can handle.</p>
<p>Another key aspect of time management is reviewing your work regularly. Instead of cramming everything right before an exam, spreading out your study sessions over time is usually more effective. Periodic review of the material will help reinforce what you’ve learned, save you time, and improve your performance on exams, leading to a better GPA.</p>

      </div>
    </div>
    <div className="w-full lg:w-1/4  bg-gray-100 p-4 shadow-md rounded-xl h-fit " style={{visibility:'hidden', height:'0'}}>
        <h2 className="text-xl font-semibold mb-4">Recommended Calculators</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#" className="hover:underline">CGPA Calculator</a></li>
          <li><a href="#" className="hover:underline">Weighted GPA Calculator</a></li>
          <li><a href="#" className="hover:underline">Final Grade Calculator</a></li>
          <li><a href="#" className="hover:underline">Backlog GPA Estimator</a></li>
        </ul>
      </div>
    </div>
  );
};

export default GPACalculator;
