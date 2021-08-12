import React from 'react';
import { createOtp } from "../../actions/otpAction"
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FullPageLoader from '../../Components/fullpageloader/fullPageLoader';

function Otp(props) {
    const [code, setcode] = useState("")
    var history = useHistory()
    const AddOtp = async () => {
        await props.createOtp(localStorage.getItem("auth_id1"), code)
        // if(props.otpReducer.pushed==200){
        //    await history.push("/personaldetails");
        // }
        // console.log("ggg",props.otpReducer.pushed)
    }
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-12">
                    <h1 className="text-center font-weight-bold" style={{ color: "#865ddd" }}>Enter OTP</h1>
                    <p style={{ color: "#011F95" }} className="font-weight-bold text-center">Check Your Phone For  OTP</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 shadow p-5" style={{ borderRadius: "15px" }}>
                    <div>
                        <label>Enter OTP</label>
                        <input onChange={(e) => setcode(e.target.value)} type="number" className="form-control mb-5" placeholder="Enter the 4 digit OTP" />
                        <div className="text-center">
                            <button style={{ background: "#865ddd", color: "#fff" }} onClick={() => AddOtp()} className="btn btn-primar w-50 font-weight-bold">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            {
                props.otpReducer.loading == true ? <FullPageLoader /> : null
            }
        </div>
    )
}




const mapStateToProps = state => ({
    otpReducer: state.otpReducer,

})


const mapDispatchToProps = dispatch => ({
    createOtp: (userId, code) => dispatch(createOtp(userId, code)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Otp)
