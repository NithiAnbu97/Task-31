import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student'
import CreateStudent from "./CreateStudent";
import StudentEdit from "./StudentEdit";
import StudentView from "./StudentView";
import Teacher from "./Teacher";
import CreateTeacher from "./CreateTeacher";
import TeacherView from "./TeacherView";
import TeacherEdit from "./TeacherEdit";
import { UserProvider } from "./UserContext";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("NithiAnbu97");
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ userName, setUserName, users, setUsers }}>
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/student" element={<Student />} />
                  <Route path="/teacher" element={<Teacher />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/student-view/:id" element={<StudentView />} />
                  <Route path="/student-edit/:id" element={<StudentEdit />} />
                  <Route path="/create-teacher" element={<CreateTeacher />} />
                  <Route path="/teacher-view/:id" element={<TeacherView />} />
                  <Route path="/teacher-edit/:id" element={<TeacherEdit />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
