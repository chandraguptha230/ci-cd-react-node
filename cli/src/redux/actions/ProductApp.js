//For expanding sidebar
import {
  // CREATE_PRODUCT,
  // DELETE_PRODUCT,
  // DELETE_LABEL_ITEM,
  GET_PRODUCT_COUNTS,
  GET_PRODUCTS_LIST,
  GET_LABELS_LIST,
  SET_CURRENT_PRODUCT,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  // UPDATE_PRODUCT,
  // UPDATE_PRODUCT_LABEL,
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
    dispatch(fetchStart());
    axios
      .get(`${commonData.apiUrl}/products/labels`)
      .then(data => {
          dispatch(fetchSuccess());
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
      .post(`${commonData.apiUrl}/products/labels`, label)
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
      .delete(`${commonData.apiUrl}/products/labels/${labelId}`)
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
      .put(`${commonData.apiUrl}/product/labels`, { label })
      .then(data => {
          dispatch(fetchSuccess('Label updated successfully'));
          dispatch(getLabelsList());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting products list
export const getProductsList = params => {
  return dispatch => {
    // dispatch(fetchStart());
    axios
      .get(`${commonData.apiUrl}/products`, { params })
      .then(data => {
          dispatch({ type: GET_PRODUCTS_LIST, payload: data.data });
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};


export const getInventoryList = params => {
  console.log(params)
  return dispatch => {
    // dispatch(fetchStart());
    axios
      .get(`${commonData.apiUrl}/products?selectedFolder=${params.selectedFolder}&selectedLabel=${params.selectedLabel}&searchText=${params.searchText}`)
      .then(data => {
          dispatch({ type: GET_PRODUCTS_LIST, payload: data.data });
          // dispatch(fetchSuccess('Kuha na'));
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchError('Something went wrong'));
      });
  };
};


export const setCurrentProduct = product => {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_PRODUCT,
      payload: product,
    });
  };
};

//for creating new product
export const createProduct = product => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post(`${commonData.apiUrl}/products`, product)
      .then(({data}) => {
          dispatch(getProductsList());
          dispatch(fetchSuccess(data.message));
        })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating product through detail page
export const onUpdateProduct = product => {

  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/products/${product.id}`, product)
      .then(({data}) => {
          dispatch(fetchSuccess(data.message));
          dispatch(getProductsList());
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating products starred status(through listing)
export const updateStarredStatus = (productIds, status) => {
  const obj = {
    ids: productIds,
    status: status
  }
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/products/update-starred`, obj)
      .then(({data}) => {
          dispatch(getProductsList());
          dispatch(fetchSuccess(data.message));
          
          // dispatch({
          //   type: UPDATE_STARRED_STATUS,
          //   payload: { productIds, status },
          // });
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating mails folder(through listing)
export const deleteProduct = productIds => {
  let obj = {
    ids: productIds
  }
  return dispatch => {
    dispatch(fetchStart());
    axios
      .patch(`${commonData.apiUrl}/products`, obj)
      .then(({data}) => {
          dispatch(getProductsList());
          dispatch(fetchSuccess(data.message));
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for updating products label(through listing)
export const updateProductsLabel = (productIds, label) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .put(`${commonData.apiUrl}/products/update-labels/${productIds }`, {label})
      .then(({data}) => {
        dispatch(fetchSuccess(data.message));
          dispatch(getProductsList());
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchError('Something went wrong'));
      });
  };
};

//for getting product categories(in sidebar) count
export const getProductCounts = () => {
  return dispatch => {
    axios
      .get(`${commonData.apiUrl}/products/counter`)
      .then(data => {
        if (data.status === 200) {
          dispatch({ type: GET_PRODUCT_COUNTS, payload: data.data });
        }
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};


export const addProductStocks = (val) => {
  return dispatch => {
    axios
      .post(`${commonData.apiUrl}/products/stocks`, val)
      .then(({data}) => {
        dispatch(getProductsList());
        dispatch(fetchSuccess(data.message));
      })
      .catch(error => {
        dispatch(fetchError('Something went wrong'));
      });
  };
};
