import React , {useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateAJob.css";
import Nav2 from "../../Components/Nav2/Nav2";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { connect, useStore } from "react-redux";
import {Link} from "react-router-dom"
import { getCreateJobData,createJob } from "../../actions/getcreatejobAction";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"





// const Menu = (props) => {
//   const optionSelectedLength = props.getValue().length || 0;
//   return (
//     <components.Menu {...props}>
//       {optionSelectedLength < 6 ? (
//         props.children
//       ) : (
//         <div style={{ margin: 15 }}>Max limit achieved</div>
//       )}
//     </components.Menu>
//   );
// };
function CreateAJobs(props) {
  const[multilanguage,setMultiLanguage]=useState([])
  const[checkId,setCheckId]=useState([])
  const[simpleArray,setSimpleArray]=useState([])
  const[checkString,setCheckStrings]=useState([])
  const [lingo,setLingo]=useState([])
  const [lingCounter,setLingCounter]=useState(0)


const[job_title,setjob_title]=useState("")
const[work_location,setwork_location]=useState(null)
const[work_location_city,setwork_location_city]=useState(1)
const[job_description,setjob_description]=useState("")
const[skill_by_industry,setskill_by_industry]=useState(null)
const[functional_area,setfunctional_area]=useState(null)
const[required_work_level,setrequired_work_level]=useState(null)
const[curr_type,setcurr_type]=useState(2)
const[salary_type,setsalary_type]=useState(null)
const[salary_min,setsalary_min]=useState("")
const[salary_max,setsalary_max]=useState("")
const[experience_level,setexperience_level]=useState(null)
const[international_recruiting,setinternational_recruiting]=useState(0)


  useEffect(() => {
    jobData(localStorage.getItem("auth_id1"))
  }, []);

  const jobData = async (userId) => {
    await props.getCreateJobData(userId)
    return null;
  }
  let handleMultiLanguage = (e) => {
    setMultiLanguage(Array.isArray(e) ? e.map((x) => x.label) : []);
    // setMultiLanguage(e.map((x) => x.label));
    setCheckId(
      Array.isArray(e) ? e.map((x) => x.id).filter((f) => f != null) : []
    );
    setSimpleArray(props.getCreateJobReducer.getcreatejob.skills.map((e) => e.name));
    // setCheckStrings(
    //   Array.isArray(e)
    //     ? e.map((x) => x.label).filter((f) => !simpleArray.includes(f))
    //     : []
    // );
  };
  const CreateJob = async ()=>{
    await props.createJob(localStorage.getItem("auth_id1"),job_title,work_location,work_location_city,job_description,
    skill_by_industry,functional_area,required_work_level,curr_type,salary_type,salary_min,salary_max
    ,experience_level,lingo,international_recruiting)
    }



    let handleTest = (e) => {
      console.log(e);
      var temp=[...lingo]
      var check=temp.filter(data=>data==e)
      if(check.length>0){
        return

      }
      temp.push(e)
      setLingo(temp)
        
      };
      
      const deleteKeySkills = (e) => {
        
        var temp=[...lingo]
        var check=temp.filter(data=>data!==e)
        console.log("check",check);
        setLingo(check)
        
        
      }
  return (
    <>
    <Nav2/>
      <div className="container">
        <h1 className="create-job-recr-head mt-5">Create a Job</h1>
        <div className="row mb-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 col-md-12 shadow p-5 mt-2 create-job-main-recr">
            <div className="row">
              {/* Row 1 For Forms STarts here */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <label className=" salary-range-recr">Job Title</label>
                    <input
                    onChange={(e)=>setjob_title(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter job title (candidate will search by this title)"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                      Work Location
                    </label>
                   <select
                   onChange={(e)=>setwork_location(e.target.value)}
                   className="form-control">
                     <option selected>Select your work location</option>
                     {
                       props.getCreateJobReducer.getcreatejob.location&&props.getCreateJobReducer.getcreatejob.location.length>0?
                       props.getCreateJobReducer.getcreatejob.location.map(loc=>(
                        <option value={loc.country_id}>{loc.co_name!==null&&loc.co_name!==undefined?loc.co_name:""}</option>
                       )):""
                     }
                   </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">Job Type</label>
                    <select
                    onChange={(e)=>setrequired_work_level(e.target.value)}
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option selected>Select here</option>
                      {
                       props.getCreateJobReducer.getcreatejob.work_level&&props.getCreateJobReducer.getcreatejob.work_level.length>0?
                       props.getCreateJobReducer.getcreatejob.work_level.map(work_level=>(
                        <option value={work_level.id}>{work_level.work_level!==null&&work_level.work_level!==undefined?work_level.work_level:""}</option>
                       )):""
                     }
                    </select>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col-md-12 mt-3 mb-0">
                    <label className="salary-range-recr">
                      Job Description
                    </label>
                  <textarea
                  onChange={(e)=>setjob_description(e.target.value)}
                  style={{resize:"none",minHeight:"180px"}}
                  className="form-control h-75" placeholder="Enter job description"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                      Industry
                    </label>
                 <select
                 onChange={(e)=>setskill_by_industry(e.target.value)}
                 className="form-control">
                   <option selected>Select industry</option>
                   {
                       props.getCreateJobReducer.getcreatejob.skill_by_industry&&props.getCreateJobReducer.getcreatejob.skill_by_industry.length>0?
                       props.getCreateJobReducer.getcreatejob.skill_by_industry.map(skill_by_industry=>(
                        <option value={skill_by_industry.cat_id}>{skill_by_industry.cat_name!==null&&skill_by_industry.cat_name!==undefined?skill_by_industry.cat_name:""}</option>
                       )):""
                     }
                 </select>
                  </div>
                </div>


                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                      Skills
                    </label>
                    {/* <Creatable
                options={
                  
                    props.getCreateJobReducer.getcreatejob.skills
                  
                 
                }
                // components={{ Menu }}
                isMulti
                // isValidNewOption={isValidNewOption}
                onChange={handleMultiLanguage}
              /> */}



{/* {lingo.length>0?lingo.map(l=>(
  <>{l}</>
)):"omamamam"} */}

<select 
                      className="form-control" onChange={(e)=>handleTest(e.target.value)}>
                        <option selected>Select</option>
                        {props.getCreateJobReducer.getcreatejob.skills?
                        (props.getCreateJobReducer.getcreatejob.skills&&props.getCreateJobReducer.getcreatejob.skills.length > 0
                          ? props.getCreateJobReducer.getcreatejob.skills.map(l=>(
                          <> 
                          
                          <option
                          value={l.id}
                          key={l.id}>{l.label}</option>
                           <br/></>
                          )):""):""
                        
                  }
                      </select>

                      {
                (lingo.length>0?
                  lingo.map(skill=>(
                    <>
                    <button
                        onClick={(e) => deleteKeySkills(skill)}
                        // key={lang.i}
                        className="btn btn-light mt-2 shadow btn-color-key mx-3"
                        id="btnn"
                      >
                        <span className="btn-label">
                          <i className="far fa-trash pr-1"></i>
                        </span>
                        {(props.getCreateJobReducer.getcreatejob.skills&&props.getCreateJobReducer.getcreatejob.skills.length>0?
                      (props.getCreateJobReducer.getcreatejob.skills.filter(data=>data.id==skill).length>0?props.getCreateJobReducer.getcreatejob.skills.filter(data=>data.id==skill)[0].label:"")
                      :"")}
                        {/* {skill !== null && skill !== undefined ? skill.name : ""} */}
                      </button>
                    
                    </>
                  ))
                  
                  :"")
              }
                      
                  </div>
                </div>
              </div>
              {/* Row 1 For Forms ENds here */}

              {/* Row 2 For Forms STarts here */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <label className="salary-range-recr">Experience</label>
                    <select
                    onChange={(e)=>setexperience_level(e.target.value)}
                      className="form-control"
                      aria-label="Default select example"
                    >
                      <option selected>Select here</option>
                      {
                       props.getCreateJobReducer.getcreatejob.experience_level&&props.getCreateJobReducer.getcreatejob.experience_level.length>0?
                       props.getCreateJobReducer.getcreatejob.experience_level.map(experience_level=>(
                        <option value={experience_level.id}>{experience_level.name!==null&&experience_level.name!==undefined?experience_level.name:""}</option>
                       )):""
                     }
                    </select>
                  </div>
                </div>
                <p className="m-0 p-0 mt-3 salary-range-recr">Salary Range</p>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <label className="salary-range-recr">
                      Minimum Salary
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Minimum salary"
                    onChange={(e)=>setsalary_min(e.target.value)} />
                  {/* <select
                  onChange={(e)=>setsalary_min(e.target.value)}
                  className="form-control">
                    <option selected>select your minimum salary</option>
                    {
                       props.getCreateJobReducer.getcreatejob.salary_per_annum&&props.getCreateJobReducer.getcreatejob.salary_per_annum.length>0?
                       props.getCreateJobReducer.getcreatejob.salary_per_annum.map(salary_per_annum=>(
                        <option value={salary_per_annum.id}>{salary_per_annum.name!==null&&salary_per_annum.name!==undefined?salary_per_annum.name:""}</option>
                       )):""
                     }
                  </select> */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                      Maximum Salary
                    </label>
                    <input 
                    className="form-control"
                    placeholder="Maximum salary" 
                    onChange={(e)=>setsalary_max(e.target.value)}  />
                    {/* <select 
                    onChange={(e)=>setsalary_max(e.target.value)}
                    className="form-control">
                    <option selected>select your maximum salary</option>
                    {
                       props.getCreateJobReducer.getcreatejob.salary_max&&props.getCreateJobReducer.getcreatejob.salary_max.length>0?
                       props.getCreateJobReducer.getcreatejob.salary_max.map(salary_max=>(
                        <option value={salary_max.id}>{salary_max.name!==null&&salary_max.name!==undefined?salary_max.name:""}</option>
                       )):""
                     }
                  </select> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                     Salary Type
                    </label>
                   <select 
                   onChange={(e)=>setsalary_type(e.target.value)}
                   className="form-control">
                     <option selected>Select salary type</option>
                     {
                       props.getCreateJobReducer.getcreatejob.salary_types&&props.getCreateJobReducer.getcreatejob.salary_types.length>0?
                       props.getCreateJobReducer.getcreatejob.salary_types.map(salary_types=>(
                        <option value={salary_types.id}>{salary_types.sal_type_name!==null&&salary_types.sal_type_name!==undefined?salary_types.sal_type_name:""}</option>
                       )):""
                     }
                   </select>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="label-create-job-recr">
                      International Hiring
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter country name"
                    />
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
                      Career Level
                    </label>
                   <select
                   onChange={(e)=>setfunctional_area(e.target.value)}
                   className="form-control">
                     <option selected>Select career level</option>
                     {
                       props.getCreateJobReducer.getcreatejob.functional_area&&props.getCreateJobReducer.getcreatejob.functional_area.length>0?
                       props.getCreateJobReducer.getcreatejob.functional_area.map(functional_area=>(
                        <option value={functional_area.id}>{functional_area.name!==null&&functional_area.name!==undefined?functional_area.name:""}</option>
                       )):""
                     }
                   </select>
                  </div>
                </div>
              </div>
              {/* Row 2 For Forms ENds here */}
            </div>
            <div className="row mt-5">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <button
                onClick={()=>CreateJob()}
                disabled={
                  !job_title === false &&
                  !work_location === false &&
                  !work_location_city === false &&
                  !job_description === false &&
                  !skill_by_industry === false &&
                  !functional_area === false &&
                  !required_work_level === false &&
                  !salary_type === false&&
                  !salary_min === false &&
                  !salary_max === false &&
                  !experience_level === false &&
                  lingo.length>0 
                    ? false
                    : true
                }
                className="btn btn-primary w-100 create-job-btn-recr">
                  Create
                </button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {
          props.getCreateJobReducer.loading==false?<FullPageLoader />:null
        }
      </div>
    </>
  );
}



const mapStateToProps = (state) => ({
  getCreateJobReducer: state.getCreateJobReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCreateJobData: (userId) => dispatch(getCreateJobData(userId)),
  createJob:(userId,job_title,work_location,work_location_city,job_description,
  skill_by_industry,functional_area,required_work_level,curr_type,salary_type,salary_min,salary_max
  ,experience_level,checkId,international_recruiting)=>dispatch(createJob(userId,job_title,work_location,work_location_city,job_description,
  skill_by_industry,functional_area,required_work_level,curr_type,salary_type,salary_min,salary_max
  ,experience_level,checkId,international_recruiting))

});
export default connect(mapStateToProps, mapDispatchToProps)(CreateAJobs);
