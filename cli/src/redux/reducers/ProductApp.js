import {
  ADD_LABEL,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  DELETE_LABEL_ITEM,
  GET_PRODUCT_COUNTS,
  GET_PRODUCTS_LIST,
  GET_LABELS_LIST,
  SET_CURRENT_PRODUCT,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_LABEL,
  UPDATE_LABEL_ITEM,
  UPDATE_STARRED_STATUS,
  SET_OTHER_AMOUNTS
} from '../actions/types';

const INIT_STATE = {
  isSideBarCollapsed: false,
  labelsList: [],
  filterType: {
    selectedFolder: 'products',
    selectedLabel: '',
    searchText: '',
  },
  productsList: [],
  tax_disc: [],
  currentProduct: null,
  totalProducts: null,
  counter: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_COLLAPSED: {
      return {
        ...state,
        isSideBarCollapsed: action.payload ? action.payload : !state.isSideBarCollapsed,
      };
    }

    case SET_FILTER_TYPE: {
      return {
        ...state,
        filterType: action.payload,
      };
    }

    case SET_OTHER_AMOUNTS: {
      return {
        ...state,
        tax_disc: action.payload,
      };
    }

    case GET_LABELS_LIST: {
      return { ...state, labelsList: action.payload };
    }

    case ADD_LABEL: {
      return {
        ...state,
        labelsList: state.labelsList.concat(action.payload),
      };
    }

    case UPDATE_LABEL_ITEM: {
      return {
        ...state,
        labelsList: state.labelsList.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }

    case DELETE_LABEL_ITEM: {
      return {
        ...state,
        labelsList: state.labelsList.filter(item => item.id !== action.payload),
      };
    }

    case GET_PRODUCTS_LIST: {
      return {
        ...state,
        productsList: action.payload,
        totalProducts: action.payload.length,
      };
    }

    case SET_CURRENT_PRODUCT: {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }

    case CREATE_PRODUCT: {
      let updatedList = state.productsList;
      let updatedCount = state.totalProducts;
      if (state.filterType.selectedFolder === 'products') {
        updatedList = [action.payload, ...updatedList];
        updatedCount = updatedCount + 1;
      }
      return {
        ...state,
        productsList: updatedList,
        totalProducts: updatedCount,
      };
    }

    case UPDATE_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }

    case UPDATE_STARRED_STATUS: {
      const { productIds, status } = action.payload;
      let updatedList = state.productsList.map(product => {
        if (productIds.includes(product.id)) {
          product.starred = status;
          return product;
        }
        return product;
      });
      if (!status && state.filterType.selectedFolder === 'starred') {
        updatedList = updatedList.filter(item => !productIds.includes(item.id));
      }
      return {
        ...state,
        productsList: updatedList,
      };
    }

    case DELETE_PRODUCT: {
      let updatedList = state.productsList;
      let updatedCount = state.totalProducts;
      if (state.filterType.selectedFolder !== 'trash') {
        updatedList = updatedList.filter(product => !action.payload.includes(product.id));
        updatedCount = updatedCount - action.payload.length;
      }
      return {
        ...state,
        productsList: updatedList,
        totalProducts: updatedCount,
      };
    }

    case UPDATE_PRODUCT_LABEL: {
      let productIds = action.payload.map(product => product.id);
      const updatedList = state.productsList.map(mail => {
        if (productIds.includes(mail.id)) {
          return action.payload.find(selectedProduct => selectedProduct.id === mail.id);
        } else {
          return mail;
        }
      });
      return {
        ...state,
        productsList: updatedList,
      };
    }

    case GET_PRODUCT_COUNTS: {
      return {
        ...state,
        counter: action.payload,
      };
    }

    default:
      return state;
  }
};
