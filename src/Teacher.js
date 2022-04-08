import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Teacher() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        "https://61f0e801072f86001749eeee.mockapi.io/Teachers"
      );
      setUsers(user.data);
    }
    fetchData();
  }, []);
  const deleteUser = (id) => {
    
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios
      .delete(`https://61f0e801072f86001749eeee.mockapi.io/Teachers/${id}`)
      .then(() => {
        getData();
      });
     
            swal(" Your file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your file is safe!");
          }
        
      });
  };


  const getData = () => {
    axios
      .get(`https://61f0e801072f86001749eeee.mockapi.io/Teachers/`)
      .then((getData) => {
        setUsers(getData.data);
      });
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teacher List</h1>
        <Link
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/create-teacher"}
        >
          <i className="fa-sm text-white-50"></i> Create Teacher Details
        </Link>
      </div>
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net" rel="noreferrer">
          official DataTables documentation
        </a>
        .
      </p>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
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
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Teacher Name</th>
                  <th>Class</th>
                  <th>Age</th>
                  <th>Place</th>
                  <th>Salary</th>
                  <th>Join Date</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {user.map((e, id) => {
                  return (
                    <tr key={id}>
                      <td>{e.id}</td>
                      <td>{e.teachername}</td>
                      <td>{e.class}</td>
                      <td>{e.age}</td>
                      <td>{e.place}</td>
                      <td>{e.salary}</td>
                      <td>{e.joindate}</td>
                      <td className="text-center ">
                        <Link
                          to={`/teacher-view/${e.id}`}
                          type="button"
                          class="btn btn-primary"
                        >
                          View
                        </Link>

                        <Link
                          to={`/teacher-edit/${e.id}`}
                          className="btn btn-success m-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(e.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
