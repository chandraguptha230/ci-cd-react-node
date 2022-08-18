//For expanding sidebar
import {
  // CREATE_CUSTOMER,
  // DELETE_CUSTOMER,
  // DELETE_LABEL_ITEM,
  GET_CUSTOMER_COUNTS,
  GET_CUSTOMERS_LIST,
  GET_LABELS_LIST,
  SET_CURRENT_CUSTOMER,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  // UPDATE_CUSTOMER,
  // UPDATE_CUSTOMER_LABEL,
  // UPDATE_LABEL_ITEM,
  // UPDATE_STARRED_STATUS,
} from './types';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import axios from 'axios';
import commonData from '../../utils/commonData';

//For expanding sidebar
export const toggleExpandSidebar = value => {
  return dispatch => {
    dispatch({
      type: TOGGLE_SIDEBAR_COLLAPSED,
      payload: value,
    });
  };
};

//For setting Filtertype
export const setFilterType = filterType => {
  return {
    type: SET_FILTER_TYPE,
    payload: filterType,
  };
};

//for getting labels list
export const getLabelsList = () => {
  return dispatch => {
    axios
      .get(`${commonData.apiUrl}/customers/labels`)
      .then(data => {
          dispatch({ type: GET_LABELS_LIST, payload: data.data });
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for adding new label
export const addNewLabel = label => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post(`${commonData.apiUrl}/customers/labels`, label)
      .then(({data}) => {
          dispatch(fetchSuccess(data.message));
          dispatch(getLabelsList());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//For Deleting Label
export const deleteLabel = labelId => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .delete(`${commonData.apiUrl}/customers/labels/${labelId}`)
      .then(data => {
          dispatch(getLabelsList());
          dispatch(fetchSuccess('Label Deleted Successfully!'));
        })
      .catch(error => {
        console.log(error)
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//For Editing Label
export const updateLabel = label => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/customers/labels/${label.id}`, label)
      .then(data => {
          dispatch(fetchSuccess('Label updated successfully'));
          dispatch(getLabelsList());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting customers list
export const getCustomersList = (params = {})  => {

  return dispatch => {
    axios
    .get(`${commonData.apiUrl}/customers?selectedFolder=${params.selectedFolder}&selectedLabel=${params.selectedLabel}&searchText=${params.searchText}`)
    .then(({data}) => {
          dispatch({ type: GET_CUSTOMERS_LIST, payload: data });
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchError('Something went wrong'));
      });
  };
};

export const getCustomers = (params)  => {

  return dispatch => {
    axios
    .get(`${commonData.apiUrl}/customers`, { params })
    .then(({data}) => {
          dispatch({ type: GET_CUSTOMERS_LIST, payload: data });
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchError('Something went wrong'));
      });
  };
};



export const setCurrentCustomer = customer => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_CUSTOMER,
      payload: customer,
    });
  };
};

//for creating new customer
export const createCustomer = customer => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post(`${commonData.apiUrl}/customers`, customer)
      .then(({data}) => {
          dispatch(fetchSuccess(data.message));
          dispatch(getCustomers());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating customer through detail page
export const onUpdateCustomer = customer => {

  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/customers/${customer.id}`, customer)
      .then(({data}) => {
          dispatch(fetchSuccess(data.message));
          dispatch(getCustomers());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating customers starred status(through listing)
export const updateStarredStatus = (customerIds, status) => {
  const obj = {
    ids: customerIds,
    status: status
  }
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/customers/update-starred`, obj)
      .then(({data}) => {
          dispatch(getCustomers());
          dispatch(fetchSuccess(data.message));
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails folder(through listing)
export const deleteCustomer = customerIds => {
  let obj = {
    ids: customerIds
  }
  return dispatch => {
    dispatch(fetchStart());
    axios
      .patch(`${commonData.apiUrl}/customers`, obj)
      .then(({data}) => {
        dispatch(getCustomers());
        dispatch(fetchSuccess(data.message));
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating customers label(through listing)
export const updateCustomersLabel = (customerIds, label) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/customers/update-labels/${customerIds }`, {label})
      .then(({data}) => {
        dispatch(fetchSuccess(data.message));
        dispatch(getCustomers());
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting customer categories(in sidebar) count
export const getCustomerCounts = () => {
  return dispatch => {
    axios
      .get(`${commonData.apiUrl}/customers/counter`)
      .then(data => {
          dispatch({ type: GET_CUSTOMER_COUNTS, payload: data.data });
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};


