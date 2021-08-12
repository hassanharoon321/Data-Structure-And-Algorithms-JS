import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Otp from "./Pages/otp/otp";
import TermsAndCondition from "./Pages/TermsAndConditions/TermsAndCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CreateAJob from "./Pages/CreateAJob/CreateAJob";
import PostedJobs from "./Pages/PostedJobs/PostedJobs";
import PostedJobsDesc from "./Pages/PostedJobsDesc/PostedJobsDesc";
import YourJobs from "./Pages/YourJobs/YourJobs";
import Applicants from "./Pages/Applicants/Applicants";
import ApplicantsVideoCv from "./Pages/ApplicantsVideoCv/ApplicantsVideoCv";
import ApplicantsProfile from "./Pages/ApplicantsProfile/ApplicantsProfile";
import ReportUserModal from "./Pages/ReportUserModal/ReportUserModal";
import BuyPremiumAlert from "./Pages/BuyPremiumAlert/BuyPremiumAlert";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import EditCompanyProfile from "./Pages/EditCompanyProfile/EditCompanyProfile";
import PremiumPackages from "./Pages/PremiumPackages/PremiumPackages";
import Messaging from "./Pages/Messaging/Messaging";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import SearchJobs from "./Pages/searchPage"
import SearchResultsLogin from "./Pages/search/searchResult"
import SearchApplicantsProfile from "./Pages/ApplicantsProfile/searchApplicantProfile"
import ResetPassword from "./Pages/ResetPassword/ResetPassword"
import EditJob from "./Pages/CreateAJob/editjob"
import PremiumPackages2 from "./Pages/PremiumPackages/PremiumPackages2"
import firebase from "./helpers/firebase"
import React, { useEffect } from "react"
import Addtofav from "../src/Pages/search/addtofav"
import Zendesk from "react-zendesk";
import TermsLogin from "./Components/TermsLogin";
import Privacy from "./Components/Privacy";



const setting = {
  color: {
    theme: "#8A2BE2",
    
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help"
    }
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } }
    ]
  }
};
function App() {
    useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      // console.log("token",data)
      localStorage.setItem("dToken",data)
    }).catch(e=>{
      console.log("errorrrr",e)
    })
  })
  return (
    <>
     <Zendesk defer zendeskKey={'673870e5-9d61-4c2a-935c-a64ead66d356'} {...setting} onLoaded={() => console.log('is loaded')} />
    <Router>
					<Switch>
            {/* {
              localStorage.getItem("auth_id1")!==null&&
              localStorage.getItem("auth_id1")!==undefined&&
              localStorage.getItem("auth_id1")!==""?
              <Route path="/" exact component={Home} />
              :
<Route path="/" exact component={Login} />
            } */}
						<Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard" exact component={Home} />
            <Route path="/jobs" exact component={YourJobs} />
            <Route path="/whatwedo" exact component={WhatWeDo} />
            <Route path="/otp" exact component={Otp} />
            <Route path="/PostedJobs" exact component={PostedJobs} />
            <Route path="/PostedJobsDesc" exact component={PostedJobsDesc} />
            <Route path="/EditCompanyProfile" exact component={EditCompanyProfile} />
            <Route path="/CreateAJob" exact component={CreateAJob} />
            <Route path="/PremiumPackages" exact component={PremiumPackages} />
            <Route path="/PremiumPackage" exact component={PremiumPackages2} />
            <Route path="/forgetpassword" exact component={ForgetPassword} />
            <Route path="/terms-cond" exact component={TermsAndCondition} />
            <Route path="/priv-pol" exact component={PrivacyPolicy} />
            <Route path="/messages" exact component={Messaging} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/Applicants" exact component={Applicants} />
            <Route path="/ApplicantsVideoCv" exact component={ApplicantsVideoCv} />
            <Route path="/ApplicantsProfile" exact component={ApplicantsProfile} />
            <Route path="/SearchJobs" exact component={SearchJobs} />
            <Route path="/SearchResultsLogin" exact component={SearchResultsLogin} />
            <Route path="/SearchApplicantsProfile" exact component={SearchApplicantsProfile} />
            <Route path="/CompanyProfile" exact component={CompanyProfile} />
            <Route path="/ResetPassword" exact component={ResetPassword} />
            <Route path="/EditJob" exact component={EditJob} />
            <Route path="/Addtofav" exact component={Addtofav} />
            <Route path="/terms-login" exact component={TermsLogin} />
            <Route path="/privacy" exact component={Privacy} />
					</Switch>
				</Router>
        </>
  );
}

export default App;

