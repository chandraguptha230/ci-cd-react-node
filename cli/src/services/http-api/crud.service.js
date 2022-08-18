import axios from 'axios';

import constant from '../../utils/commonData';

import httpHelpers from './auth-header';

//Roles
const createRole = data => {
  return axios.post(constant.apiUrl + `/roles`, data);
};

const getRoles = () => {
  return axios.get(constant.apiUrl + `/roles`);
};

const getRoleById = id => {
  return axios.get(constant.apiUrl + `/role/${id}`);
};

const updateRoleById = (id, data) => {
  return axios.patch(constant.apiUrl + `/role/${id}`, data);
};

const deleteRoleById = id => {
  return axios.delete(constant.apiUrl + `/role/${id}`);
};

//Users

const createUser = data => {
  return axios.post(constant.apiUrl + '/user', data, {
    headers: httpHelpers.authHeader(),
  });
};

const getUsers = () => {
  return axios.get(constant.apiUrl + `/users`, {
    headers: httpHelpers.authHeader(),
  });
};

const getUserById = id => {
  return axios.get(constant.apiUrl + `/user/${id}`, {
    headers: httpHelpers.authHeader(),
  });
};

const updateUserById = (id, data) => {
  return axios.patch(constant.apiUrl + `/user/${id}`, data, {
    headers: httpHelpers.authHeader(),
  });
};

const deleteUserById = id => {
  return axios.delete(constant.apiUrl + `/user/${id}`, {
    headers: httpHelpers.authHeader(),
  });
};

//Customers
const createCustomer = data => {
  return axios.post(constant.apiUrl + '/customer', data);
};

const getCustomers = () => {
  return axios.get(constant.apiUrl + '/customers');
};

const getCustomerById = id => {
  return axios.get(constant.apiUrl + `/customer/${id}`);
};

const updateCustomerById = (id, data) => {
  return axios.patch(constant.apiUrl + `/customer/${id}`, data);
};

const deleteCustomerById = id => {
  return axios.delete(constant.apiUrl + `/customer/${id}`);
};

//Purchases
const createPurchases = data => {
  return axios.post(constant.apiUrl + '/purchases', data);
};

const getPurchases = () => {
  return axios.get(constant.apiUrl + '/purchases');
};

const getPurchaseById = id => {
  return axios.get(constant.apiUrl + `/purchase/${id}`);
};

const updatePurchaseById = (id, data) => {
  return axios.patch(constant.apiUrl + `/purchase/${id}`, data);
};

const deletePurchaseById = id => {
  return axios.delete(constant.apiUrl + `/purchase/${id}`);
};

//Products
const createProduct = data => {
  return axios.post(constant.apiUrl + '/product', data);
};

const getProducts = () => {
  return axios.get(constant.apiUrl + '/products');
};

const getProductById = id => {
  return axios.get(constant.apiUrl + `/product/${id}`);
};

const updateProductById = (id, data) => {
  return axios.patch(constant.apiUrl + `/product/${id}`, data);
};

const deleteProductById = id => {
  return axios.delete(constant.apiUrl + `/product/${id}`);
};

//Payments
const createPayment = data => {
  return axios.post(constant.apiUrl + '/payment', data);
};

const getPayments = () => {
  return axios.get(constant.apiUrl + '/payments');
};

const getPaymentById = id => {
  return axios.get(constant.apiUrl + `/payment/${id}`);
};

const updatePaymentById = (id, data) => {
  return axios.patch(constant.apiUrl + `/payment/${id}`, data);
};

const deletePaymentById = id => {
  return axios.delete(constant.apiUrl + `/payment/${id}`);
};

//Pricings
const createPricing = data => {
  return axios.post(constant.apiUrl + '/pricing', data);
};

const getPricings = () => {
  return axios.get(constant.apiUrl + '/pricings');
};

const getPricingById = id => {
  return axios.get(constant.apiUrl + `/pricing/${id}`);
};

const updatePricingById = (id, data) => {
  return axios.patch(constant.apiUrl + `/pricing/${id}`, data);
};

const deletePricingById = id => {
  return axios.delete(constant.apiUrl + `/pricing/${id}`);
};

//Orders

const createOrder = data => {
  return axios.post(constant.apiUrl + '/order', data);
};

const getOrders = () => {
  return axios.get(constant.apiUrl + '/orders');
};

const getOrderById = id => {
  return axios.get(constant.apiUrl + `/order/${id}`);
};

const updateOrderById = (id, data) => {
  return axios.patch(constant.apiUrl + `/order/${id}`, data);
};

const deleteOrderById = id => {
  return axios.delete(constant.apiUrl + `/order/${id}`);
};

//Order_items

const createOrder_item = data => {
  return axios.post(constant.apiUrl + '/order_item', data);
};

const getOrder_items = () => {
  return axios.get(constant.apiUrl + '/order_items');
};

const getOrder_itemById = id => {
  return axios.get(constant.apiUrl + `/order_item/${id}`);
};

const updateOrder_itemById = (id, data) => {
  return axios.patch(constant.apiUrl + `/order_item/${id}`, data);
};

const deleteOrder_itemById = id => {
  return axios.delete(constant.apiUrl + `/order_item/${id}`);
};

//Notifications

const createNotification = data => {
  return axios.post(constant.apiUrl + '/notification', data);
};

const getNotifications = () => {
  return axios.get(constant.apiUrl + '/notifications');
};

const getNotificationById = id => {
  return axios.get(constant.apiUrl + `/notification/${id}`);
};

const updateNotificationById = (id, data) => {
  return axios.patch(constant.apiUrl + `/notification/${id}`, data);
};

const deleteNotificationById = id => {
  return axios.delete(constant.apiUrl + `/notification/${id}`);
};

//Inventories

const createInventory = data => {
  return axios.post(constant.apiUrl + '/inventory', data);
};

const getInventories = () => {
  return axios.get(constant.apiUrl + '/inventories');
};

const getInventoryById = id => {
  return axios.get(constant.apiUrl + `/inventory/${id}`);
};

const updateInventoryById = (id, data) => {
  return axios.patch(constant.apiUrl + `/inventory/${id}`, data);
};

const deleteInventoryById = id => {
  return axios.delete(constant.apiUrl + `/inventory/${id}`);
};

//Categories

const createCategory = data => {
  return axios.post(constant.apiUrl + '/category', data);
};

const getCategories = () => {
  return axios.get(constant.apiUrl + '/categories');
};

const getCategoryById = id => {
  return axios.get(constant.apiUrl + `/category/${id}`);
};

const updateCategoryById = (id, data) => {
  return axios.patch(constant.apiUrl + `/category/${id}`, data);
};

const deleteCategoryById = id => {
  return axios.delete(constant.apiUrl + `/category/${id}`);
};

//Business

const createBusiness = data => {
  return axios.post(constant.apiUrl + '/business', data);
};

const getBusinesses = () => {
  return axios.get(constant.apiUrl + '/businesses');
};

const getBusinessById = id => {
  return axios.get(constant.apiUrl + `/business/${id}`);
};

const updateBusinessById = (id, data) => {
  return axios.patch(constant.apiUrl + `/business/${id}`, data);
};

const deleteBusinessById = id => {
  return axios.delete(constant.apiUrl + `/business/${id}`);
};

export default {
  //Roles
  createRole,
  getRoles,
  getRoleById,
  updateRoleById,
  deleteRoleById,

  //Users
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,

  //Customers
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,

  //Purchases
  createPurchases,
  getPurchases,
  getPurchaseById,
  updatePurchaseById,
  deletePurchaseById,

  //Products
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,

  //Payments
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,

  //Pricings
  createPricing,
  getPricings,
  getPricingById,
  updatePricingById,
  deletePricingById,

  //Orders
  createOrder,
  getOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,

  //Order_items
  createOrder_item,
  getOrder_items,
  getOrder_itemById,
  updateOrder_itemById,
  deleteOrder_itemById,

  //Notifications
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,

  //Inventories
  createInventory,
  getInventories,
  getInventoryById,
  updateInventoryById,
  deleteInventoryById,

  //Categories
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,

  //Business
  createBusiness,
  getBusinesses,
  getBusinessById,
  updateBusinessById,
  deleteBusinessById,
};
