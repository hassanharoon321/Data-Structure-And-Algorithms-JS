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
import { createSearch, getSearch } from "../../actions/getsearchAction";
import { createAddtofavsearch } from "../../actions/addtofaavAction"
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"
import {newSearchFunc} from "../../actions/getsearchAction"


function SearchResultsLogin(props) {
    var search = useLocation().search;
    search = search.split("&&");
    const keyword=search[0].split("=")[1]
    const skill=search[1].split("=")[1]
    const state=search[2].split("=")[1]
    const industry=search[3].split("=")[1]
    const experience=search[4].split("=")[1]
    const checkId=skill.length==0?"":(skill.includes(",")?skill.split(","):[skill.toString()])

    // console.log("lllllll",keyword,skill,state,industry,experience)
    // console.log("lllllll",typeof keyword,typeof skill,typeof state,typeof industry,typeof experience,checkId)
    
  const [icon, seticon] = useState(false)
  const[load,setload]=useState(false)
  const[item,setItems]=useState([])

  // const addnewSearch = async () => {
  //   await props.createSearch(localStorage.getItem("auth_id1"),keyword,checkId,state,ind,exp);
  // };
  const[list,setlist]=useState([])
  useEffect(()=>{
    //   setInterval(() => {
    //     
    // }, 3000);
    searchget()
    searchList()
    
  },[])
  const searchget=async()=>{
    setload(true)
  newSearchFunc(localStorage.getItem("auth_id1"),keyword,checkId,state,industry,experience)
  .then(ref=>{
    // console.log("status",ref.status)
    return ref.json()
  }).then(res=>{
    console.log("sfdfgd",res)
    var list1=res.data.users
    if ((JSON.stringify(list1) !== JSON.stringify(list))&&(res.status==200||res.status==201)) {
      setlist(list1)
     
    }
    setload(false)
  }).catch(err=>{
    setload(false)
    console.log("fdvgsh",err)
  })
  
  }
  const searchList=async()=>{
    setload(true)
  newSearchFunc(localStorage.getItem("auth_id1"),keyword,checkId,state,industry,experience)
  .then(ref=>{
    // console.log("status",ref.status)
    return ref.json()
  }).then(res=>{
    console.log("sfdfgd",res)
    var list1=res.data.users
    setItems(list1)
    // if ((JSON.stringify(list1) !== JSON.stringify(list))&&(res.status==200||res.status==201)) {
    //   setlist(list1)
     
    // }
    setload(false)
  }).catch(err=>{
    setload(false)
    console.log("fdvgsh",err)
  })
  
  }
  const AddtoFav =async (user, i) => {
    console.log("userrrr",user)
    await props.createAddtofavsearch(localStorage.getItem("auth_id1"), user.id)
    searchget()
    console.log(user,"oooooo")
    //await props.createSearch(localStorage.getItem("auth_id1"),keyword,checkId,state,industry,experience);
    // if (user.favourite == 0) {
    //   user.favourite = 1
    //   console.log(user.favourite)
    //   seticon(true)
    //   return
    // }
    // else {
    //   user.favourite = 0
    //   console.log(user.favourite)
    //   seticon(false)
    //   return
    // }

    // window.location="/SearchJobs"
  }
  const newAddtoFav =async (user, i) => {
    const tempItem=[...item]
    var tempData={...user}
    var finalList=[]
    console.log(tempItem)
    console.log("ooooo",tempData,tempData.favourite)
    if(tempData["favourite"]==0){
      tempData["favourite"]=1
    }
    else if(tempData["favourite"]==1){
      tempData["favourite"]=0
    }
    console.log("userrrr",tempData,tempData.favourite)
    for(var i=0;i<tempItem.length;i++){
      if(tempItem[i].id==tempData.id){
        finalList.push(tempData)
      }
      else{
        finalList.push(tempItem[i])
      }
    }
    setItems(finalList)
    await props.createAddtofavsearch(localStorage.getItem("auth_id1"), user.id)
  }
  return (
    <>
      <Nav2 />
      <div className="container my-5">
        {/* <button onClick={()=>console.log("fffff",props.getSearchReducer.sData)}>gfggggg</button> */}
        <div className="row">
          <div className="col-md-12 text-md-left text-lg-left text-center">
            <h1 className="font-weight-bold mb-0" style={{ color: "#865ddd" }}>Search For Candidates</h1>
            <p className="font-weight-bold" style={{ color: "#011F95" }}>
              Showing{" "}
              {props.getSearchReducer.sData
                ? props.getSearchReducer.sData.users &&
                  props.getSearchReducer.sData.users.length > 0
                  ? props.getSearchReducer.sData.users.length
                  : ""
                : ""}
              {" "} Candidates
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
            {
                item.length>0?item.map((user, i) => (
                  <div className="row shadow p-2 recr-user-info-main mb-5 mr-1 mt-2 ml-1 home-hover-effect">
                    <div className="col-md-12 text-right">
                      {
                        user.favourite == 0 ?
                          <span title="Add to favorites"><i class="fal fa-heart fa-1x" onClick={(e) => newAddtoFav(user, i)}></i></span>
                          
                          :
                          <span title="Remove from favourites"><i class="fas fa-heart fa-1x text-danger" onClick={(e) => newAddtoFav(user, i)}></i></span>
                      }
                    </div>
                    <Link to={`/SearchApplicantsProfile?id=${user.id}`} className="link-tag-home">
                      <div className="row">
                        <div className="col-lg-3 col-md-4 col-8">
                          {/* <button onClick={()=>console.log(user.picture)}>Click me</button> */}
                          {user.picture !== "http://api.cvvlogs.com/cv-tube/api.v.1/user/"? <img 
                          src={user.picture !== null && user.picture !== undefined 
                          ? user.picture : ""} 
                          height="130px" width="70%" 
                          style={{ objectFit: "cover", borderRadius: "50%" }} 
                          className="mt-2" /> :<i className="far fa-user fa-7x ml-4" style={{ color: "lightgray" }}></i>}
                          
                        </div>
                        <div className="col-md-6">
                          <h1 className="user-name-recr m-0 p-0">{user.name !== null && user.name !== undefined ? user.name : ""}</h1>
                          <p className="user-loc-recr m-0 p-0">{user.city !== null && user.city !== undefined ? user.city : ""} , {user.state !== null && user.state !== undefined ? user.state : ""}</p>
                          <h3 className="key-skills-recr-applicants m-0 p-0">
                            Key Skills
                          </h3>
                          <p className="userskills-appli m-0 p-0">
                            {user.skills && user.skills.length > 0 ?
                              user.skills.map(sk => (
                                <>
                                  {sk} ,
                                </>
                              )) : "no skills"
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
              :
            <p>no candidates</p>
            
            }
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
          props.getSearchReducer.loading==false?<FullPageLoader/>:""
        }
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  getSearchReducer: state.getSearchReducer,
  
});

const mapDispatchToProps = (dispatch) => ({
  // getSearch: (userId) => dispatch(getSearch(userId)),
  createAddtofavsearch: (userId, id) =>
    dispatch(createAddtofavsearch(userId, id)),
    getSearch: (userId) => dispatch(getSearch(userId)),
    createSearch: (userId,keyword,skill,state,ind,exp) =>
      dispatch(createSearch(userId,keyword,skill,state,ind,exp)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsLogin);

