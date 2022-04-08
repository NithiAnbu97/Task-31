import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TeacherView() {
  const navigate = useNavigate();
  let params = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://61f0e801072f86001749eeee.mockapi.io/Teachers/${params.id}`
      );
      setUser(user.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div>User View</div>
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing="0"
      >
        <thead className="text-center">
          <tr>
            <th>ID</th>
            <th>Teacher Name</th>
            <th>Class</th>
            <th>Age</th>
            <th>Place</th>
            <th>Salary</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.teachername}</td>
            <td>{user.class}</td>
            <td>{user.age}</td>
            <td>{user.place}</td>
            <td>{user.salary}</td>
            <td>{user.joindate}</td>
          </tr>
        </tbody>
      </table>
      <input
        type={"submit"}
        value="Close"
        onClick={() => navigate("/teacher", { replace: true })}
        className="btn btn-primary"
      />
    </div>
  );
}

export default TeacherView;
