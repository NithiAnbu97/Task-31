import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentView() {
  const navigate = useNavigate();
  let params = useParams();
  const [user, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://61f0e801072f86001749eeee.mockapi.io/Students/${params.id}`
      );
      setUserData(user.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>Student View</div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing="0"
      >
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>Grade</th>
            <th>DOB</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.studentname}</td>
            <td>{user.class}</td>
            <td>{user.age}</td>
            <td>{user.grade}</td>
            <td>{user.dob}</td>
            <td>{user.place}</td>
          </tr>
        </tbody>
      </table>
      <div className="col-lg-6 mt-3">
        <input
          type={"submit"}
          value="Close"
          onClick={() => navigate("/student", { replace: true })}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default StudentView;
