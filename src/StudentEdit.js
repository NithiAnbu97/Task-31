import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentEdit() {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let user = await axios.get(
          `https://61f0e801072f86001749eeee.mockapi.io/Students/${params.id}`
        );
        formik.setValues(user.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let formik = useFormik({
    initialValues: {
      studentname: "",
      class: 0,
      age: 0,
      grade: "",
      dob: "",
      place: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.studentname) {
        errors.studentname = "Student Name should not be blank";
      }
      if (!values.class) {
        errors.class = "Class should not be blank";
      }
      if (!values.age || values.age > 18) {
        errors.age = "Age should not be blank and should be less than 18";
      }
      if (!values.grade) {
        errors.grade = "Grade should not be blank ";
      }
      if (!values.dob) {
        errors.dob = "Date of Birth should not be blank";
      }
      if (!values.place) {
        errors.place = "Place should not be blank";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://61f0e801072f86001749eeee.mockapi.io/Students/${params.id}`,
        values
      );
      navigate("/student", { replace: true });
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Edit Student Details</h1>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={"text"}
              name="studentname"
              onChange={formik.handleChange}
              value={formik.values.studentname}
              className="form-control"
              style={{
                border: formik.errors.studentname ? "1px solid red" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.studentname}</span>
          </div>
          <div className="col-lg-6">
            <label>Class</label>
            <input
              type={"text"}
              name="class"
              onChange={formik.handleChange}
              value={formik.values.class}
              className="form-control"
              style={{ border: formik.errors.class ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.class}</span>
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type={"text"}
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
              style={{ border: formik.errors.age ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6">
            <label>Grade</label>
            <input
              type={"text"}
              name="grade"
              onChange={formik.handleChange}
              value={formik.values.grade}
              className="form-control"
              style={{ border: formik.errors.grade ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.grade}</span>
          </div>
          <div className="col-lg-6">
            <label>DOB</label>
            <input
              type={"date"}
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              className="form-control"
              style={{ border: formik.errors.dob ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.dob}</span>
          </div>
          <div className="col-lg-6">
            <label>Place</label>
            <input
              type={"text"}
              name="place"
              onChange={formik.handleChange}
              value={formik.values.place}
              className="form-control"
              style={{ border: formik.errors.place ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.place}</span>
          </div>
          <div className="col-lg-6 mt-3">
            <input
              disabled={Object.keys(formik.errors).length !== 0}
              type={"submit"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentEdit;
