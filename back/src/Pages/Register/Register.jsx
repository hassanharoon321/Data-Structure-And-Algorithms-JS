import React, { useEffect, useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/Footer/Footer";
import { createRegister } from "../../actions/registerAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";

function RegisterUser(props) {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [termsCheck, settermsCheck] = useState(false);

  const AddRegister = async () => {
    const reg = /^([a-zA-Z0-9~`!@#\$%\^&\*\(\)_\-\+={\[\}\]\|\\:;"'<,>\.\?\/  ]*)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    if (first_name == "") {
      alert("Enter first name");
    } else if (last_name == "") {
      alert("Enter last name");
    } else if (email == "") {
      alert("Email required");
    } else if (reg.test(email) === false) {
      alert("Email is invalid");
    } else if (company_name == "") {
      alert("Company name is required");
    } else if (password == "") {
      alert("Password required");
    } else if (password.length < 6) {
      alert("Password should be at least 6 characters");
    } else if (confirmPassword == "") {
      alert("Confirm password is required");
    } else if (confirmPassword !== password) {
      alert("Passwords didn't match");
    } else if (number == "") {
      alert("Cellphone number is required");
    } else if (number.length < 10) {
      alert("Invalid number");
    } else if (!termsCheck) {
      alert("Kindly agree to terms and conditions");
    } else {
      await props.createRegister(
        first_name,
        last_name,
        company_name,
        email,
        number,
        password
      );
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid back-img-reg d-lg-block d-md-block d-none">
        <div className="container">
          {/* Register Main div Starts */}
          <div className="row">
            <div className="col-lg-8 col-md-12 main-reg p-5 shadow mb-5">
              {/* Heading Starts */}
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h1 className="reg-head">Register</h1>
                </div>
                <div className="col-md-4"></div>
              </div>
              {/* Heading Ends */}
              {/* Reg form 01 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">First name</label>
                  <input
                    onChange={(e) => setfirst_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your name here"
                    style={{ color: "#000" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="label-reg mt-2">Last name</label>
                  <input
                    onChange={(e) => setlast_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your name here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 01 Ends */}
              {/* Reg form 02 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">Email</label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your email here"
                    style={{ color: "#000" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="label-reg mt-2">Company name</label>
                  <input
                    onChange={(e) => setcompany_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your company name here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 02 Ends */}
              {/* Reg form 03 Starts */}
              <div className="row">
                {/* Password Starts */}
                <div className="col-md-6">
                  <label className="label-reg mt-2">Password</label>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your password here"
                    style={{ color: "#000" }}
                  />
                </div>
                {/* Password ends */}
                <div className="col-md-6">
                  <label className="label-reg mt-2">Confirm Password</label>
                  <input
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your password again here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 03 Ends */}
              {/* Reg form 04 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">Phone Number</label>
                  <div className="d-flex">
                    <p className="pt-2">+1</p>
                    <input
                      onChange={(e) => setnumber(e.target.value)}
                      type="text"
                      maxLength="10"
                      className="form-control pl-2"
                      id="input-reg"
                      placeholder="Type your Phone Number here"
                      style={{ color: "#000" }}
                    />
                  </div>
                </div>
              </div>
              {/* Reg form 04 Ends */}
              {/* Terms and cond text Starts */}
              <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 p-0 m-0 d-flex justify-content-center align-items-start">
                  <div>
                    <input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          console.log("enterrrr");
                          AddRegister();
                        }
                      }}
                      onChange={() => settermsCheck(true)}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <p className="recr-text-reg">
                      By clicking "Register" you agree to our{" "}
                      <Link to="/terms-cond">
                        <span className="term-priv-reg">
                          Terms {`&`} Conditions
                        </span>
                      </Link>{" "}
                      as well as our{" "}
                      <Link to="/priv-pol">
                        <span className="term-priv-reg">Privacy Policy</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
              {/* Terms and cond text Ends */}

              {/* Register Button Starts */}
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <button
                    className="btn btn-primary w-100 reg-btn-main"
                    onClick={() => AddRegister()}
                    // disabled={
                    //   !first_name === false &&
                    //   !last_name === false &&
                    //   !company_name === false &&
                    //   !email === false &&
                    //   !number === false &&
                    //   !password === false &&
                    //   !confirmPassword === false &&
                    //   !termsCheck === false
                    //     ? false
                    //     : true
                    // }
                  >
                    Register
                  </button>
                </div>
                <div className="col-md-4"></div>
              </div>
              {/* Register Button Ends */}

              {/* Already Apply Starts */}
              <div className="row mt-2">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <p className="recr-text-reg">
                    Already have an account?{" "}
                    <Link to="/">
                      <span className="term-priv-reg">Login here</span>
                    </Link>
                  </p>
                </div>
                <div className="col-md-3"></div>
              </div>
              {/* Already Apply Ends */}
            </div>
            <div className="col-lg-4"></div>
          </div>
          {/* Register Main div Ends */}
        </div>
        {props.auth.loading == false ? <FullPageLoader /> : null}
      </div>

      <div className="container-fluid back-img-regs d-lg-none d-md-none d-block">
        <div className="container">
          {/* Register Main div Starts */}
          <div className="row">
            <div className="col-lg-8 col-md-12 main-reg p-5 shadow mb-5">
              {/* Heading Starts */}
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h1 className="reg-head">Register</h1>
                </div>
                <div className="col-md-4"></div>
              </div>
              {/* Heading Ends */}
              {/* Reg form 01 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">First name</label>
                  <input
                    onChange={(e) => setfirst_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your name here"
                    style={{ color: "#000" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="label-reg mt-2">Last name</label>
                  <input
                    onChange={(e) => setlast_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your name here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 01 Ends */}
              {/* Reg form 02 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">Email</label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your email here"
                    style={{ color: "#000" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="label-reg mt-2">Company name</label>
                  <input
                    onChange={(e) => setcompany_name(e.target.value)}
                    type="text"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your company name here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 02 Ends */}
              {/* Reg form 03 Starts */}
              <div className="row">
                {/* Password Starts */}
                <div className="col-md-6">
                  <label className="label-reg mt-2">Password</label>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your password here"
                    style={{ color: "#000" }}
                  />
                </div>
                {/* Password ends */}
                <div className="col-md-6">
                  <label className="label-reg mt-2">Confirm Password</label>
                  <input
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="input-reg"
                    placeholder="Type your password again here"
                    style={{ color: "#000" }}
                  />
                </div>
              </div>
              {/* Reg form 03 Ends */}
              {/* Reg form 04 Starts */}
              <div className="row">
                <div className="col-md-6">
                  <label className="label-reg mt-2">Phone Number</label>
                  <div className="d-flex">
                    <p className="pt-2">+1</p>
                    <input
                      onChange={(e) => setnumber(e.target.value)}
                      type="text"
                      maxLength="10"
                      className="form-control pl-2"
                      id="input-reg"
                      placeholder="Type your Phone Number here"
                      style={{ color: "#000" }}
                    />
                  </div>
                </div>
              </div>
              {/* Reg form 04 Ends */}
              {/* Terms and cond text Starts */}
              <div className="row mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 p-0 m-0 d-flex justify-content-center align-items-start">
                  <div>
                    <input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          console.log("enterrrr");
                          AddRegister();
                        }
                      }}
                      onChange={() => settermsCheck(true)}
                      type="checkbox"
                    />
                  </div>
                  <div>
                    <p className="recr-text-reg">
                      By clicking "Register" you agree to our{" "}
                      <Link to="/terms-cond">
                        <span className="term-priv-reg">
                          Terms {`&`} Conditions
                        </span>
                      </Link>{" "}
                      as well as our{" "}
                      <Link to="/priv-pol">
                        <span className="term-priv-reg">Privacy Policy</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
              {/* Terms and cond text Ends */}

              {/* Register Button Starts */}
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <button
                    className="btn btn-primary w-100 reg-btn-main"
                    onClick={() => AddRegister()}
                    disabled={
                      !first_name === false &&
                      !last_name === false &&
                      !company_name === false &&
                      !email === false &&
                      !number === false &&
                      !password === false &&
                      !confirmPassword === false &&
                      !termsCheck === false
                        ? false
                        : true
                    }
                  >
                    Register
                  </button>
                </div>
                <div className="col-md-4"></div>
              </div>
              {/* Register Button Ends */}

              {/* Already Apply Starts */}
              <div className="row mt-2">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <p className="recr-text-reg">
                    Already have an account?{" "}
                    <Link to="/">
                      <span className="term-priv-reg">Login here</span>
                    </Link>
                  </p>
                </div>
                <div className="col-md-3"></div>
              </div>
              {/* Already Apply Ends */}
            </div>
            <div className="col-lg-4"></div>
          </div>
          {/* Register Main div Ends */}
        </div>
        {props.auth.loading == false ? <FullPageLoader /> : null}
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createRegister: (
    first_name,
    last_name,
    company_name,
    email,
    number,
    password
  ) =>
    dispatch(
      createRegister(
        first_name,
        last_name,
        company_name,
        email,
        number,
        password
      )
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);

{
  /* reg Heading Startss */
}

{
  /* reg Heading Ends */
}
