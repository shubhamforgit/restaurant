import axios from "axios";


const loginURL = "https://food-app-timesinternet.herokuapp.com/api/staff/login"
const uploadCouponImageURL = "https://food-app-timesinternet.herokuapp.com/api/staff/coupon/image"
const uploadCouponURL = "https://food-app-timesinternet.herokuapp.com/api/staff/coupon"

export function logError(message) {
    console.log("Error! "+ message)
}

export function logIn(email, password, successCB, failureCB) {
    const body = { email, password }
    axios.post(loginURL, body)
        .then(successCB)
        .catch(logError("Login Failed!"))
}

export function uploadImage(formData, successCB, failureCB) {
    axios.post(uploadCouponImageURL, formData)
        .then(successCB)
        .catch(logError("Image Upload Failed!"))
}

export function uploadCoupon(postCoupon, successCB, failureCB) {
    axios.post(uploadCouponURL, postCoupon)
        .then(successCB)
        .catch(logError("Coupon Upload Failed!"))
}
