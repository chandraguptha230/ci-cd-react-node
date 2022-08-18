import {SET_DATA, SET_MESSAGE} from "./types";

import CrudService from "../../services/http-api/crud.service";

//Roles Actions
export const createRole = data => async dispatch => {
  return await CrudService.createRole(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREAT ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getRoles = () => async dispatch => {
  return await CrudService.getRoles().then(
    res => {
      const {data} = res.data;
      console.log("GET RESPONSE");
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getRoleById = id => async dispatch => {
  return await CrudService.getRoleById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateRoleById = (id, data) => async dispatch => {
  return await CrudService.updateRoleById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteRoleById = id => async dispatch => {
  return await CrudService.deleteRoleById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Users Actions
export const createUser = data => async dispatch => {
  return await CrudService.createUser(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      dispatch(getUsers());
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getUsers = () => async dispatch => {
  return await CrudService.getUsers().then(
    res => {
      let {data} = res.data;
      dispatch({type: SET_DATA, payload: {name: "users", data: data}});
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error.response);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getUserById = id => async dispatch => {
  return await CrudService.getUserById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateUserById = (id, data) => async dispatch => {
  return await CrudService.updateUserById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      dispatch(getUsers());
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error.response);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteUserById = id => async dispatch => {
  return await CrudService.deleteUserById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      dispatch(getUsers());
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};
//Customer actions
export const createCustomer = data => async dispatch => {
  return await CrudService.createCustomer(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getCustomers = () => async dispatch => {
  return await CrudService.getCustomers().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getCustomerById = id => async dispatch => {
  return await CrudService.getCustomerById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateCustomerById = (id, data) => async dispatch => {
  return await CrudService.updateCustomerById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteCustomerById = id => async dispatch => {
  return await CrudService.deleteCustomerById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Purchases actions
export const createPurchases = data => async dispatch => {
  return await CrudService.createPurchases(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPurchases = () => async dispatch => {
  return await CrudService.getPurchases().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPurchaseById = id => async dispatch => {
  return await CrudService.getPurchaseById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updatePurchaseById = (id, data) => async dispatch => {
  return await CrudService.updatePurchaseById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deletePurchaseById = id => async dispatch => {
  return await CrudService.deletePurchaseById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Product Actions
export const createProduct = data => async dispatch => {
  return await CrudService.createProduct(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getProducts = () => async dispatch => {
  return await CrudService.getProducts().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getProductById = id => async dispatch => {
  return await CrudService.getProductById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateProductById = (id, data) => async dispatch => {
  return await CrudService.updateProductById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteProductById = id => async dispatch => {
  return await CrudService.deleteProductById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Payment actions
export const createPayment = data => async dispatch => {
  return await CrudService.createPayment(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPayments = () => async dispatch => {
  return await CrudService.getPayments().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPaymentById = id => async dispatch => {
  return await CrudService.getPaymentById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updatePaymentById = (id, data) => async dispatch => {
  return await CrudService.updatePaymentById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deletePaymentById = id => async dispatch => {
  return await CrudService.deletePaymentById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Pricing actions

export const createPricing = data => async dispatch => {
  return await CrudService.createPricing(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPricings = () => async dispatch => {
  return await CrudService.getPricings().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getPricingById = id => async dispatch => {
  return await CrudService.getPricingById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updatePricingById = (id, data) => async dispatch => {
  return await CrudService.updatePricingById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deletePricingById = id => async dispatch => {
  return await CrudService.deletePricingById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Order actions

export const createOrder = data => async dispatch => {
  return await CrudService.createOrder(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getOrders = () => async dispatch => {
  return await CrudService.getOrders().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getOrderById = id => async dispatch => {
  return await CrudService.getOrderById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateOrderById = (id, data) => async dispatch => {
  return await CrudService.updateOrderById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteOrderById = id => async dispatch => {
  return await CrudService.deleteOrderById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Order_items actions

export const createOrder_item = data => async dispatch => {
  return await CrudService.createOrder_item(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getOrder_items = () => async dispatch => {
  return await CrudService.getOrder_items().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getOrder_itemById = id => async dispatch => {
  return await CrudService.getOrder_itemById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateOrder_itemById = (id, data) => async dispatch => {
  return await CrudService.updateOrder_itemById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteOrder_itemById = id => async dispatch => {
  return await CrudService.deleteOrder_itemById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Notification actions

export const createNotification = data => async dispatch => {
  return await CrudService.createNotification(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getNotifications = () => async dispatch => {
  return await CrudService.getNotifications().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getNotificationById = id => async dispatch => {
  return await CrudService.getNotificationById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateNotificationById = (id, data) => async dispatch => {
  return await CrudService.updateNotificationById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteNotificationById = id => async dispatch => {
  return await CrudService.deleteNotificationById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Inventory actions

export const createInventory = data => async dispatch => {
  return await CrudService.createInventory(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getInventories = () => async dispatch => {
  return await CrudService.getInventories().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getInventoryById = id => async dispatch => {
  return await CrudService.getInventoryById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateInventoryById = (id, data) => async dispatch => {
  return await CrudService.updateInventoryById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteInventoryById = id => async dispatch => {
  return await CrudService.deleteInventoryById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Category actions
export const createCategory = data => async dispatch => {
  return await CrudService.createCategory(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getCategories = () => async dispatch => {
  return await CrudService.getCategories().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getCategoryById = id => async dispatch => {
  return await CrudService.getCategoryById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateCategoryById = (id, data) => async dispatch => {
  return await CrudService.updateCategoryById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteCategoryById = id => async dispatch => {
  return await CrudService.deleteCategoryById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

//Business Actions

export const createBusiness = data => async dispatch => {
  return await CrudService.createBusiness(data).then(
    ({data}) => {
      console.log("Create RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("CREATE ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getBusinesses = () => async dispatch => {
  return await CrudService.getBusinesses().then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const getBusinessById = id => async dispatch => {
  return await CrudService.getBusinessById(id).then(
    ({data}) => {
      console.log("GET RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("GET ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const updateBusinessById = (id, data) => async dispatch => {
  return await CrudService.updateBusinessById(id, data).then(
    ({data}) => {
      console.log("Update RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Update ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};

export const deleteBusinessById = id => async dispatch => {
  return await CrudService.deleteBusinessById(id).then(
    ({data}) => {
      console.log("Delete RESPONSE");
      console.log(data);
      return Promise.resolve(data);
    },
    error => {
      console.log("Delete ERROR");
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject(error);
    }
  );
};
