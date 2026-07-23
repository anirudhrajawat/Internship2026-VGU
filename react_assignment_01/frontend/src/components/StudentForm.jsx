import { useState, useEffect } from "react";

function StudentForm({ selectedStudent, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedStudent) {
      setName(selectedStudent.name);
      setEmail(selectedStudent.email);
      setCourse(selectedStudent.course);
      setMarks(selectedStudent.marks);
    } else {
      setName("");
      setEmail("");
      setCourse("");
      setMarks("");
    }
  }, [selectedStudent]);

  const validateForm = () => {
    if (name.trim() === "") {
      setError("name cannot be empty");
      return false;
    }
    if (course.trim() === "") {
      setError("course cannot be empty");
      return false;
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setError("enter a valid email");
      return false;
    }
    if (marks === "" || marks < 0 || marks > 100) {
      setError("marks should be between 0 and 100");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    const studentData = {
      name: name,
      email: email,
      course: course,
      marks: Number(marks),
    };

    try {
      await onSave(studentData);
      setName("");
      setEmail("");
      setCourse("");
      setMarks("");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}

      <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Course: </label>
        <input value={course} onChange={(e) => setCourse(e.target.value)} />
      </div>

      <div>
        <label>Marks: </label>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
      </div>

      <button type="submit">{selectedStudent ? "Update" : "Add"}</button>
      {selectedStudent && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;
