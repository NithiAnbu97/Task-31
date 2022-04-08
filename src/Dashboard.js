import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import UserContext from "./UserContext";

function Dashboard() {
  const userContext = useContext(UserContext);
  useEffect(() => {
    console.log("IN");
  }, []);

  useEffect(() => {
    return () => {
      console.log("OUT");
    };
  }, []);

  useEffect(() => {
    console.log("Value Changed");
  }, [userContext.userName]);

  const dashData = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40,000",
      styling1: true,
      stylingFont1: true,
      icon1: true,
    },
    {
      title: "EARNINGS (ANNUAL)",
      price: "$215,000",
      styling2: true,
      stylingFont2: true,
      icon2: true,
    },
    {
      title: "TASKS",
      price: "50%",
      progress: true,
      styling3: true,
      stylingFont3: true,
      icon3: true,
    },
    {
      title: "PENDING REQUESTS",
      price: "18",
      styling4: true,
      stylingFont4: true,
      icon4: true,
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

        <Link
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/create-student"}
        >
          <i className="fa-sm text-white-50"></i> Create Student
        </Link>
      </div>
      <div className="row">
        {dashData.map((dashData, id) => {
          return (
            <DashboardComponent
              dashData={dashData}
              key={id}
            ></DashboardComponent>
          );
        })}
        {userContext.userName}
        <button onClick={() => userContext.setUserName("Nivi")}>
          {" "}
          Change{" "}
        </button>
      </div>
    </>
  );
}

export default Dashboard;
