import React , {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBanner2 from '../../Components/Banner';
import Footer from '../../Components/Footer/Footer';
import Nav2 from '../../Components/Nav2/Nav2';
import { getWhatWeDo } from "../../actions//whatwedoAction";
import { connect } from "react-redux";
import FullPageLoader from "../../Components/fullpageloader/fullPageLoader"
import ReactPlayer from 'react-player'

function WhatWeDo(props) {
    useEffect(() => {
        loadGetSearch(localStorage.getItem("auth_id1"));
      },[]);
    
      const loadGetSearch = async (userId) => {
        await props.getWhatWeDo(userId);
        // return null;
      };
    const vidLink = "http://api.cvvlogs.com/cv-tube/recruiter.mp4";
    return (
        <>
        <Nav2/>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-12">
                        <h1 className="font-weight-bold" style={{ color: "#865ddd" }}>How it works</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <HomeBanner2 />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <ReactPlayer url={props.whatwedoReducer.whatwedo.url!==null&&
                            props.whatwedoReducer.whatwedo.url!==undefined&&
                            props.whatwedoReducer.whatwedo.url!==""?
                            props.whatwedoReducer.whatwedo.url:vidLink} playing={true} controls className='react-player h-75' />
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}



const mapStateToProps = (state) => ({
    whatwedoReducer: state.whatwedoReducer,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getWhatWeDo: (userId) => dispatch(getWhatWeDo(userId)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(WhatWeDo);
