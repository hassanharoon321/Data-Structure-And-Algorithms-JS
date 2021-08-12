import React from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../Components/Footer/Footer";
import Nav2 from "../../Components/Nav2/Nav2";

function AboutUs() {
  return (
    <>
      <Nav2 />
      <div>
        <div className="container-fluid about-us-image"></div>
        <div className="container mt-5">
          <h1 className="about-head">About Us</h1>
          <p>
            Welcome to CvVlogs a new era of recruitment. Job search and
            recruitment is often a time consuming and stressful experience. To
            solve this issue we have developed the world’s first dedicated video
            resume platform.
          </p>
          <p>In a rapidly changing environment,standing out in the crowd is difficult, and so we created this unique portal.</p>
          <p>Cvvlogs is the first and only online dedicated video resume platform where job seekers can upload a video resume to showcase their personalities and communication skills to get noticed by recruiters and get hired to pursue their dream careers.</p>
          <p>This unique platform allows  the jobseekers to show their personality and strengths on camera rather than being judged by a written resume.</p>
          <p>Our platform also makes it easier for recruiters to browse through our extensive video library of candidates to save time and find quality applicants by viewing, shortlisting and hiring them with ease and efficiency.</p>
          <p>So if you are to ready to experience this efficient form of recruitment, then please reach out to one of our team members to find out how we can assist and support you.</p>
          <h1 className="about-head mt-5">Our Mission</h1>
          <p className="mb-5">
            Our mission is to change the landscape of recruitment with our
            unique, dynamic and reliable video platform that allows employers
            and candidates to connect globally with efficiency and transparency.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
