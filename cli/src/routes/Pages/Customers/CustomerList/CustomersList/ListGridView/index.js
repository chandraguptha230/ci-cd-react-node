import React from 'react';
import { useSelector } from 'react-redux';
import CmtGridView from '../../../../../../@coremat/CmtGridView';
import CustomerCell from './CustomerCell';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const ListGridView = ({ onShowCustomerDetail, onClickEditCustomer }) => {
  const { customersList } = useSelector(({ customerApp }) => customerApp);

  return (
    <Box px={6} py={{ xs: 8, xl: 10 }}>
      <CmtGridView
        border={true}
        itemPadding={18}
        responsive={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        data={customersList}
        renderRow={(item, index) => (
          <CustomerCell
            key={index}
            customer={item}
            onShowCustomerDetail={onShowCustomerDetail}
            onClickEditCustomer={onClickEditCustomer}
          />
        )}
      />
    </Box>
  );
};

export default ListGridView;

ListGridView.prototype = {
  onShowCustomerDetail: PropTypes.func,
  onClickEditCustomer: PropTypes.func,
};
