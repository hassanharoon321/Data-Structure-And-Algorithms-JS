import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import "./Nav2.css";
import Logo from "../../Assests/sjdhfsdjkfhsdjkf.svg";
import facebook from "../../Assests/navbar/facebook.svg";
import linkedin from "../../Assests/navbar/linkedin.svg";
import { signOut } from "../../actions/authAction";
import { connect } from "react-redux";

function Nav2(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container">
        <Link to="/dashboard">
          <img src={Logo} height="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item mr-2 main-li-of-nav">
              <NavLink
                activeClassName="linkhighlight"
                exact
                className="nav-link"
                aria-current="page"
                to="/dashboard"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item mr-2 main-li-of-nav">
              <NavLink
                activeClassName="linkhighlight"
                exact
                className="nav-link "
                aria-current="page"
                to="/messages"
              >
                MESSAGES
              </NavLink>
            </li>
            <li className="nav-item mr-2 main-li-of-nav">
              <NavLink
                activeClassName="linkhighlight"
                exact
                className="nav-link"
                aria-current="page"
                to="/whatwedo"
                exact
              >
                HOW IT WORKS
              </NavLink>
            </li>
            <li className="nav-item mr-2 main-li-of-nav">
              <NavLink
                activeClassName="linkhighlight"
                exact
                className="nav-link"
                aria-current="page"
                to="/about-us"
              >
                ABOUT US
              </NavLink>
            </li>
            {/* <li className="nav-item mr-2 main-li-of-nav">
            <NavLink
              activeClassName="linkhighlight"
              exact
                className="nav-link"
                aria-current="page"
                to="/contact-us"
              >
                CONTACT US
              </NavLink>
            </li> */}
            <li className="nav-item mr-2 main-li-of-nav">
              <NavLink
                activeClassName="linkhighlight"
                exact
                className="nav-link"
                aria-current="page"
                to="/Addtofav"
              >
                FAVORITES
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0 py-1 px-2 mt-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="btn-nav-user"
                  style={{ fontSize: "10px", borderRadius: "7px" }}
                >
                  <i className="far fa-user pr-1"></i>
                  {localStorage.getItem("name")}
                </button>
                <ul className="dropdown-menu">
                  <li
                    style={{
                      fontSize: "12px",
                      color: "#707070",
                      cursor: "pointer",
                    }}
                  >
                    <Link className="dropdown-item" to="/CompanyProfile">
                      View{` & `}Edit Profile
                    </Link>
                  </li>
                  {/* <li
                    style={{
                      fontSize: "12px",
                      color: "#707070",
                      cursor: "pointer",
                    }}
                  >
                    <a className="dropdown-item">
                      Settings
                    </a>
                  </li> */}
                  <li
                    style={{
                      fontSize: "12px",
                      color: "#707070",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      className="dropdown-item"
                      onClick={() => props.signOut()}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="nav-item mr-3">
              <Link
                className="nav-link active p-0 px-2 py-1 mt-1"
                aria-current="page"
                to="/PremiumPackage"
                style={{background:"#FCA120",color:"#fff",fontSize:"12px",borderRadius:"6px"}}
              >
                <i className="far fa-gem pr-1"></i>PACKAGES
              </Link>
            </li> */}
            <li className="nav-item mr-2">
              <a
                className="nav-link active main-li-of-nav"
                aria-current="page"
                href="https://www.facebook.com/CV-Flicks-100191795580154/?ti=as"
                target="_blank"
              >
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active main-li-of-nav"
                aria-current="page"
                href="https://www.linkedin.com/company/cvflicks"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Nav2);
