import React, { useState, useEffect } from "react";
import Briefcase from "../../Assests/briefcase.svg";
import Location from "../../Assests/Location.svg";
import Pen from "../../Assests/pen.svg";
import "./searchResult.css";
import Nav2 from "../../Components/Nav2/Nav2";
import Footer from "../../Components/Footer/Footer";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllFavs,createAddtofav} from "../../actions/addtofaavAction";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"


function Addtofav(props) {
//   const search = useLocation().search;
//   const key = new URLSearchParams(search).get("key");
const[icon,seticon]=React.useState(false)
useEffect(()=>{
  getfav(localStorage.getItem("auth_id1"))
})
const getfav=async(userId)=>{
  await props.getAllFavs(userId)
}

const postFav=async(e)=>{
  await props.createAddtofav(localStorage.getItem("auth_id1"),e)
}
 
  return (
    <>
    {/* <button onClick={()=>console.log("ddd",props.addtofavReducer.addtofav)}>hhghjghjghj</button> */}
    <Nav2 />
      {/* <button onClick={()=>console.log("asd",props.SearchLoginReducer.searchData)}>fffff</button> */}
      <div className="container my-5">
          {/* <button onClick={()=>console.log("fffff",props.getSearchReducer.sData)}>gfggggg</button> */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="font-weight-bold mb-0" style={{color:"#865ddd"}}>Favorites</h1>
            <p className="font-weight-bold" style={{color:"#011F95"}}>
              Showing{" "}
              { props.addtofavReducer.addtofav &&
                  props.addtofavReducer.addtofav.length > 0
                  ? props.addtofavReducer.addtofav.length
                  : "0"
                }
                {" "} Candidates
              {/* {key} Jobs */}
              {/* search.split('?')[2].split('=')[1] */}
            </p>
          </div>
        </div>
        {/* Main Section Parent start */}
        {/* ----------------------------------------------- */}
        <div className="row">
          <div
            className="col-md-10"
            // style={{ maxHeight: "700px", overflowY: "scroll" }}
          >
            {/* Section 1 starts */}

            {/* Top Managment Box-1 Starts */}
            { (
              props.addtofavReducer.addtofav &&
              props.addtofavReducer.addtofav.length > 0 ? (
                props.addtofavReducer.addtofav.map((user) => (
                  <div className="row shadow p-2 recr-user-info-main mb-5 mr-1 mt-2 ml-1 home-hover-effect">
                    <div className="col-md-12 text-right">
                      
                    <span title="Remove from favourites"><i class="fas fa-heart fa-1x text-danger" onClick={(e)=>postFav(user.id)}></i></span>
                </div>
                   <Link to={`/SearchApplicantsProfile?id=${user.id}`} className="link-tag-home">
                <div className="row ">
                <div className="col-lg-3 col-md-5 col-8">
                  <img src={user.picture!==null&&user.picture!==undefined?user.picture:""} height="130px" width="70%" style={{objectFit:"cover" , borderRadius:"50%"}} className="mt-2" />
                </div>
                <div className="col-lg-6 col-md-7">
                  <h1 className="user-name-recr m-0 p-0">{user.name!==null&&user.name!==undefined?user.name:""}</h1>
                  <p className="user-loc-recr m-0 p-0">{user.city!==null&&user.city!==undefined?user.city:""} , {user.state!==null&&user.state!==undefined?user.state:""}</p>
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
                {/* <div className="col-md-3">
                  <p className="posted-date-appli">Posted on {user.applied_date!==null&&user.applied_date!==undefined?user.applied_date:""}</p>
                </div> */}
              </div>
              </Link>
              </div>
                 ))
              ) : (
                <div>
                  <p>Candidates will appear here!</p>
                </div>
              )
            ) } 
          </div>
          <div className="col-md-2 col-12 mt-3">
            <div className="place-ad ">
              <h4>Place Ad </h4>
            </div>
          
          </div>
          {/* Section 2 ends */}

          {/* Section 3 starts */}
          <div className="result-main-child-03"></div>
          {/* Section 3 ends */}
        </div>
        {/* ----------------------------------------------- */}
        {/* </div> */}
        {/* Main Section Parent end */}
        {
          props.addtofavReducer.loading1==false?<FullPageLoader />:""
        }
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  addtofavReducer: state.addtofavReducer,
});

const mapDispatchToProps = (dispatch) => ({
    createAddtofav: (userId,id) => dispatch(createAddtofav(userId,id)),
  getAllFavs: (userId) =>
      dispatch(getAllFavs(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Addtofav);

