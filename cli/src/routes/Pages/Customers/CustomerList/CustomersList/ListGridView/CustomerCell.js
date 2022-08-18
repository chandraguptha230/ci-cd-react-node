import React from 'react';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../CustomerCell.style';
import PropTypes from 'prop-types';
import CustomerCellOptions from '../ListTableView/CustomerCellOptions';

const CustomerCell = ({ customer, onShowCustomerDetail, onClickEditCustomer }) => {
  const classes = useStyles();

  const { name, email_address, phones, balance, limit, dpUrl } = customer;
  return (
    <Box className={classes.gridCustomerCell} onClick={() => onShowCustomerDetail(customer)}>
      <Box className={classes.gridCustomerCellHeader} display="flex" mb={3}>
        <Box width={{ sm: 'calc(100% - 56px)' }} display="flex" alignItems="center">
          <Box mr={4}>
            <CmtAvatar size={40} src={dpUrl} alt={name} />
          </Box>

          <Box width="calc(100% - 56px)">
            <Typography className={classes.titleRoot} component="div" variant="h4">
              {name}
            </Typography>
            <Typography className={classes.subTitleRoot}>Balance: ₱{balance}.00</Typography>
          </Box>
        </Box>
        <Box ml={{ sm: 'auto' }} onClick={e => e.stopPropagation()}>
          <CustomerCellOptions customer={customer} onClickEditCustomer={onClickEditCustomer} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Box mb={2} component="p" className={classes.textTruncate}>
          {email_address}
        </Box>
        <Box mb={2} component="p">
          {phones[0].phone}
        </Box>
        <Box component="p" className={classes.textTruncate}>
          Limit: ₱{limit}.00
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerCell;

CustomerCell.prototype = {
  customer: PropTypes.object.isRequired,
  onShowCustomerDetail: PropTypes.func,
  onClickEditCustomer: PropTypes.func,
};
