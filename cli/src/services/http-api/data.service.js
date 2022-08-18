import axios from "axios";
import constant from '../../utils/commonData'
// import authHeader from "./auth-header";

const getData = () => {
  return axios.get(constant.apiUrl + "/data");
};  



const uploadFile = (data, type) => {
  return axios.post(constant.apiUrl + `/fileupload/${type}`, data);
}



export default {
    getData,
    uploadFile
};