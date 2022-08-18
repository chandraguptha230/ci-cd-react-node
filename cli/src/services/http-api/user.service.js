import axios from "axios";
import constant from '../utils/commonData'

const createSupport = (data, location) => {
  return axios.post(constant.apiUrl + `/support/details`, { data, location});
};

const validateSupport = (data, location) => {
  return axios.post(constant.apiUrl + `/support/validate`, { data, location});
};

const createLeader = (data, location) => {
  return axios.post(constant.apiUrl + `/auth/signup`, { data, location});
};

const uploadFile = (data, type) => {
  return axios.post(constant.apiUrl + `/fileupload/${type}`, data);
}


const getAllPosts = (data) => {
  return axios.get(constant.apiUrl + `/allPosts`);
}

const getOptions = (data) => {
  return axios.get(constant.apiUrl + `/options`);
}




















const pinToMap = (data, id) => {
  return axios.post(constant.apiUrl + `/pinLocation/${id}`, data);
};

const searchCoordinates = (loc) => {
  return axios.get(constant.apiUrl + `/location/search/${loc.lat}/${loc.lng}`);
};

const updateAddress = ({id, address}) => {

  return axios.post(constant.apiUrl + `/update/address/${id}`, { address: address});
};


const getBarangies = (val) => {
  return axios.get(constant.apiUrl + `/psgc/barangay/${val}`);
};

const getCityMun = (val) => {
  return axios.get(constant.apiUrl + `/psgc/citymun/${val}`);
};

const getProvince = (val) => {
  return axios.get(constant.apiUrl + `/psgc/province/${val}`);
};

const getRegions = (val) => {
  return axios.get(constant.apiUrl + `/psgc/regions`);
};

const getSupportersCount = (val) => {
  return axios.get(constant.apiUrl + `/get/supporters-count`);
};




export default {
    getBarangies,
    createSupport,
    pinToMap,
    searchCoordinates,
    updateAddress,
    getCityMun,
    getProvince,
    getSupportersCount,
    createLeader,
    uploadFile,
    getRegions,
    getAllPosts,
    getOptions,
    validateSupport
};