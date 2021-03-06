const config = require('../helpers/config.json');
export const getCompanyInfo = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/company_info.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id":`${userId}` },
            // body: JSON.stringify({
            //     "data":{
            //         "company_url": companyUrl,
            //         "email": email,
            //         "password": password
            //     }
            // })
        }).then(res => res.json()).then((response) => {
            const companyinfo = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_COMPANYINFO",
                companyinfo: companyinfo,
                companyinfoResponse: "got it",
                loading:true
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_COMPANYINFO",
                companyinfo: {},
                companyinfoResponse: null,
                loading:true
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

