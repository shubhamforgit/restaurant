import axios from "axios";


const loginURL = "https://food-app-timesinternet.herokuapp.com/api/staff/login"


export function logIn(email, password, successCB, failureCB) {
    const body = { email, password }
    axios.post(loginURL, body)
        .then(successCB)
        .catch(failureCB)
}