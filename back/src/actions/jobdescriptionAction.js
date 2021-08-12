const config = require('../helpers/config.json');
export const getJobDescription = (userId,id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/single_job.php?job_id=${id}`, {
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
            const jobdescription = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_JOBDESCRIPTION",
                jobdescription: jobdescription,
                jobdescriptionResponse: "got it",
                loading:true
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_JOBDESCRIPTION",
                jobdescription: {},
                jobdescriptionResponse: null,
                loading:true
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}

