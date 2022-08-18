import React, { useContext, useEffect, useState } from 'react';
import ListTableView from './ListTableView';
import ListGridView from './ListGridView';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomersList } from '../../../../../redux/actions/Customer';
import PropTypes from 'prop-types';
import DuplicateCustomersMsg from './DuplicateCustomersMsg';
import { Box } from '@material-ui/core';
import useStyles from '../index.style';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getCustomerContainerHeight } from '../../../../../@jumbo/constants/AppConstants';
import AppContext from '../../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import EmptyCustomerResult from './EmptyCustomerResult';

const CustomersList = ({ width, viewMode, onShowCustomerDetail, onClickEditCustomer, onDelete }) => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const { filterType, customersList } = useSelector(({ customerApp }) => customerApp);
  const [checkedCustomers, setCheckedCustomers] = useState([]);
  const [showDuplicateMsg, setShowDuplicateMsg] = useState(true);

  useEffect(() => {
    dispatch(getCustomersList(filterType));
  }, [filterType, dispatch]);

  const handleCellCheckBox = (isChecked, id) => {
    if (isChecked) {
      setCheckedCustomers(checkedCustomers.concat(id));
    } else {
      setCheckedCustomers(checkedCustomers.filter(customerId => customerId !== id));
    }
  };

  const toggleDuplicateMsgShow = () => {
    setShowDuplicateMsg(!showDuplicateMsg);
  };

  const handleHeaderCheckBox = isChecked => {
    if (isChecked) {
      const ids = customersList.map(customer => customer.id);
      updateCheckedCustomers(ids);
    } else {
      updateCheckedCustomers([]);
    }
  };

  const updateCheckedCustomers = customerIds => {
    setCheckedCustomers(customerIds);
  };

  const classes = useStyles({
    height: getCustomerContainerHeight(width, showFooter),
  });


  return customersList.length > 0 ? (
    <Box className={classes.inBuildAppMainContent}>
      <PerfectScrollbar className={classes.perfectScrollbarCustomerCon}>
        
        {showDuplicateMsg && (
          <DuplicateCustomersMsg customersList={customersList} toggleDuplicateMsgShow={toggleDuplicateMsgShow} />
        )}
        {viewMode === 'table' ? (
          <ListTableView
            checkedCustomers={checkedCustomers}
            handleCellCheckBox={handleCellCheckBox}
            handleHeaderCheckBox={handleHeaderCheckBox}
            updateCheckedCustomers={updateCheckedCustomers}
            onShowCustomerDetail={onShowCustomerDetail}
            onClickEditCustomer={onClickEditCustomer}
            onDelete={onDelete}
          />
        ) : (
          <>
          <ListGridView onShowCustomerDetail={onShowCustomerDetail} onClickEditCustomer={onClickEditCustomer} />
          </>
        )}
      </PerfectScrollbar>
    </Box>
  ) : (
    <Box className={classes.inBuildAppMainContent}>
      <EmptyCustomerResult />
    </Box>
  );
};

export default CustomersList;

CustomersList.prototype = {
  viewMode: PropTypes.string,
  onShowCustomerDetail: PropTypes.func,
  onClickEditCustomer: PropTypes.func,
  onDelete: PropTypes.func
};

CustomersList.defaultProps = {
  viewMode: 'table',
};
