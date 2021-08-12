const config = require('../helpers/config.json');
export const getCreateJobData = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/post_job_get.php`, {
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
            const getcreatejob = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_CREATEJOBS",
                getcreatejob: getcreatejob,
                getcreatejobResponse: "got it",
                loading:true,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_CREATEJOBS",
                getcreatejob: {},
                getcreatejobResponse: null,
                loading:true,
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}


export const createJob = (userId,job_title,work_location,work_location_city,job_description,
    skill_by_industry,functional_area,required_work_level,curr_type,salary_type,salary_min,salary_max
    ,experience_level,checkId,international_recruiting) => {
    console.log(userId,job_title,work_location,work_location_city,job_description,
        skill_by_industry,functional_area,required_work_level,curr_type,salary_type,salary_min,salary_max
        ,experience_level,checkId,international_recruiting)
    return (dispatch) => {
        dispatch({
            type: "CREATEJOBS_RESET",
            loading:false,
        });
        fetch(`${config['baseUrl']}/web/post_job_post.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "job_title":job_title,
                "work_location":work_location!==null?Number(work_location):work_location,
                "work_location_city":work_location_city!==null?Number(work_location_city):work_location_city,
                "job_description":job_description,
                "skill_by_industry":skill_by_industry!==null?Number(skill_by_industry):skill_by_industry,
                "functional_area":functional_area!==null?Number(functional_area):functional_area,
                "required_work_level":required_work_level!==null?Number(required_work_level):required_work_level,
                "curr_type":curr_type!==null?Number(curr_type):curr_type,
                "salary_type":salary_type!==null?Number(salary_type):salary_type,
                "salary_min":salary_min,
                "salary_max":salary_max,
                "experience_level":experience_level!==null?Number(experience_level):experience_level,
                "skills":checkId,
                "international_recruiting":international_recruiting!==null?Number(international_recruiting):international_recruiting,

            })
        }).then(res => {
            console.log("res aqib", res)
            if(res.status !== 200){
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            if(response.status==404){
                alert("Please fill out your profile information.")
            }
            dispatch({
                type: "CREATEJOBS_SUCCESS",
                getcreatejobResponse: response,
                loading:true,

            });
                window.location="/dashboard"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "CREATEJOBS_FAIL",
                getcreatejobResponse: "creation failed",
                loading:true,
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}


