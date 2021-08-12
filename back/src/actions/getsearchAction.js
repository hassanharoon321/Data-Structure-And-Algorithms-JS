const config = require('../helpers/config.json');
export const getSearch = (userId) => {
    return (dispatch) => {
        /// get request
        fetch(`${config['baseUrl']}/web/search_data_get.php`, {
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
            const search = response.data

            // console.log("kkkkk", response);
            dispatch({
                type: "GET_SEARCH",
                search: search,
                searchResponse: "got it",
                loading:true,
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_SEARCH",
                search: {},
                searchResponse: null,
                loading:true,
            });
            // alert("Please Check Your Internet Connection...")
        })

    }


}








export const createSearch = (userId,keyword,skill,state,ind,exp) => {
    console.log(userId,keyword,skill,state,ind,exp)


    var data={
        "user":userId,
        "keyword":keyword,
        "skill":skill,
        "state":state,
        "ind":ind,
        "exp":exp,
    }
    console.log("ffff",data)
    return (dispatch) => {
        dispatch({
            type: "SEARCH_RESET",
            loading:false,
        });
        fetch(`${config['baseUrl']}/web/search.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
            body: JSON.stringify({
                "keyword":keyword,
                "skill":skill,
                "state":state,
                "ind":ind,
                "exp":exp,

            })
        }).then(res => {
            console.log("res aqib", res)
            if(res.status !== 200){
                alert("Some thing went wrong...");
            }
            return res.json();
        }).then((response) => {
            console.log("pppppp", response);
            const searchData=response.data
            console.log("search", searchData);
            dispatch({
                type: "SEARCH_SUCCESS",
                searchResponse: response,
                sData:searchData,
                loading:true,

            });
                // window.location="/SearchResultsLogin"
                   
        }).catch((error) => {
            console.log(error)
            dispatch({
                type: "SEARCH_FAIL",
                searchResponse: "creation failed",
                sData:{},
                loading:true,
                //pageName: PGN.COLORS_PAGE_NAME
            });
            alert("Please Check Your Internet Connection...")
        })
    }
}

export const newSearchFunc=(userId,keyword,skill,state,ind,exp)=>{
    return(
    fetch(`${config['baseUrl']}/web/search.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',"auth_id": `${userId}`, },
        body: JSON.stringify({
            "keyword":keyword,
            "skill":skill,
            "state":state,
            "ind":ind,
            "exp":exp,

        })
    })
    )
}


