import React from "react";

function DashboardComponent(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div
        className={
          props.dashData.styling1
            ? "card border-left-primary shadow h-100 py-2"
            : props.dashData.styling2
            ? "card border-left-success shadow h-100 py-2"
            : props.dashData.styling3
            ? "card border-left-info shadow h-100 py-2"
            : props.dashData.styling4
            ? "card border-left-warning shadow h-100 py-2"
            : ""
        }
      >
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={
                  props.dashData.stylingFont1
                    ? "text-xs font-weight-bold text-primary text-uppercase mb-1"
                    : props.dashData.stylingFont2
                    ? "text-xs font-weight-bold text-success text-uppercase mb-1"
                    : props.dashData.stylingFont3
                    ? "text-xs font-weight-bold text-info text-uppercase mb-1"
                    : props.dashData.stylingFont4
                    ? "text-xs font-weight-bold text-warning text-uppercase mb-1"
                    : ""
                }
              >
                {props.dashData.title}
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {props.dashData.price}
                  </div>
                </div>
                {props.dashData.progress ? (
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-auto">
              <i
                className={
                  props.dashData.icon1
                    ? "fas fa-calendar fa-2x text-gray-300"
                    : props.dashData.icon2
                    ? "fas fa-dollar-sign fa-2x text-gray-300"
                    : props.dashData.icon3
                    ? "fas fa-clipboard-list fa-2x text-gray-300"
                    : props.dashData.icon4
                    ? "fas fa-comments fa-2x text-gray-300"
                    : ""
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
