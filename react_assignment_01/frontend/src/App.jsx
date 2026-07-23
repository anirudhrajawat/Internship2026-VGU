import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import StatsCards from "./components/StatsCards";
import {
  getAllStudents,
  searchStudents,
  addStudent,
  editStudent,
  removeStudent,
} from "./api/studentApi";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const res = await getAllStudents();
      setStudents(res.data);
    } catch (err) {
      setMessage("could not load students, is the backend running?");
    }
    setLoading(false);
  };

  const handleSave = async (data) => {
    if (selectedStudent) {
      await editStudent(selectedStudent._id, data);
      setMessage("student updated");
      setSelectedStudent(null);
    } else {
      await addStudent(data);
      setMessage("student added");
    }
    loadStudents();
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const handleCancel = () => {
    setSelectedStudent(null);
  };

  const handleDelete = async (id) => {
    try {
      await removeStudent(id);
      setMessage("student deleted");
      loadStudents();
    } catch (err) {
      setMessage("could not delete student");
    }
  };

  const handleSearch = async (name) => {
    setLoading(true);
    try {
      const res = await searchStudents(name);
      setStudents(res.data);
    } catch (err) {
      setMessage("search failed");
    }
    setLoading(false);
  };

  const handleClearSearch = () => {
    loadStudents();
  };

  return (
    <div className="container">
      <h1>Student Result Management System</h1>

      {message && <p className="message">{message}</p>}

      <StatsCards students={students} />

      <h2>Add / Edit Student</h2>
      <StudentForm
        selectedStudent={selectedStudent}
        onSave={handleSave}
        onCancel={handleCancel}
      />

      <h2>All Students</h2>
      <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
      <StudentTable
        students={students}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
