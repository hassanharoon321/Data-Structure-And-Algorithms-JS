const config = require('../helpers/config.json');
export const getResetPass = (verid) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/reset-pass.php?verid=${verid}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const reset = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_RESET",
                reset: reset,
                resetResponse: "got it"
            });
            alert("successfully updated")
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_RESET",
                reset: {},
                resetResponse: null
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

export const createReset = (id, new_pass) => {
    console.log(id, new_pass)
    return (dispatch) => {
        dispatch({
            type: "RESET_RESET",
        });
        var data =
        {
            "id": id !== null ? Number(id) : id,
            "new_pass": new_pass

        }
            ;
        console.log(data)
        /// post request
        fetch(`${config['baseUrl']}/web/reset_pass_post.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": id !== null ? Number(id) : id,
                "new_pass": new_pass
            })
        }).then((response) => {
            console.log("pppppp", response.json());
            const sData = response.data;
            dispatch({
                type: "RESET_SUCCESS",
                resetResponse: response,

            });
            // window.location = "/"

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "RESETL_FAIL",
                resetResponse: "creation failed",
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

