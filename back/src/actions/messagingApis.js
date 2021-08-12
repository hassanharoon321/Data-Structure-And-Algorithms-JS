const config = require('../helpers/config.json');
export const getAllChats = (userId) => {
    var id=localStorage.getItem("auth_id1")
    return fetch(`${config['baseUrl']}/web/all_chats.php`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id":`${id}` },
            
        })
}

export const getSpecificChat = (chatId) => {
    var id=localStorage.getItem("auth_id1")
    //https://api.cvvlogs.com/cv-tube/api.v.2/recruiter/web/all_messages.php?chat_id=44
    return fetch(`${config['baseUrl']}/web/all_messages.php?chat_id=${chatId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',"auth_id":`${id}` },
            
        })
}

export const sendMessages = (chatId, reciever,message) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    console.log("tttttt",chatId,reciever,);
    var id=localStorage.getItem("auth_id1")
    return fetch(`${config['baseUrl']}/web/message.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id":`${id}` },
            body: JSON.stringify({

                "chat_id": chatId,
                "reciever": reciever,
                "message":message

            })
        })
            
}


export const reportMesage = (chatId) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    var id=localStorage.getItem("auth_id1")
    return fetch(`${config['baseUrl']}/web/report.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id":`${id}` },
            body: JSON.stringify({

                "chat_id": chatId,

            })
        })
            
}
export const deleteMessage = (chatId) => {
    // const[loader,showLoader,hideLoader]=useFullPageLoader()
    //const { userName, password } = credentials;
    var id=localStorage.getItem("auth_id1")
    return fetch(`${config['baseUrl']}/web/delete_chat.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',"auth_id":`${id}` },
            body: JSON.stringify({

                "chat_id": chatId,

            })
        })
            
}