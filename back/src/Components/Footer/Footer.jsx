import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GooglePlay from "../../Assests/footer/google-play.svg";
import AppStore from "../../Assests/footer/app-store.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      class="container-fluid p-5"
      style={{ backgroundColor: "#362658", color: "#fff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <h6>Company</h6>
            <Link to="/dashboard" className="link-tag-home">
              <p className="table-text0-small text-white">Home</p>
            </Link>
            <Link to="/CompanyProfile" className="link-tag-home">
              <p className="table-text0-small text-white">My Profile</p>
            </Link>
            <Link to="/terms-login" className="link-tag-home">
              <p className="table-text0-small text-white">Terms {`&`} Conditions</p>
            </Link>
            <Link to="/privacy" className="link-tag-home">
              <p className="table-text0-small text-white">Privacy Policy</p>
            </Link>
          </div>
          <div className="col-md-3">
            <h6>Candidate Seekers</h6>
            <Link to="/SearchJobs" className="link-tag-home">
              <p className="table-text0-small text-white">Search</p>
            </Link>
            <Link to="/CreateAJob"  className="link-tag-home">
              <p className="table-text0-small text-white">Create a job</p>
            </Link>
            {/* <p className="table-text0-small">Create a Job Alert</p> */}
          </div>

          <div className="col-md-2">
            <h6>Contact Us</h6>
            <p className="table-text0-small">info@cvvlogs.com</p>
          </div>
          <div className="col-md-3">
            <h6>Download our app</h6>
            <img src={GooglePlay} alt="" width="50%" />
            <img src={AppStore} alt="" width="45%" className="ml-2" />
            <h6 className="mt-3">Follow Us On</h6>
            <div>
              <a
                href="https://www.facebook.com/CV-Flicks-100191795580154/?ti=as"
                target="_blank"
                class="text-white s4dFontSize15 s4dFontWeightLight"
              >
                <i class="fab fa-facebook-square fa-2x pr-2 pl-1"></i>
              </a>
              <a
                href="https://www.instagram.com/__CVVlogs/"
                target="_blank"
                class="text-white s4dFontSize15 s4dFontWeightLight"
              >
                <i class="fab fa-instagram fa-2x px-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/cvflicks"
                target="_blank"
                class="text-white s4dFontSize15 s4dFontWeightLight"
              >
                <i class="fab fa-linkedin fa-2x px-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <hr style={{ backgroundColor: "#fff" }} />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <p className="table-text0-small">
              ©2020-2021 cvvlogs.com. All Right Reserved. Terms & Condition.
              Privacy Policy{" "}
            </p>
          </div>
          <div className="col-md-4">
            <div className="row">
              <ul
                className="d-flex p-0 m-0"
                style={{ textDecoration: "none", listStyle: "none" }}
              >
                <Link to="/dashboard" className="link-tag-home">
                  <li className="table-text0-small mr-3 ml-3 text-white">
                    Home
                  </li>
                </Link>
                <Link to="/about-us" className="link-tag-home">
                  <li className="table-text0-small mr-3 text-white">
                    About Us
                  </li>
                </Link>
                <Link to="/contact-us" className="link-tag-home">
                  <li className="table-text0-small text-white">Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
