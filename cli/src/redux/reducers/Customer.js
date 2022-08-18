import {
  ADD_LABEL,
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  DELETE_LABEL_ITEM,
  GET_CUSTOMER_COUNTS,
  GET_CUSTOMERS_LIST,
  GET_LABELS_LIST,
  SET_CURRENT_CUSTOMER,
  SET_FILTER_TYPE,
  TOGGLE_SIDEBAR_COLLAPSED,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_LABEL,
  UPDATE_LABEL_ITEM,
  UPDATE_STARRED_STATUS,
} from '../actions/types';

const INIT_STATE = {
  isSideBarCollapsed: false,
  labelsList: [],
  filterType: {
    selectedFolder: 'customers',
    selectedLabel: '',
    searchText: '',
  },
  customersList: [],
  currentCustomer: null,
  totalCustomers: null,
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

    case GET_CUSTOMERS_LIST: {
      return {
        ...state,
        customersList: action.payload,
        totalCustomers: action.payload.length
      };
    }

    case SET_CURRENT_CUSTOMER: {
      return {
        ...state,
        currentCustomer: action.payload,
      };
    }

    case CREATE_CUSTOMER: {
      let updatedList = state.customersList;
      let updatedCount = state.totalCustomers;
      if (state.filterType.selectedFolder === 'customers') {
        updatedList = [action.payload, ...updatedList];
        updatedCount = updatedCount + 1;
      }
      return {
        ...state,
        customersList: updatedList,
        totalCustomers: updatedCount,
      };
    }

    case UPDATE_CUSTOMER: {
      return {
        ...state,
        customersList: state.customersList.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    }

    case UPDATE_STARRED_STATUS: {
      const { customerIds, status } = action.payload;
      let updatedList = state.customersList.map(customer => {
        if (customerIds.includes(customer.id)) {
          customer.starred = status;
          return customer;
        }
        return customer;
      });
      if (!status && state.filterType.selectedFolder === 'starred') {
        updatedList = updatedList.filter(item => !customerIds.includes(item.id));
      }
      return {
        ...state,
        customersList: updatedList,
      };
    }

    case DELETE_CUSTOMER: {
      let updatedList = state.customersList;
      let updatedCount = state.totalCustomers;
      if (state.filterType.selectedFolder !== 'trash') {
        updatedList = updatedList.filter(customer => !action.payload.includes(customer.id));
        updatedCount = updatedCount - action.payload.length;
      }
      return {
        ...state,
        customersList: updatedList,
        totalCustomers: updatedCount,
      };
    }

    case UPDATE_CUSTOMER_LABEL: {
      let customerIds = action.payload.map(customer => customer.id);
      const updatedList = state.customersList.map(mail => {
        if (customerIds.includes(mail.id)) {
          return action.payload.find(selectedCustomer => selectedCustomer.id === mail.id);
        } else {
          return mail;
        }
      });
      return {
        ...state,
        customersList: updatedList,
      };
    }

    case GET_CUSTOMER_COUNTS: {
      return {
        ...state,
        counter: action.payload,
      };
    }

    default:
      return state;
  }
};
