import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecentSearches from "../Assests/rcentSearches.svg";
import "./searchPage.css";
import SearchIcon from "../Assests/Search.svg";
import LocationIcon from "../Assests/Location.svg";
import Briefcase from "../Assests/briefcase.svg";
import { Link } from "react-router-dom";
import Nav2 from "../Components/Nav2/Nav2";
import Footer from "../Components/Footer/Footer";
import { getSearch ,createSearch} from "../actions/getsearchAction";
import { connect } from "react-redux";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";

function SearchJobs(props) {
  const [keyword, setJobTitle] = useState("");
  const [state, setLocation] = useState("");
  const [ind, setIndustry] = useState("");
  const [exp, setWorkExperience] = useState("");
  const[skill,setskill]=useState("")



  const[multilanguage,setMultiLanguage]=useState([])
  const[checkId,setCheckId]=useState([])
  const[simpleArray,setSimpleArray]=useState([])
  const[checkString,setCheckStrings]=useState([])

  useEffect(() => {
    loadGetSearch(localStorage.getItem("auth_id1"));
  },[]);

  const loadGetSearch = async (userId) => {
    await props.getSearch(userId);
    return null;
  };

  const addnewSearch = async () => {
    await props.createSearch(localStorage.getItem("auth_id1"),keyword,checkId,state,ind,exp);
  };

  let handleMultiLanguage = (e) => {
    setMultiLanguage(Array.isArray(e) ? e.map((x) => x.label) : []);
    // setMultiLanguage(e.map((x) => x.label));
    setCheckId(
      Array.isArray(e) ? e.map((x) => x.id).filter((f) => f != null) : []
    );
    // setSimpleArray(props.getCreateJobReducer.getcreatejob.skills.map((e) => e.name));
    // setCheckStrings(
    //   Array.isArray(e)
    //     ? e.map((x) => x.label).filter((f) => !simpleArray.includes(f))
    //     : []
    // );
  };

  return (
    <>
      <Nav2 />
      <div className="container">
          {/* <button onClick={()=>console.log("fffff",props.getSearchReducer.sData)}>fffff</button> */}
        <div className="row mt-5">
          <h1 style={{ color: "#865ddd", fontWeight: "bold" }}>
            Search For Candidates
          </h1>
          <p style={{ color: "#011F95", fontWeight: "bold" }}>
            Enter the following info to get the most suitable candidates
          </p>
        </div>
        {/* Start   */}
        <div className="row pt-3 mb-5">
          <div className="col-lg-3 col-md-6 mr-lg-0 pr-lg-0  mr-md-0 pr-md-0 ">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  <img src={SearchIcon} />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-left-0 pl-0"
                placeholder="Designation"
                onChange={(e) => setJobTitle(e.target.value)}
                style={{
                  color:"#c8c8c8"
                }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 ml-lg-0 pl-lg-0 ml-md-0 pl-md-0 pr-md-0 pr-lg-0">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  {" "}
                  <img src={LocationIcon} />
                </span>
              </div>
              <Creatable
                options={
                  
                    props.getSearchReducer.search.skills
                  
                 
                }
                // components={{ Menu }}
                isMulti
                // isValidNewOption={isValidNewOption}
                onChange={handleMultiLanguage}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 ml-lg-0 pl-lg-0 ml-md-0 pl-md-0 pr-md-0 pr-lg-0">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  {" "}
                  <img src={LocationIcon} />
                </span>
              </div>
              <select
                className="form-select"
                onChange={(e) => setLocation(e.target.value)}
                style={{color:"#c8c8c8",borderLeftColor:"#fff"}}
              >
                <option>Location</option>
                {
                    props.getSearchReducer.search.cities&&props.getSearchReducer.search.cities.length>0?
                    props.getSearchReducer.search.cities.map(ci=>(
                        <option value={ci.state_id}>{ci.state_name!==null&&ci.state_name!==undefined?ci.state_name:""}</option>
                    )):""
                }
              </select>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 ml-lg-0 pl-lg-0 pr-md-0 pr-lg-0">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  {" "}
                  <img src={LocationIcon} />
                </span>
              </div>
              <select
                className="form-select"
                onChange={(e) => setIndustry(e.target.value)}
                style={{color:"#c8c8c8",borderLeftColor:"#fff"}}
              >
                <option>Industry</option>
                {
                    props.getSearchReducer.search.industries&&props.getSearchReducer.search.industries.length>0?
                    props.getSearchReducer.search.industries.map(ind=>(
                        <option value={ind.id}>{ind.name!==null&&ind.name!==undefined?ind.name:""}</option>
                    )):""
                }
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ml-lg-0 pl-lg-0 ml-md-0 pr-md-0 pl-md-0">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  {" "}
                  <img src={Briefcase} />
                </span>
              </div>
              <select
                className="form-select"
                onChange={(e) => setWorkExperience(e.target.value)}
                style={{color:"#c8c8c8",borderLeftColor:"#fff"}}
              >
                <option>Experience</option>
                {
                    props.getSearchReducer.search.experiences&&props.getSearchReducer.search.experiences.length>0?
                    props.getSearchReducer.search.experiences.map(exp=>(
                        <option value={exp.id}>{exp.name!==null&&exp.name!==undefined?exp.name:""}</option>
                    )):""
                }
              </select>
              {
                // props.getSearchReducer.sData?
                <Link to={`/SearchResultsLogin?keyword=${keyword}&&skill=${checkId}&&state=${state}&&industry=${ind}&&experience=${exp}`}>
                   <div className="input-group-append">
                  <button
                    className="input-group-text text-white font-weight-bold"
                    onClick={() => addnewSearch()}
                    style={{
                      backgroundColor: "#865ddd",
                      borderColor: "#865ddd",
                      cursor: "pointer",
                    }}
                  disabled={
                    !keyword === false 
                   
                      ? false
                      : true
                  }
                  >
                    {/* <span */}
                    
                      
                    {/* > */}
                      SEARCH
                    {/* </span> */}
                    </button>
              </div>
                </Link>
          //       :
          //       <div className="input-group-append">
          //       <span
          //         className="input-group-text text-white font-weight-bold"
          //         // onClick={() => addnewSearch()}
          //         style={{
          //           backgroundColor: "#865ddd",
          //           borderColor: "#865ddd",
          //           cursor: "pointer",
          //         }}
          //       >
          //         SEARCH
          //       </span>
          // </div>
              }
           
            </div>
          </div>
        </div>
        {/* end   */}
        {/* <div className="row mt-5">
          <p style={{ color: "#011f95", fontWeight: "bold" }}>
            
          </p>
        </div> */}

        <div className="row mb-5">
            <h5>Recent Searches</h5>
          {props.getSearchReducer.search.previous_searches &&
          props.getSearchReducer.search.previous_searches.length > 0
            ? props.getSearchReducer.search.previous_searches.map((pre) => (
                <div className="col-md-12">
                  <img src={RecentSearches} alt="" />
                  <span className="ml-4" style={{ color: "#707070" }}>
                    {pre.keyword !== null && pre.keyword !== undefined
                      ? pre.keyword
                      : ""}
                  </span>
                </div>
              ))
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  getSearchReducer: state.getSearchReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getSearch: (userId) => dispatch(getSearch(userId)),
  createSearch: (userId,keyword,skill,state,ind,exp) =>
    dispatch(createSearch(userId,keyword,skill,state,ind,exp)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchJobs);
