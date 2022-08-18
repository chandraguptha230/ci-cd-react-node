import axios from "axios";
import constant from '../../utils/commonData'
import httpHelpers from "./auth-header";


const register = (values) => {
  return axios.post(constant.apiUrl + "/auth/signup", values);
};

const login = (values) => {
  return axios
    .post(constant.apiUrl + "/auth/signin", values)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("idToken", response.data.accessToken);
      }
      if (response.data.business) {
        localStorage.setItem("business", response.data.business);
      }
      return response.data;
    });
};

const logout = () => {
    return axios.get(constant.apiUrl + "/auth/logout", { headers: httpHelpers.authHeader() });
};


const getAuthUser = () => {
  return axios.get(constant.apiUrl + "/auth", { headers: httpHelpers.authHeader() });
};

const suspend = (id) => {
  return axios.get(constant.apiUrl + `/auth/suspend/${id}`, { headers: httpHelpers.authHeader() });
};


export default {
  suspend,
  register,
  login,
  logout,
  getAuthUser,
};