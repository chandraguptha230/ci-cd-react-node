import axios from "axios";
import authHeader from "./auth-header";
import constant from '../utils/commonData'





//Post


//Patch


//Get
const getUsers = () => {
  return axios.get(constant.apiUrl + "/users", { headers: authHeader() });
};


//Delete


export default {
 
  getMobtels
};