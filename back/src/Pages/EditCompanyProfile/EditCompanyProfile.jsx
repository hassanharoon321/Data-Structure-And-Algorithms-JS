import React, { useEffect, useState } from "react";
import "./EditCompanyProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav2 from "../../Components/Nav2/Nav2";
import ComapanyProfile from "../../Assests/company-profile/company-profile.png";
import place from "../../Assests/placeholderbuilding.svg";
import Footer from "../../Components/Footer/Footer";
import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom";
import { getEditCompany } from "../../actions/editcompanygetAction";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader";
import "../CreateAJob/CreateAJob.css";

function EditCompanyProfile(props) {
  const [loader, setLoader] = useState(true);
  const [file, setfile] = useState(null);
  const [fileCounter, setFileCounter] = useState(0);
  const [host_name, sethost_name] = useState("");
  const [hostNameCounter, setHostNameCounter] = useState(0);
  const [host_email, sethost_email] = useState("");
  const [hostEmailCounter, setHostEmailCounter] = useState(0);
  const [name, setname] = useState("");
  const [nameCounter, setNameCounter] = useState(0);
  const [tag_line, settag_line] = useState("");
  const [taglineCounter, setTaglineCounter] = useState(0);
  const [website, setwebsite] = useState("");
  const [websiteCounter, setWebsiteCounter] = useState(0);
  const [description, setdescription] = useState("");
  const [descCounter, setDescCounter] = useState(0);
  const [category, setcategory] = useState(null);
  const [catCounter, setCatCounter] = useState(0);
  const [city_id, setcity_id] = useState(1);
  const [country_id, setcountry_id] = useState(null);
  const [countryIdCounter, setCountryIdCounter] = useState(0);
  const [size, setsize] = useState("");
  const [sizeCounter, setSizeCounter] = useState(0);
  const [type, settype] = useState(null);
  const [typeCounter, setTypeCounter] = useState(0);
  const [founded, setfounded] = useState("");
  const [foundedCounter, setFoundedCounter] = useState(0);
  const [imgData, setImgData] = useState(
    props.editcompanyReducer.editcompany.stored_values &&
      props.editcompanyReducer.editcompany.stored_values.dp !== null &&
      props.editcompanyReducer.editcompany.stored_values.dp !== undefined
      ? props.editcompanyReducer.editcompany.stored_values.dp
      : null
  );

  useEffect(() => {
    jobData(localStorage.getItem("auth_id1"));
  }, []);

  const jobData = async (userId) => {
    await props.getEditCompany(userId);
    return null;
  };
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("file: ", e.target.files);
      setfile(e.target.files[0]);
      setFileCounter(1);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFile = async (e) => {
    const reg = /^([a-zA-Z0-9~`!@#\$%\^&\*\(\)_\-\+={\[\}\]\|\\:;"'<,>\.\?\/  ]*)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    if (reg.test(host_email) === false) {
      alert("Email is invalid");
    } else {
      setLoader(false);
      var descriptionApi;
      var hostNameApi;
      var companyNameApi;
      var hostEmailApi;
      var taglineApi;
      var websiteApi, sizeApi, foundedApi, catId, countryIdApi, typeApi;
      if (description == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.desc == "" &&
          descCounter == 0
        ) {
          alert("Enter description please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.desc !== "" &&
          descCounter == 0
        ) {
          descriptionApi =
            props.editcompanyReducer.editcompany.stored_values.desc;
        } else if (descCounter == 1) {
          alert("Enter description please");
          setLoader(true);
          return;
        }
      } else if (description !== "") {
        descriptionApi = description;
      }
      ///host name
      if (host_name == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.host_name == "" &&
          hostNameCounter == 0
        ) {
          alert("Enter Name please");
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.host_name !== "" &&
          hostNameCounter == 0
        ) {
          hostNameApi =
            props.editcompanyReducer.editcompany.stored_values.host_name;
        } else if (hostNameCounter == 1) {
          alert("Enter Name please");
          setLoader(true);
          return;
        }
      } else if (host_name !== "") {
        hostNameApi = host_name;
      }
      ///company name
      if (name == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.name == "" &&
          nameCounter == 0
        ) {
          alert("Enter Company Name please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.name !== "" &&
          nameCounter == 0
        ) {
          companyNameApi =
            props.editcompanyReducer.editcompany.stored_values.name;
        } else if (nameCounter == 1) {
          alert("Enter Company Name please");
          setLoader(true);
          return;
        }
      } else if (name !== "") {
        companyNameApi = name;
      }
      // email
      if (host_email == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.host_email == "" &&
          hostEmailCounter == 0
        ) {
          alert("Enter Email please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.host_email !==
            "" &&
          hostEmailCounter == 0
        ) {
          hostEmailApi =
            props.editcompanyReducer.editcompany.stored_values.host_email;
        } else if (hostEmailCounter == 1) {
          alert("Enter Email please");
          setLoader(true);
          return;
        }
      } else if (host_email !== "") {
        hostEmailApi = host_email;
      }
      //tagline
      if (tag_line == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.tagline == "" &&
          taglineCounter == 0
        ) {
          alert("Enter Tagline please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.tagline !== "" &&
          taglineCounter == 0
        ) {
          taglineApi =
            props.editcompanyReducer.editcompany.stored_values.tagline;
        } else if (taglineCounter == 1) {
          alert("Enter Tagline please");
          setLoader(true);
          return;
        }
      } else if (tag_line !== "") {
        taglineApi = tag_line;
      }
      //website
      if (website == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.website == "" &&
          websiteCounter == 0
        ) {
          alert("Enter Website please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.website !== "" &&
          websiteCounter == 0
        ) {
          websiteApi =
            props.editcompanyReducer.editcompany.stored_values.website;
        } else if (websiteCounter == 1) {
          alert("Enter Website please");
          setLoader(true);
          return;
        }
      } else if (website !== "") {
        websiteApi = website;
      }
      //sizeee
      if (size == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.size == "" &&
          sizeCounter == 0
        ) {
          alert("Enter Company Size please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.size !== "" &&
          sizeCounter == 0
        ) {
          sizeApi = props.editcompanyReducer.editcompany.stored_values.size;
        } else if (sizeCounter == 1) {
          alert("Enter Company Size please");
          setLoader(true);
          return;
        }
      } else if (size !== "") {
        sizeApi = size;
      }
      //founded
      if (founded == "") {
        if (
          props.editcompanyReducer.editcompany.stored_values.founded == "" &&
          foundedCounter == 0
        ) {
          alert("Enter Founded please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.founded !== "" &&
          foundedCounter == 0
        ) {
          foundedApi =
            props.editcompanyReducer.editcompany.stored_values.founded;
        } else if (foundedCounter == 1) {
          alert("Enter Founded please");
          setLoader(true);
          return;
        }
      } else if (founded !== "") {
        foundedApi = founded;
      }
      //industry id props.editcompanyReducer.editcompany.stored_values.industry.cat_id
      if (category == null) {
        if (
          props.editcompanyReducer.editcompany.stored_values.industry.cat_id ==
            null &&
          catCounter == 0
        ) {
          alert("Enter Category please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.industry.cat_id !==
            "" &&
          catCounter == 0
        ) {
          catId =
            props.editcompanyReducer.editcompany.stored_values.industry.cat_id;
        } else if (catCounter == 1) {
          alert("Enter Category please");
          setLoader(true);
          return;
        }
      } else if (category !== null) {
        catId = category;
      }
      // country id props.editcompanyReducer.editcompany.stored_values.location.country_id
      if (country_id == null) {
        if (
          props.editcompanyReducer.editcompany.stored_values.location
            .country_id == null &&
          countryIdCounter == 0
        ) {
          alert("Enter Location please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.location
            .country_id !== "" &&
          countryIdCounter == 0
        ) {
          countryIdApi =
            props.editcompanyReducer.editcompany.stored_values.location
              .country_id;
        } else if (countryIdCounter == 1) {
          alert("Enter Location please");
          setLoader(true);
          return;
        }
      } else if (country_id !== null) {
        countryIdApi = country_id;
      }
      // type props.editcompanyReducer.editcompany.stored_values.company_type.id
      if (type == null) {
        if (
          props.editcompanyReducer.editcompany.stored_values.company_type.id ==
            null &&
          typeCounter == 0
        ) {
          alert("Enter Type please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.company_type.id !==
            "" &&
          typeCounter == 0
        ) {
          typeApi =
            props.editcompanyReducer.editcompany.stored_values.company_type.id;
        } else if (typeCounter == 1) {
          alert("Enter Type please");
          setLoader(true);
          return;
        }
      } else if (type !== null) {
        typeApi = type;
      }
      // fileeee
      var fileApi;
      if (file == null) {
        if (
          (props.editcompanyReducer.editcompany.stored_values.dp == null ||
            props.editcompanyReducer.editcompany.stored_values.dp ==
              undefined ||
            props.editcompanyReducer.editcompany.stored_values.dp == "") &&
          fileCounter == 0
        ) {
          alert("Insert image please");
          setLoader(true);
          return;
        } else if (
          props.editcompanyReducer.editcompany.stored_values.dp == null &&
          props.editcompanyReducer.editcompany.stored_values.dp == undefined &&
          props.editcompanyReducer.editcompany.stored_values.dp == "" &&
          fileCounter == 0
        ) {
          fileApi = props.editcompanyReducer.editcompany.stored_values.dp;
        } else if (fileCounter == 1) {
          alert("Insert image please1");
          setLoader(true);
          return;
        }
      } else if (file !== null) {
        fileApi = file;
      }
      console.log(
        descriptionApi,
        hostNameApi,
        companyNameApi,
        hostEmailApi,
        taglineApi,
        websiteApi,
        sizeApi,
        foundedApi,
        catId,
        countryIdApi,
        typeApi
      );
      //props.editcompanyReducer.editcompany.stored_values.size
      //setLoader(false);
      let formData = new FormData(); //formdata object
      formData.append("file", fileApi);
      formData.append("host_name", hostNameApi);
      formData.append("host_email", hostEmailApi);
      formData.append("name", companyNameApi);
      formData.append("tag_line", taglineApi);
      formData.append("website", websiteApi);
      formData.append("description", descriptionApi);
      formData.append("category", catId);
      formData.append(
        "city_id",
        city_id !== null && city_id !== undefined && city_id !== ""
          ? city_id
          : 1
      );
      formData.append("country_id", countryIdApi);
      formData.append("size", sizeApi);
      formData.append("type", typeApi);
      formData.append("founded", foundedApi);

      console.log("fileeee", formData.get("file"));
      console.log("data", formData.get("host_name"));
      console.log("data", formData.get("host_email"));
      console.log("data", formData.get("name"));
      console.log("data", formData.get("tag_line"));
      console.log("data", formData.get("website"));
      console.log("data", formData.get("description"));
      console.log("data", formData.get("category"));
      console.log("data", formData.get("city_id"));
      console.log("data", formData.get("country_id"));
      console.log("data", formData.get("size"));
      console.log("data", formData.get("type"));
      console.log("data", formData.get("founded"));

      fetch(
        `https://api.cvvlogs.com/cv-tube/api.v.2/recruiter/web/edit_company.php`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            auth_id: localStorage.getItem("auth_id1"),
          },
        }
      )
        .then((response) => {
          console.log("res", response.json());
          // if (response.status == 500) {
          //   alert("EMAIL OR NUMBER ALREADY REGISTERED")
          // }
          window.location = "/CompanyProfile";
          setLoader(true);
        })
        .catch((error) => {
          console.log(error);
          setLoader(true);
        });
    }
  };
  return (
    <>
      <Nav2 />
      <div className="container mt-5">
        <h1 className="edit-prof-head-main">Edit Profile</h1>
        {/* <button onClick={()=>console.log("dddddd",props.editcompanyReducer.editcompany.stored_values)}>dfffffff</button> */}
        <div
          className="row shadow p-5 mt-3 mb-5"
          style={{ borderRadius: "15px" }}
        >
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <input
              type="file"
              className="form-control inputs"
              onChange={(e) => onChangePicture(e)}
              accept="image/png, image/gif, image/jpeg"
            />
            {imgData === null ? (
              props.editcompanyReducer.editcompany.stored_values &&
              props.editcompanyReducer.editcompany.stored_values.dp !== null &&
              props.editcompanyReducer.editcompany.stored_values.dp !==
                undefined &&
              props.editcompanyReducer.editcompany.stored_values.dp !== "" ? (
                <img
                  style={{ objectFit: "cover" }}
                  className="border p-3 rounded "
                  width="100%"
                  height="100%"
                  src={props.editcompanyReducer.editcompany.stored_values.dp}
                />
              ) : (
                <img
                  style={{ objectFit: "cover" }}
                  className="border p-3 rounded "
                  width="100%"
                  height="100%"
                  src={place}
                />
              )
            ) : (
              <img
                className="border p-3 rounded "
                src={imgData}
                style={{ objectFit: "cover" }}
                width="100%"
                height="100%"
              />
            )}
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-12 mt-4">
            <div className="row">
              <div className="col-md-6">
                {/* Row 1 Starts here */}
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="salary-range-recr">Name</label>
                    <input
                      onChange={(e) => {
                        sethost_name(e.target.value);
                        setHostNameCounter(1);
                      }}
                      defaultValue={
                        props.editcompanyReducer.editcompany.stored_values &&
                        props.editcompanyReducer.editcompany.stored_values
                          .host_name !== null &&
                        props.editcompanyReducer.editcompany.stored_values
                          .host_name !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .host_name
                          : ""
                      }
                      type="text"
                      className="form-control"
                      placeholder="Type your name"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="salary-range-recr">Company Name</label>
                    <input
                      defaultValue={
                        name !== ""
                          ? name
                          : props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .name !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .name !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .name
                          : ""
                      }
                      onChange={(e) => {
                        setname(e.target.value);
                        setNameCounter(1);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Type your company name"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12">
                    <label className="salary-range-recr">Email</label>
                    <input
                      defaultValue={
                        host_email !== ""
                          ? host_email
                          : props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .host_email !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .host_email !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .host_email
                          : ""
                      }
                      onChange={(e) => {
                        sethost_email(e.target.value);
                        setHostEmailCounter(1);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Type your company name"
                    />
                  </div>
                </div>
                {/* Row 1 Ends here */}
                {/* Row 2 Starts here */}
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="salary-range-recr">
                      Short Description
                    </label>
                    <input
                      onChange={(e) => {
                        settag_line(e.target.value);
                        setTaglineCounter(1);
                      }}
                      defaultValue={
                        tag_line !== ""
                          ? tag_line
                          : props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .tagline !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .tagline !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .tagline
                          : ""
                      }
                      type="text"
                      className="form-control"
                      placeholder="Type your tagline name"
                      maxLength="100"
                    />
                  </div>
                </div>
                {/* Row 2 Ends here */}
                {/* Row 3 Starts here */}
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="salary-range-recr">Website</label>
                    <input
                      onChange={(e) => {
                        setwebsite(e.target.value);
                        setWebsiteCounter(1);
                      }}
                      defaultValue={
                        website !== ""
                          ? website
                          : props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .website !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .website !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .website
                          : ""
                      }
                      type="text"
                      className="form-control"
                      placeholder="Type your website here"
                    />
                  </div>
                </div>
                {/* Row 3 Ends here */}
                {/* Row 4 Starts here */}
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="salary-range-recr">Industry</label>
                    {/* {props.editcompanyReducer.editcompany.stored_values&&props.editcompanyReducer.editcompany.stored_values.industry&&props.editcompanyReducer.editcompany.stored_values.industry.cat_id!==null&&props.editcompanyReducer.editcompany.stored_values.industry.cat_id!==undefined?props.editcompanyReducer.editcompany.stored_values.industry.cat_id:'omama'}
                    {category null check} */}

                    <select
                      onChange={(e) => {
                        setcategory(e.target.value);
                        setCatCounter(1);
                      }}
                      className="form-control"
                    >
                      <option
                        value={
                          props.editcompanyReducer.editcompany.stored_values &&
                          props.editcompanyReducer.editcompany.stored_values
                            .industry &&
                          props.editcompanyReducer.editcompany.stored_values
                            .industry.cat_id !== null &&
                          props.editcompanyReducer.editcompany.stored_values
                            .industry.cat_id !== undefined
                            ? props.editcompanyReducer.editcompany.stored_values
                                .industry.cat_id
                            : null
                        }
                        selected
                      >
                        {props.editcompanyReducer.editcompany.stored_values &&
                        props.editcompanyReducer.editcompany.stored_values
                          .industry &&
                        props.editcompanyReducer.editcompany.stored_values
                          .industry.cat_name !== null &&
                        props.editcompanyReducer.editcompany.stored_values
                          .industry.cat_name !== undefined
                          ? props.editcompanyReducer.editcompany.stored_values
                              .industry.cat_name
                          : "select"}
                      </option>
                      {props.editcompanyReducer.editcompany.industries &&
                      props.editcompanyReducer.editcompany.industries.length > 0
                        ? props.editcompanyReducer.editcompany.industries.map(
                            (ind) => (
                              <option value={ind.id}>
                                {ind.ind_name !== null &&
                                ind.ind_name !== undefined
                                  ? ind.ind_name
                                  : ""}
                              </option>
                            )
                          )
                        : ""}
                    </select>
                  </div>
                </div>
                {/* Row 4 Ends here */}
                {/* Row 5 Starts here */}

                {/* Row 5 Ends here */}
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    {/* Row 1 Starts here */}
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <label className="salary-range-recr">Location</label>
                        {/* {null check} */}
                        <select
                          onChange={(e) => {
                            setcountry_id(e.target.value);
                            setCountryIdCounter(1);
                          }}
                          className="form-control"
                        >
                          <option
                            value={
                              props.editcompanyReducer.editcompany
                                .stored_values &&
                              props.editcompanyReducer.editcompany.stored_values
                                .location &&
                              props.editcompanyReducer.editcompany.stored_values
                                .location.country_id !== null &&
                              props.editcompanyReducer.editcompany.stored_values
                                .location.country_id !== undefined
                                ? props.editcompanyReducer.editcompany
                                    .stored_values.location.country_id
                                : null
                            }
                            selected
                          >
                            {props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .location &&
                            props.editcompanyReducer.editcompany.stored_values
                              .location.co_name !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .location.co_name !== undefined
                              ? props.editcompanyReducer.editcompany
                                  .stored_values.location.co_name
                              : "select"}
                          </option>
                          {props.editcompanyReducer.editcompany.locations &&
                          props.editcompanyReducer.editcompany.locations
                            .length > 0
                            ? props.editcompanyReducer.editcompany.locations.map(
                                (loc) => (
                                  <option value={loc.country_id}>
                                    {loc.co_name !== null &&
                                    loc.co_name !== undefined
                                      ? loc.co_name
                                      : ""}
                                  </option>
                                )
                              )
                            : ""}
                        </select>
                      </div>
                    </div>
                    {/* Row 1 Ends here */}
                    {/* Row 2 Starts here */}

                    {/* Row 2 Ends here */}
                    {/* Row 3 Starts here */}
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="salary-range-recr">
                          Company Size
                        </label>
                        <input
                          onChange={(e) => {
                            setsize(e.target.value);
                            setSizeCounter(1);
                          }}
                          defaultValue={
                            size !== ""
                              ? size
                              : props.editcompanyReducer.editcompany
                                  .stored_values &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.size !== null &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.size !== undefined
                              ? props.editcompanyReducer.editcompany
                                  .stored_values.size
                              : ""
                          }
                          type="text"
                          className="form-control"
                          placeholder="Type your company size here"
                        />
                      </div>
                    </div>
                    {/* Row 3 Ends here */}
                    {/* Row 4 Starts here */}
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="salary-range-recr">
                          Company Type
                        </label>
                        {/* {null check} */}
                        <select
                          onChange={(e) => {
                            settype(e.target.value);
                            setTypeCounter(1);
                          }}
                          className="form-control"
                        >
                          <option
                            value={
                              props.editcompanyReducer.editcompany
                                .stored_values &&
                              props.editcompanyReducer.editcompany.stored_values
                                .company_type &&
                              props.editcompanyReducer.editcompany.stored_values
                                .company_type.id !== null &&
                              props.editcompanyReducer.editcompany.stored_values
                                .company_type.id !== undefined
                                ? props.editcompanyReducer.editcompany
                                    .stored_values.company_type.id
                                : null
                            }
                            selected
                          >
                            {props.editcompanyReducer.editcompany
                              .stored_values &&
                            props.editcompanyReducer.editcompany.stored_values
                              .company_type &&
                            props.editcompanyReducer.editcompany.stored_values
                              .company_type.type !== null &&
                            props.editcompanyReducer.editcompany.stored_values
                              .company_type.type !== undefined
                              ? props.editcompanyReducer.editcompany
                                  .stored_values.company_type.type
                              : "select"}
                          </option>
                          {props.editcompanyReducer.editcompany.company_type &&
                          props.editcompanyReducer.editcompany.company_type
                            .length > 0
                            ? props.editcompanyReducer.editcompany.company_type.map(
                                (type) => (
                                  <option value={type.id}>
                                    {type.type !== null &&
                                    type.type !== undefined
                                      ? type.type
                                      : ""}
                                  </option>
                                )
                              )
                            : ""}
                        </select>
                      </div>
                    </div>
                    {/* Row 4 Ends here */}
                    {/* Row 5 Starts here */}
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="salary-range-recr">
                          Founding Year
                        </label>
                        <input
                          onChange={(e) => {
                            setfounded(e.target.value);
                            setFoundedCounter(1);
                          }}
                          defaultValue={
                            founded !== ""
                              ? founded
                              : props.editcompanyReducer.editcompany
                                  .stored_values &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.founded !== null &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.founded !== undefined
                              ? props.editcompanyReducer.editcompany
                                  .stored_values.founded
                              : ""
                          }
                          type="text"
                          className="form-control"
                          placeholder="Type your founding year"
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="salary-range-recr">
                          Company Description
                        </label>
                        <textarea
                          onChange={(e) => {
                            setdescription(e.target.value);
                            setDescCounter(1);
                          }}
                          defaultValue={
                            description !== ""
                              ? description
                              : props.editcompanyReducer.editcompany
                                  .stored_values &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.desc !== null &&
                                props.editcompanyReducer.editcompany
                                  .stored_values.desc !== undefined
                              ? props.editcompanyReducer.editcompany
                                  .stored_values.desc
                              : ""
                          }
                          type="text"
                          className="form-control text-area-des-edit-prof"
                          placeholder="Type your industry here"
                        />
                      </div>
                    </div>
                    {/* Row 5 Ends here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <button
                  onClick={() => handleFile()}
                  className="btn btn-primary w-100 btn-of-edit-comp-prof"
                >
                  Save Changes
                </button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        {props.editcompanyReducer.loading == false ? <FullPageLoader /> : null}
        {loader == false ? <FullPageLoader /> : null}
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  editcompanyReducer: state.editcompanyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getEditCompany: (userId) => dispatch(getEditCompany(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditCompanyProfile);
