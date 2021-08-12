import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostedJobsDesc.css";
import Briefcase from "../../Assests/pos-job-desc/Briefcase.svg";
import Location from "../../Assests/pos-job-desc/location.svg";
import Pen from "../../Assests/pos-job-desc/Pen.svg";
import Wallet from "../../Assests/pos-job-desc/Wallet.svg";
import AppliedCandidates from "../../Components/AppliedCandidates/AppliedCandidates";
import Nav2 from "../../Components/Nav2/Nav2";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getJobDescription } from "../../actions/jobdescriptionAction";
import { useLocation } from "react-router-dom";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";

function PostedJobsDesc(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
  useEffect(() => {
    jobData(localStorage.getItem("auth_id1"), compIds);
  }, []);

  const jobData = async (userId, id) => {
    await props.getJobDescription(userId, id);
    return null;
  };

  const text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  return (
    <>
      <Nav2 />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 shadow mt-5 mb-5 p-5">
            <div className="row">
              {props.jobdescriptionReducer.jobdescription.job &&
              props.jobdescriptionReducer.jobdescription.job
                .open_close_status !== null &&
              props.jobdescriptionReducer.jobdescription.job
                .open_close_status !== undefined &&
              props.jobdescriptionReducer.jobdescription.job
                .open_close_status !== "" ? (
                <div className="col-md-12">
                  <Link to={`/EditJob?id=${compIds}`}>
                    <h5 className="text-right text-primary">Edit Job</h5>
                  </Link>
                </div>
              ) : (
                ""
              )}

              <div className="col-md-9">
                <h2 className="app-cand-head ">
                  {props.jobdescriptionReducer.jobdescription.job
                    ? props.jobdescriptionReducer.jobdescription.job
                        .job_title !== null &&
                      props.jobdescriptionReducer.jobdescription.job
                        .job_title !== undefined
                      ? props.jobdescriptionReducer.jobdescription.job.job_title
                      : ""
                    : ""}
                </h2>
              </div>
              <div className="col-md-3 p-0 m-0">
                {/* <p className="light-color-app-cadidate pt-3">
                  Posted on {props.jobdescriptionReducer.jobdescription.job?props.jobdescriptionReducer.jobdescription.job.posted_on!==null&&props.jobdescriptionReducer.jobdescription.job.posted_on!==undefined?props.jobdescriptionReducer.jobdescription.job.posted_on:"":""}
                </p> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="light-color-app-cadidate">
                  {props.jobdescriptionReducer.jobdescription.job
                    ? props.jobdescriptionReducer.jobdescription.job
                        .company_name !== null &&
                      props.jobdescriptionReducer.jobdescription.job
                        .company_name !== undefined
                      ? props.jobdescriptionReducer.jobdescription.job
                          .company_name
                      : ""
                    : ""}
                </p>
              </div>
            </div>
            {/* 4 Icons Starts */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <img src={Briefcase} alt="" width="16px" />
                  </div>
                  <div className="col-md-10 col-10">
                    <p className="dark-color-app-cand p-0 m-0">
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job.exp !==
                            null &&
                          props.jobdescriptionReducer.jobdescription.job.exp !==
                            undefined
                          ? props.jobdescriptionReducer.jobdescription.job.exp
                          : ""
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <img src={Location} alt="" width="11px" />
                  </div>
                  <div className="col-md-10 col-10">
                    <p className="dark-color-app-cand">
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job
                            .city !== null &&
                          props.jobdescriptionReducer.jobdescription.job
                            .city !== undefined
                          ? props.jobdescriptionReducer.jobdescription.job.city
                          : ""
                        : ""}{" "}
                      ,{" "}
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job
                            .country !== null &&
                          props.jobdescriptionReducer.jobdescription.job
                            .country !== undefined
                          ? props.jobdescriptionReducer.jobdescription.job
                              .country
                          : ""
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <img src={Pen} alt="" width="16px" />
                  </div>
                  <div className="col-md-10 col-10">
                    <p className="dark-color-app-cand">
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job
                            .industry !== null &&
                          props.jobdescriptionReducer.jobdescription.job
                            .industry !== undefined
                          ? props.jobdescriptionReducer.jobdescription.job
                              .industry
                          : ""
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="row">
                  <div className="col-md-2 col-2">
                    <img src={Wallet} alt="" width="16px" />
                  </div>
                  <div className="col-md-10 col-10">
                    <p className="dark-color-app-cand">
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job
                            .salary_min !== null &&
                          props.jobdescriptionReducer.jobdescription.job
                            .salary_min !== undefined
                          ? props.jobdescriptionReducer.jobdescription.job
                              .salary_min
                          : ""
                        : ""}{" "}
                      -{" "}
                      {props.jobdescriptionReducer.jobdescription.job
                        ? props.jobdescriptionReducer.jobdescription.job
                            .salary_max !== null &&
                          props.jobdescriptionReducer.jobdescription.job
                            .salary_max !== undefined
                          ? props.jobdescriptionReducer.jobdescription.job
                              .salary_max
                          : ""
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 4 Icons Ends */}
            <div className="row">
              <div className="col-md-12">
                <h5 className="m-0 p-0 dark-color-app-cand">Job Description</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="dark-color-app-cand m-0 p-0">
                  {props.jobdescriptionReducer.jobdescription.job
                    ? props.jobdescriptionReducer.jobdescription.job
                        .job_desc !== null &&
                      props.jobdescriptionReducer.jobdescription.job
                        .job_desc !== undefined
                      ? props.jobdescriptionReducer.jobdescription.job.job_desc
                      : ""
                    : ""}
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <h5 className="m-0 p-0 dark-color-app-cand">Career Level</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="dark-color-app-cand">
                  {props.jobdescriptionReducer.jobdescription.job
                    ? props.jobdescriptionReducer.jobdescription.job
                        .functional_area !== null &&
                      props.jobdescriptionReducer.jobdescription.job
                        .functional_area !== undefined
                      ? props.jobdescriptionReducer.jobdescription.job
                          .functional_area
                      : ""
                    : ""}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <h5 className="dark-color-app-cand">Applied Candidates</h5>
              </div>
            </div>
            {/* Component add here */}
            <div className="row p-2">
              {props.jobdescriptionReducer.jobdescription.all_applicants &&
              props.jobdescriptionReducer.jobdescription.all_applicants.length >
                0
                ? props.jobdescriptionReducer.jobdescription.all_applicants.map(
                    (app) => (
                      <div
                        className="col-lg-6 mb-md-5 mb-lg-0 mb-5 col-md-12 col-md-12 shadow"
                        style={{
                          borderRadius: "15px",
                          maxWidth: "50% !important",
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-7 d-flex justify-content-center align-items-center">
                            <img
                              src={
                                app.dp !== null && app.dp !== undefined
                                  ? app.dp
                                  : ""
                              }
                              alt=""
                              className="rounded-circle z-depth-2"
                              data-holder-rendered="true"
                              height="110px"
                              width="100%"
                              style={{
                                objectFit: "cover",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                          <div className="col-lg-8 col-md-8">
                            <h5 className="can-name-app-can m-0 p-0 ml-2">
                              {app.name !== null && app.name !== undefined
                                ? app.name
                                : ""}
                            </h5>
                            <p className="can-loc-app-can ml-2">
                              {app.city !== null && app.city !== undefined
                                ? app.city
                                : ""}{" "}
                              ,{" "}
                              {app.country !== null && app.country !== undefined
                                ? app.country
                                : ""}
                            </p>
                            <h6 className="skill-app-cen m-0 p-0 ml-2">
                              Key Skills
                            </h6>
                            <p className="user-desc-prof-card ml-2">
                              {app.skills && app.skills.length > 0
                                ? app.skills.map((sk) => <>{sk},</>)
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )
                : ""}
            </div>
            {/* Component add here */}
            <div className="row mt-5">
              <div className="col-lg-4 col-md-3"></div>
              <div className="col-lg-4 col-md-6">
                <Link to={`/Applicants?id=${compIds}`}>
                  <button className="btn btn-warning w-100 button-of-app-cand">
                    View All Candidates
                  </button>
                </Link>
              </div>
              <div className="col-lg-4 col-md-3"></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        {props.jobdescriptionReducer.loading == false ? (
          <FullPageLoader />
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  jobdescriptionReducer: state.jobdescriptionReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getJobDescription: (userId, id) => dispatch(getJobDescription(userId, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostedJobsDesc);
