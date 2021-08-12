const config = require('../helpers/config.json');
export const getEditJobData = (userId,id) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/edit_job_get.php?job_id=${id}`, {
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
            const editjob = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_EDITJOB",
                editjob: editjob,
                editjobResponse: "got it",
                loading:true,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_EDITJOB",
                editjob: {},
                editjobResponse: null,
                loading:true,
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}


export const editJob = (userId,id,job_title,work_location,work_location_city,job_description,skill_by_industry,functional_area,
    required_work_level,curr_type,salary_type,salary_min,salary_max,experience_level,
    skills,international_recruiting) => {
    // console.log(userId,id,job_title,work_location,work_location_city,job_description,skill_by_industry,functional_area,
    //     required_work_level,curr_type,salary_type,salary_min,salary_max,experience_level,
    //     skills,international_recruiting)

    var data={
        "job_id":id!==null?Number(id):id,
        "job_title":job_title,
        "work_location":work_location!==null?Number(work_location):work_location,
        "work_location_city":work_location_city,
        "job_description":job_description,
        "skill_by_industry":skill_by_industry!==null?Number(skill_by_industry):skill_by_industry,
        "functional_area":functional_area!==null?Number(functional_area):functional_area,
        "required_work_level":required_work_level!==null?Number(required_work_level):required_work_level,
        "curr_type":curr_type,
        "salary_type":salary_type!==null?Number(salary_type):salary_type,
        "salary_min":salary_min,
        "salary_max":salary_max,
        "experience_level":experience_level!==null?Number(experience_level):experience_level,
        "skills":skills,
        "international_recruiting":international_recruiting
    }
    console.log("data",data)
    return (dispatch) => {
        dispatch({
            type: "EDITJOB_RESET",
            loading:false,
        });
        fetch(`${config['baseUrl']}/web/edit_job_post.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "job_id":id!==null?Number(id):id,
                "job_title":job_title,
                "work_location":work_location!==null?Number(work_location):work_location,
                "work_location_city":work_location_city,
                "job_description":job_description,
                "skill_by_industry":skill_by_industry!==null?Number(skill_by_industry):skill_by_industry,
                "functional_area":functional_area!==null?Number(functional_area):functional_area,
                "required_work_level":required_work_level!==null?Number(required_work_level):required_work_level,
                "curr_type":curr_type,
                "salary_type":salary_type!==null?Number(salary_type):salary_type,
                "salary_min":salary_min,
                "salary_max":salary_max,
                "experience_level":experience_level!==null?Number(experience_level):experience_level,
                "skills":skills,
                "international_recruiting":international_recruiting


            })
        }).then((response) => {
            console.log("pppppp", response.json());
            if(response.status==404){
                alert("Please fill out your profile information.")
            }
            dispatch({
                type: "EDITJOB_SUCCESS",
                editjobResponse: response,
                loading:true,

            });
                window.location=`/PostedJobsDesc?id=${id}`
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "EDITJOB_FAIL",
                editjobResponse: "creation failed",
                loading:true,
                //pageName: PGN.COLORS_PAGE_NAME
            });
            // alert("Please Check Your Internet Connection...")
        })
    }
}


