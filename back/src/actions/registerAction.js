// const config = require('../helpers/config.json');
// // export const getProfessional = () => {
// //     return (dispatch) => {
// //         /// get request
// //         fetch(`${config['baseUrl']}/user/edit_professional_detail.php`, {
// //             method: 'GET',
// //             headers: { 'Content-Type': 'application/json',"auth_id":"215E/LqrKva/mvrc", },
// //             auth_id:"215E/LqrKva/mvrc",
// //             // body: JSON.stringify({
// //             //     "data":{
// //             //         "company_url": companyUrl,
// //             //         "email": email,
// //             //         "password": password
// //             //     }
// //             // })
// //         }).then(res => res.json()).then((response) => {
// //             const professional = response.data

// //             // console.log("kkkkk", response);
// //             dispatch({
// //                 type: "GET_PROFESSIONAL",
// //                 professional: professional,
// //                 professionalResponse: "got it"
// //             });
// //         }).catch((error) => {
// //             console.log("error", error);
// //             dispatch({
// //                 type: "GET_PROFESSIONAL",
// //                 professional: {},
// //                 professionalResponse: null
// //             });
// //             // alert("Please Check Your Internet Connection...")
// //         })

// //     }


// // }


// export const createRegister = (first_name,last_name,email,number,password) => {
//     console.log(first_name,last_name,email,number,password)
//     return (dispatch) => {
//         dispatch({
//             type: "REGISTER_RESET",
//         });
//         // var data = 
//         //     {
//         //         "first_name": first_name,
//         //         "last_name": last_name,
//         //         "email": email,
//         //         "number": number,
//         //         "password":password,
//         //     }
//         // ;
//         // console.log(data)
//         /// post request
//         fetch(`${config['baseUrl']}/user/signup.php`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 "first_name": first_name,
//                 "last_name": last_name,
//                 "email": email,
//                 "number": number,
//                 "password":password,

//             })
//         }).then(res => {
//             console.log("res aqib", res)
//             if(res.status !== 200){
//                 alert("Some thing went wrong...");
//             }
//             return res.json();
//         }).then((response) => {
//             console.log("pppppp", response);
//             dispatch({
//                 type: "REGISTER_SUCCESS",
//                 registerResponse: response,

//             });
//                 window.location="/personaldetails"

//         }).catch((error) => {
//             console.log(error)
//             dispatch({
//                 type: "REGISTER_FAIL",
//                 registerResponse: "creation failed",
//                 //pageName: PGN.COLORS_PAGE_NAME
//             });
//             alert("Please Check Your Internet Connection...")
//         })
//     }
// }




const config = require('.././helpers/config.json');
// import Axios from "axios";
//////////////////////////////////////////////////////////////////////////////////////////////
/// README: SECTION 1 => HANDLE THE AUTH
///
export const createRegister = (first_name,last_name,company_name,email,number,password) => {
    //const { userName, password } = credentials;
    return (dispatch) => {
        /// reset any auth messages
        dispatch({
            type: "RESET_REGISTER_MESSAGE",
            loading: false,
        });
        // var data={
        //     "device_token":localStorage.getItem("dToken"),
        //     "name": `${first_name} ${last_name}`,
        //     "company_name": company_name,
        //     "email": email,
        //     "number": `+1${number}`,
        //     "password": password,
        // }
        // console.log("ooooo", first_name+" "+last_name,company_name,email,`+1${number}`,password,localStorage.getItem("dToken"));
        // console.log("ffffff",data);
        fetch(`https://api.cvvlogs.com/cv-tube/api.v.2/recruiter/web/signup.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "device_token":localStorage.getItem("dToken"),
                "name": `${first_name} ${last_name}`,
                "company_name": company_name,
                "email": email,
                "number": `+1${number}`,
                "password": password,

            })
        }).then(res => {
            console.log("res aqib", res)
            // if (res.status !== 200) {
            //     alert("EMAIL OR NUMBER ALREADY REGISTERED");
            // }
            return res.json();
        }).then((response) => {
            console.log("data", response)
            if (response.status == 500) {
                alert("EMAIL OR NUMBER ALREADY REGISTERED")
            }
            const auth_id = response.data.auth_id;
            const empId = response.data.id;
            const first_name=response.data.company_name.split(" ")[0]

            // console.log(auth_id, empId);
            // console.log("ffff",respone.data)
            dispatch({
                type: "REGISTER_IN",
                authError: null,
                auth_id,
                employee_id: empId,
                authMessage: "Signing you in...",
                loading: true,
                // if(this.props.auth.authToken!==null){
                // this.props.history.push("/")
                // }
            });
            if (auth_id !== "" && auth_id !== null && auth_id !== undefined && response.status !== 500) {
                window.location = "/otp"
                // personaldetails
            }
            localStorage.setItem("auth_id1", auth_id)
            localStorage.setItem("name", first_name)
            // window.location.reload(false)
        }).catch((error) => {
            // alert("Something went wrong...")
            const authError = JSON.stringify(error)
            console.log(authError);
            dispatch({
                type: "REGISTER_IN",
                authError,
                auth_id: null,
                employee_id: null,
                authMessage: "Error occurred in signing in!",
                loading: true,
            });
        })
    };
}

// export const signUp = (credentials) => {
//     const { userName, password } = credentials;
//     return (dispatch) => {
//         /// reset any auth messages
//         dispatch({
//             type: "RESET_AUTH_MESSAGE",
//         });

//         /// post request
//         Axios.get(`${config['baseUrl']}/api/user/signup`, {
//             "userName": userName,
//             "password": password
//         }).then((response) => {
//             const authToken = response.data["token"];
//             dispatch({
//                 type: "SIGN_UP",
//                 authError: null,
//                 authToken,
//                 authMessage: "Signing you up..."
//             });
//         }).catch((error) => {
//             const authError = JSON.stringify(error)
//             dispatch({
//                 type: "SIGN_UP",
//                 authError,
//                 authToken: null,
//                 authMessage: "Error occurred in signing up!"
//             });
//         })
//     }
// }

// export const signOut = (props) => {
//     localStorage.removeItem('persist:root');
//     //  props.history.push("/login")
//     window.location = "/"
//     // window.open("/")
//     return {
//         type: "SIGN_OUT",
//     };
// };

// export const resetAuthMessage = () => {
//     return {
//         type: "RESET_AUTH_MESSAGE",
//     };
// };