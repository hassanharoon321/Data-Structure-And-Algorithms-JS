const config = require('../helpers/config.json');

export const createForgetPassword = (email) => {
    return (dispatch) => {
        dispatch({
            type: "FORGETPASSWORD_RESET",
            loading:true
        });
        // var data = [
        //     {
        //         "email": email,
        //     }
        // ];
        // console.log(data)
        /// post request
        fetch(`${config['baseUrl']}/web/forget_password.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": email,
            })
        }).then((response) => {

            console.log("pppppp", response.json());
            dispatch({
                type: "FORGETPASSWORD_SUCCESS",
                forgetPasswordResponse: response,
                loading:false

            });
            alert("Email sent successfully")
            window.location = "/"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "FORGETPASSWORD_FAIL",
                forgetPasswordResponse: "creation failed",
                loading:false
            });
            // alert("Please Check Your Internet Connection...")
        })
    }
}

