import React , {useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateAJob.css";
import Nav2 from "../../Components/Nav2/Nav2";
import Creatable, { makeCreatableSelect } from "react-select/creatable";
import { components } from "react-select";
import { connect, useStore } from "react-redux";
import {Link,useLocation,useHistory} from "react-router-dom"
import { getEditJobData,editJob } from "../../actions/editJobAction";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"
import { createJob } from "../../actions/getcreatejobAction";





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
function EditJob(props) {
    const search = useLocation().search;
    const compIds = new URLSearchParams(search).get("id");
  const[multilanguage,setMultiLanguage]=useState([])
  const[checkId,setCheckId]=useState([])
  const[simpleArray,setSimpleArray]=useState([])
  const[checkString,setCheckStrings]=useState([])
  const [lingo,setLingo]=useState([])
  const [lingCounter,setLingCounter]=useState(0)

  const[job_id,setjob_id]=useState(compIds)
const[job_title,setjob_title]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_title!==null&&props.editjobReducer.editjob.stored_values.job_title!==undefined&&props.editjobReducer.editjob.stored_values.job_title!==""?props.editjobReducer.editjob.stored_values.job_title:"")
const[work_location,setwork_location]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.city_by_country&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==null&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==undefined&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==""?props.editjobReducer.editjob.stored_values.city_by_country.country_id:null)
const[work_location_city,setwork_location_city]=useState(1)
const[job_description,setjob_description]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_desc!==null&&props.editjobReducer.editjob.stored_values.job_desc!==undefined&&props.editjobReducer.editjob.stored_values.job_desc!==""?props.editjobReducer.editjob.stored_values.job_desc:"")
const[skill_by_industry,setskill_by_industry]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.industry&&props.editjobReducer.editjob.stored_values.industry.cat_id!==null&&props.editjobReducer.editjob.stored_values.industry.cat_id!==undefined&&props.editjobReducer.editjob.stored_values.industry.cat_id!==""?props.editjobReducer.editjob.stored_values.industry.cat_id:null)
const[functional_area,setfunctional_area]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.functional_area&&props.editjobReducer.editjob.stored_values.functional_area.id!==null&&props.editjobReducer.editjob.stored_values.functional_area.id!==undefined&&props.editjobReducer.editjob.stored_values.functional_area.id!==""?props.editjobReducer.editjob.stored_values.functional_area.id:null)
const[required_work_level,setrequired_work_level]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.work_level&&props.editjobReducer.editjob.stored_values.work_level.id!==null&&props.editjobReducer.editjob.stored_values.work_level.id!==undefined&&props.editjobReducer.editjob.stored_values.work_level.id!==""?props.editjobReducer.editjob.stored_values.work_level.id:null)
const[curr_type,setcurr_type]=useState(2)
const[salary_type,setsalary_type]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_type&&props.editjobReducer.editjob.stored_values.salary_type.id!==null&&props.editjobReducer.editjob.stored_values.salary_type.id!==undefined&&props.editjobReducer.editjob.stored_values.salary_type.id!==""?props.editjobReducer.editjob.stored_values.salary_type.id:null)
const[salary_min,setsalary_min]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_min!==null&&props.editjobReducer.editjob.stored_values.salary_min!==undefined&&props.editjobReducer.editjob.stored_values.salary_min!==""?props.editjobReducer.editjob.stored_values.salary_min:"")
const[salary_max,setsalary_max]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_max!==null&&props.editjobReducer.editjob.stored_values.salary_max!==undefined&&props.editjobReducer.editjob.stored_values.salary_max!==""?props.editjobReducer.editjob.stored_values.salary_max:"")
const[experience_level,setexperience_level]=useState(props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.exp&&props.editjobReducer.editjob.stored_values.exp.id!==null&&props.editjobReducer.editjob.stored_values.exp.id!==undefined&&props.editjobReducer.editjob.stored_values.exp.id!==""?props.editjobReducer.editjob.stored_values.exp.id:null)
const[international_recruiting,setinternational_recruiting]=useState(0)

const history = useHistory()

const goBack = () => {
  history.goBack()
}

  useEffect(() => {
    jobData(localStorage.getItem("auth_id1"),compIds)
  }, []);

  const jobData = async (userId,id) => {
    await props.getEditJobData(userId,id)
    return null;
  }
  let handleMultiLanguage = (e) => {
    setMultiLanguage(Array.isArray(e) ? e.map((x) => x.label) : []);
    // setMultiLanguage(e.map((x) => x.label));
    setCheckId(
      Array.isArray(e) ? e.map((x) => x.id).filter((f) => f != null) : []
    );
    setSimpleArray(props.editjobReducer.editjob.skills.map((e) => e.name));
    // setCheckStrings(
    //   Array.isArray(e)
    //     ? e.map((x) => x.label).filter((f) => !simpleArray.includes(f))
    //     : []
    // );
  };
  const CreateJob = async ()=>{
    var list=[...props.editjobReducer.editjob.stored_values.skill]
    var list1=[]
    console.log("fdddddd",list)
    if(lingCounter==0&&lingo.length==0){
     
      for(var i=0;i<list.length;i++){
        list1.push(Number(list[i].id))
      }
    }
    await props.editJob(localStorage.getItem("auth_id1"),
    job_id,
    job_title!==null&&job_title!==undefined&&job_title!==""?job_title:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_title!==null&&props.editjobReducer.editjob.stored_values.job_title!==undefined&&props.editjobReducer.editjob.stored_values.job_title!==""?props.editjobReducer.editjob.stored_values.job_title:"",
    work_location!==null&&work_location!==undefined?work_location:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.city_by_country&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==null&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==undefined&&props.editjobReducer.editjob.stored_values.city_by_country.country_id!==""?props.editjobReducer.editjob.stored_values.city_by_country.country_id:null,
    work_location_city,
    job_description!==null&&job_description!==undefined&&job_description!==""?job_description:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_desc!==null&&props.editjobReducer.editjob.stored_values.job_desc!==undefined&&props.editjobReducer.editjob.stored_values.job_desc!==""?props.editjobReducer.editjob.stored_values.job_desc:"",
    skill_by_industry!==null&&skill_by_industry!==undefined?skill_by_industry:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.industry&&props.editjobReducer.editjob.stored_values.industry.cat_id!==null&&props.editjobReducer.editjob.stored_values.industry.cat_id!==undefined&&props.editjobReducer.editjob.stored_values.industry.cat_id!==""?props.editjobReducer.editjob.stored_values.industry.cat_id:null,
    functional_area!==null&&functional_area!==undefined?functional_area:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.functional_area&&props.editjobReducer.editjob.stored_values.functional_area.id!==null&&props.editjobReducer.editjob.stored_values.functional_area.id!==undefined&&props.editjobReducer.editjob.stored_values.functional_area.id!==""?props.editjobReducer.editjob.stored_values.functional_area.id:null,
    required_work_level!==null&&required_work_level!==undefined?required_work_level:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.work_level&&props.editjobReducer.editjob.stored_values.work_level.id!==null&&props.editjobReducer.editjob.stored_values.work_level.id!==undefined&&props.editjobReducer.editjob.stored_values.work_level.id!==""?props.editjobReducer.editjob.stored_values.work_level.id:null,
    curr_type,
    salary_type!==null&&salary_type!==undefined?salary_type:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_type&&props.editjobReducer.editjob.stored_values.salary_type.id!==null&&props.editjobReducer.editjob.stored_values.salary_type.id!==undefined&&props.editjobReducer.editjob.stored_values.salary_type.id!==""?props.editjobReducer.editjob.stored_values.salary_type.id:null,
    salary_min!==null&&salary_min!==undefined&&salary_min!==""?salary_min:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_min!==null&&props.editjobReducer.editjob.stored_values.salary_min!==undefined&&props.editjobReducer.editjob.stored_values.salary_min!==""?props.editjobReducer.editjob.stored_values.salary_min:"",
    salary_max!==null&&salary_max!==undefined&&salary_max!==""?salary_max:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_max!==null&&props.editjobReducer.editjob.stored_values.salary_max!==undefined&&props.editjobReducer.editjob.stored_values.salary_max!==""?props.editjobReducer.editjob.stored_values.salary_max:"",
    experience_level!==null&&experience_level!==undefined&&experience_level!==""?experience_level:props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.exp&&props.editjobReducer.editjob.stored_values.exp.id!==null&&props.editjobReducer.editjob.stored_values.exp.id!==undefined&&props.editjobReducer.editjob.stored_values.exp.id!==""?props.editjobReducer.editjob.stored_values.exp.id:null,
    lingCounter==0&&lingo.length==0?list1:lingo,
    international_recruiting
    )
    }






    let handleTest = (e) => {
        console.log(e);
          if(lingo.length==0&&lingCounter==0){
            console.log("block 00000")
          var preIdList=[]
          var previousData=[...props.editjobReducer.editjob.stored_values.skill]
          for(var x=0;x<previousData.length;x++){
           preIdList.push(previousData[x].id)
          }
          var temp= preIdList.filter(data=>data==e)
          if(temp.length>0){
            return
          }
        console.log("lenn",preIdList.length)
         
         
          preIdList.push(e)
          setLingo(preIdList)
         
          
          setLingCounter(1)
      
      } 
      else if(lingo.length==0&&lingCounter==1){
        console.log("block 01111")
        var preIdList=[]
        var len=e.length
      preIdList.push(e)
        setLingo(preIdList)
       
        
      }
      else if(lingo.length>0){
        console.log("block 1111");
        var tempp=[...lingo]
        console.log("temppp",tempp);
        var check=tempp.filter(data=>data==e)
        if(check.length>0){
          return
        }
        else{
          
         
            tempp.push(e)
            setLingo(tempp)
           
        
            }
        
        }
          
        };




        const deleteKeySkills = (e) => {
            console.log("eeeeeee",e)
            if(lingCounter==0){
              var tempId=[]
              var temp=[...props.editjobReducer.editjob.stored_values.skill]
              console.log("qqqqqqqq",temp);
              for(var n=0;n<temp.length;n++){
                tempId.push(temp[n].id)
              }
              var check=tempId.filter(data=>data!==e)
              console.log("check",check);
              setLingo(check)
              setLingCounter(1)
            }
            else if(lingCounter==1){
              var temp=[...lingo]
              var check=temp.filter(data=>data!==e)
              setLingo(check)
            }
            
          }
  return (
    <>
    <Nav2/>
      <div className="container">
        <h1 className="create-job-recr-head mt-5">Edit Job</h1>
        {/* <button onClick={()=>console.log("ddd",lingo)}>dffghg</button> */}
        <div className="row mb-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 col-md-12 shadow p-5 mt-2 create-job-main-recr">
            <div className="row">
              {/* Row 1 For Forms STarts here */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <label className="salary-range-recr">Job Title</label>
                    <input
                    onChange={(e)=>setjob_title(e.target.value)}
                    defaultValue={props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_title!==null&&props.editjobReducer.editjob.stored_values.job_title!==undefined&&props.editjobReducer.editjob.stored_values.job_title!==""?props.editjobReducer.editjob.stored_values.job_title:""}
                      type="text"
                      className="form-control"
                      placeholder="Enter job title"
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
                     <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.city_by_country&&props.editjobReducer.editjob.stored_values.city_by_country.co_name!==null&&props.editjobReducer.editjob.stored_values.city_by_country.co_name!==undefined&&props.editjobReducer.editjob.stored_values.city_by_country.co_name!==""?props.editjobReducer.editjob.stored_values.city_by_country.co_name:""}</option>
                     {
                       props.editjobReducer.editjob.location&&props.editjobReducer.editjob.location.length>0?
                       props.editjobReducer.editjob.location.map(loc=>(
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
                      className="form-control "
                      aria-label="Default select example"
                    >
                      <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.work_level&&props.editjobReducer.editjob.stored_values.work_level.work_level!==null&&props.editjobReducer.editjob.stored_values.work_level.work_level!==undefined&&props.editjobReducer.editjob.stored_values.work_level.work_level!==""?props.editjobReducer.editjob.stored_values.work_level.work_level:""}</option>
                      {
                       props.editjobReducer.editjob.work_level&&props.editjobReducer.editjob.work_level.length>0?
                       props.editjobReducer.editjob.work_level.map(work_level=>(
                        <option value={work_level.id}>{work_level.work_level!==null&&work_level.work_level!==undefined?work_level.work_level:""}</option>
                       )):""
                     }
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="salary-range-recr">
                      Job Description
                    </label>
                  <textarea
                  onChange={(e)=>setjob_description(e.target.value)}
                  defaultValue={props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.job_desc!==null&&props.editjobReducer.editjob.stored_values.job_desc!==undefined&&props.editjobReducer.editjob.stored_values.job_desc!==""?props.editjobReducer.editjob.stored_values.job_desc:""}
                  className="form-control h-75" placeholder="Enter Job Description" rows="10" cols="5"></textarea>
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
                   <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.industry&&props.editjobReducer.editjob.stored_values.industry.cat_name!==null&&props.editjobReducer.editjob.stored_values.industry.cat_name!==undefined&&props.editjobReducer.editjob.stored_values.industry.cat_name!==""?props.editjobReducer.editjob.stored_values.industry.cat_name:""}</option>
                   {
                       props.editjobReducer.editjob.skill_by_industry&&props.editjobReducer.editjob.skill_by_industry.length>0?
                       props.editjobReducer.editjob.skill_by_industry.map(skill_by_industry=>(
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
                  
                    props.editjobReducer.editjob.skills
                  
                 
                }
                // components={{ Menu }}
                isMulti
                // isValidNewOption={isValidNewOption}
                onChange={handleMultiLanguage}
              /> */}


<select 
                      className="form-control" onChange={(e)=>handleTest(e.target.value)}>
                        <option selected>Select</option>
                        {props.editjobReducer.editjob.skills?
                        (props.editjobReducer.editjob.skills&&props.editjobReducer.editjob.skills.length > 0
                          ? props.editjobReducer.editjob.skills.map(l=>(
                          <> 
                          
                          <option
                          value={l.id}
                          key={l.id}>{l.label}</option>
                           <br/></>
                          )):""):""
                        
                  }
                      </select>




                      {props.editjobReducer.editjob.stored_values && lingo.length<1?(
                lingCounter==0?
                props.editjobReducer.editjob.stored_values.skill.map((lang) => (
                  <button
                    onClick={() => deleteKeySkills(lang.id)}
                    // key={lang.id}
                    className="btn btn-light mt-2 btn-color-key mx-1"
                    id="btnn"
                    style={{fontSize:"12px"}}
                  >
                    <span className="btn-label">
                      <i className="far fa-trash pr-1"></i>
                    </span>
                    
                    {lang !== null && lang !== undefined ? lang.label : ""}
                  </button>
                )):<b>add skills</b>
              )
              :lingo.map((lang) => (
                <button
                  onClick={() => deleteKeySkills(lang)}
                  // key={lang.id}
                  className="btn btn-light mt-2 btn-color-key mx-1"
                  id="btnn"
                  style={{fontSize:"12px"}}
                >
                  <span className="btn-label">
                    <i className="far fa-trash pr-1"></i>
                  </span>
                  

                  
                  {props.editjobReducer.editjob.skills&&props.editjobReducer.editjob.skills.length>0?
                  (props.editjobReducer.editjob.skills.filter(data=>data.id==lang).length>0?props.editjobReducer.editjob.skills.filter(data=>data.id==lang)[0].label:"")
                  :""}
                  {/* {lang !== null && lang !== undefined ? lang : ""} */}
                </button>
              ))
            
            }



                  </div>
                </div>
              </div>
              {/* Row 1 For Forms ENds here */}

              {/* Row 2 For Forms STarts here */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">Experience</label>
                    <select
                    onChange={(e)=>setexperience_level(e.target.value)}
                      className="form-control "
                      aria-label="Default select example"
                    >
                      <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.exp&&props.editjobReducer.editjob.stored_values.exp.name!==null&&props.editjobReducer.editjob.stored_values.exp.name!==undefined&&props.editjobReducer.editjob.stored_values.exp.name!==""?props.editjobReducer.editjob.stored_values.exp.name:""}</option>
                      {
                       props.editjobReducer.editjob.experience_level&&props.editjobReducer.editjob.experience_level.length>0?
                       props.editjobReducer.editjob.experience_level.map(experience_level=>(
                        <option value={experience_level.id}>{experience_level.name!==null&&experience_level.name!==undefined?experience_level.name:""}</option>
                       )):""
                     }
                    </select>
                  </div>
                </div>
                <p className="m-0 p-0 mt-2 salary-range-recr">Salary Range</p>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <label className="salary-range-recr">
                      Minimum Salary
                    </label>
                    <input type="text"
                    defaultValue={props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_min!==null&&props.editjobReducer.editjob.stored_values.salary_min!==undefined&&props.editjobReducer.editjob.stored_values.salary_min!==""?props.editjobReducer.editjob.stored_values.salary_min:""}
                    className="form-control" onChange={(e)=>setsalary_min(e.target.value)} />
                  {/* <select
                  onChange={(e)=>setsalary_min(e.target.value)}
                  className="form-control">
                    <option selected>select your minimum salary</option>
                    {
                       props.editjobReducer.editjob.salary_per_annum&&props.editjobReducer.editjob.salary_per_annum.length>0?
                       props.editjobReducer.editjob.salary_per_annum.map(salary_per_annum=>(
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
                     defaultValue={props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_max!==null&&props.editjobReducer.editjob.stored_values.salary_max!==undefined&&props.editjobReducer.editjob.stored_values.salary_max!==""?props.editjobReducer.editjob.stored_values.salary_max:""}
                    className="form-control" onChange={(e)=>setsalary_max(e.target.value)}  />
                    {/* <select 
                    onChange={(e)=>setsalary_max(e.target.value)}
                    className="form-control">
                    <option selected>select your maximum salary</option>
                    {
                       props.editjobReducer.editjob.salary_max&&props.editjobReducer.editjob.salary_max.length>0?
                       props.editjobReducer.editjob.salary_max.map(salary_max=>(
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
                     <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.salary_type&&props.editjobReducer.editjob.stored_values.salary_type.sal_type_name!==null&&props.editjobReducer.editjob.stored_values.salary_type.sal_type_name!==undefined&&props.editjobReducer.editjob.stored_values.salary_type.sal_type_name!==""?props.editjobReducer.editjob.stored_values.salary_type.sal_type_name:""}</option>
                     {
                       props.editjobReducer.editjob.salary_types&&props.editjobReducer.editjob.salary_types.length>0?
                       props.editjobReducer.editjob.salary_types.map(salary_types=>(
                        <option value={salary_types.id}>{salary_types.sal_type_name!==null&&salary_types.sal_type_name!==undefined?salary_types.sal_type_name:""}</option>
                       )):""
                     }
                   </select>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12 mt-3">
                    <label className="salary-range-recr">
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
                     <option selected>{props.editjobReducer.editjob.stored_values&&props.editjobReducer.editjob.stored_values.functional_area&&props.editjobReducer.editjob.stored_values.functional_area.name!==null&&props.editjobReducer.editjob.stored_values.functional_area.name!==undefined&&props.editjobReducer.editjob.stored_values.functional_area.name!==""?props.editjobReducer.editjob.stored_values.functional_area.name:""}</option>
                     {
                       props.editjobReducer.editjob.functional_area&&props.editjobReducer.editjob.functional_area.length>0?
                       props.editjobReducer.editjob.functional_area.map(functional_area=>(
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
            props.editjobReducer.loading==false?<FullPageLoader />:null
        }
      </div>
    </>
  );
}



const mapStateToProps = (state) => ({
  editjobReducer: state.editjobReducer,

});

const mapDispatchToProps = (dispatch) => ({
  getEditJobData: (userId,id) => dispatch(getEditJobData(userId,id)),
  editJob:(userId,id,job_title,work_location,work_location_city,job_description,skill_by_industry,functional_area,
    required_work_level,curr_type,salary_type,salary_min,salary_max,experience_level,
    skills,international_recruiting)=>dispatch(editJob(userId,id,job_title,work_location,work_location_city,job_description,skill_by_industry,functional_area,
        required_work_level,curr_type,salary_type,salary_min,salary_max,experience_level,
        skills,international_recruiting))

});
export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
