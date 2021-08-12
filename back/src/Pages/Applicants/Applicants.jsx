import React , {useEffect,useState} from "react";
import "./Applicants.css";  
import Nav2 from "../../Components/Nav2/Nav2";
import Footer from "../../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import UserImage from "../../Assests/applicants/user.png";
import {Link} from "react-router-dom"
import { getAllApplicants } from "../../actions/allapplicantsAction";
import {useLocation} from "react-router-dom"
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"
import {createAddtofav} from "../../actions/addtofaavAction"
import { connect } from "react-redux";

function Applicants(props) {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
  const[icon,seticon]=React.useState(false)
  const[sort,setsort]=React.useState("sort-by")
  useEffect(() => {
    jobData(localStorage.getItem("auth_id1"),compIds)
  }, []);

  const jobData = async (userId,id) => {
    await props.getAllApplicants(userId,id)
    return null;
  }
  const AddtoFav=async(e)=>{
    await props.createAddtofav(localStorage.getItem("auth_id1"),e)
  }
  return (
    <>
      <Nav2 />
      <div className="container mt-5">
        <h1 className="applicants-head-recr">Applicants</h1>
        <p className="applicants-para-recr">Showing {props.allapplicantsReducer.allapplicants&&props.allapplicantsReducer.allapplicants.users&&props.allapplicantsReducer.allapplicants.users.length>0?props.allapplicantsReducer.allapplicants.users.length:"0"} applicants</p>
        <div className="row">
          
          {/* Applicants OverFlow Starts here */}
          <div className="col-md-9 mb-md-0 mb-lg-0 mb-3">
            {/* <button onClick={()=>console.log("dfghjj",props.allapplicantsReducer.allapplicants.users)}>hhhhhhh</button> */}
            {/* Api Starts here */}
            {
              props.allapplicantsReducer.allapplicants.users&&props.allapplicantsReducer.allapplicants.users.length>0?
              props.allapplicantsReducer.allapplicants.users.map(user=>(
                <div className="row shadow p-2 recr-user-info-main mb-2 mr-1 mt-2 ml-1 home-hover-effect">
                <div className="col-md-12 text-right">
                {/* {
                    user.favourite==0?
                    <i class="fal fa-heart fa-1x" onClick={(e)=>AddtoFav(user.id)}></i>
                    :
                    <i class="fas fa-heart fa-1x text-danger" onClick={(e)=>AddtoFav(user.id)}></i>
                  } */}
                </div>
                <Link to={`/ApplicantsVideoCv?id=${user.
                  applicant_id}`} className="link-tag-home">
                <div className="row ">
                
                <div className="col-lg-3 col-md-5 col-8 pr-md-0">
                  <img src={user.dp!==null&&user.dp!==undefined?user.dp:""} height="130px" width="70%" style={{objectFit:"cover" , borderRadius:"50%"}} className="mt-2" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <h1 className="user-name-recr m-0 p-0">{user.name!==null&&user.name!==undefined?user.name:""}</h1>
                  <p className="user-loc-recr m-0 p-0">{user.city!==null&&user.city!==undefined?user.city:""} , {user.country!==null&&user.country!==undefined?user.country:""}</p>
                  <h3 className="key-skills-recr-applicants m-0 p-0">
                    Key Skills
                  </h3>
                  <p className="userskills-appli m-0 p-0">
                  {user.skills&&user.skills.length>0?
                  user.skills.map(sk=>(
                    <>
                    {sk} ,  
                    </>
                  )):"no skills"
                  }
                  </p>
                </div>
                <div className="col-lg-3 col-md-1">
                  {/* <p className="posted-date-appli">Posted on {user.applied_date!==null&&user.applied_date!==undefined?user.applied_date:""}</p> */}
                </div>
              </div>
              </Link>
              </div>
              )):"No applicants"
              
              


            }
     
         
          </div>
          {/* Applicants OverFlow Ends here */}
          {/* DropDown Starts */}
          <div className="col-md-3">
            <div className="row mt-2">
              <div className="col-md-12">
                {/* <select className="form-select shadow border-0"
                onChange={e=>setsort(e.target.value)}
                style={{color:"#011f95"}}>
                  <option selected className="" value="sort-by">Sort by</option>
                  <option className="" value="shortlisted">Shortlisted</option>
                  <option className="" value="interviewd">Interviewed</option>
                  <option className="" value="hired">Hired</option>
                </select> */}
                {/* <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle default-drop-btn shadow w-100"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* DropDown Ends */}
        </div>
        {
          props.allapplicantsReducer.loading==false?<FullPageLoader />:null
        }
      </div>
      <div className="footer-applicant">
        <Footer />
      </div>
    </>
  );
}




const mapStateToProps = (state) => ({
  allapplicantsReducer: state.allapplicantsReducer,
  addtofavReducer:state.addtofavReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllApplicants: (userId,id) => dispatch(getAllApplicants(userId,id)),
  createAddtofav: (userId,id) => dispatch(createAddtofav(userId,id)),


});
export default connect(mapStateToProps, mapDispatchToProps)(Applicants);
