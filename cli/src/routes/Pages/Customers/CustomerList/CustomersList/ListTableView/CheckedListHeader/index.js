import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import useStyles from '../../../index.style';
import AppSelectBox from '../../../../../../../@jumbo/components/Common/formElements/AppSelectBox';
import HeaderOptions from './HeaderOptions';
import PropTypes from 'prop-types';

const selectCategories = [
  { id: 12, label: 'None', slug: 'none' },
  { id: 344, label: 'All', slug: 'all' },
  { id: 11, label: 'Starred', slug: 'starred' },
  { id: 1, label: 'Unpaid', slug: 'unpaid' },
];

const onSelectCustomers = (category, customers) => {
  let selectCustomers = [];
  switch (category) {
    case 'all': {
      selectCustomers = customers;
      break;
    }
    case 'starred': {
      selectCustomers = customers.filter(customer => customer.starred);
      break;
    }
    case 'unpaid': {
      selectCustomers = customers.filter(customer => customer.unpaid);
      break;
    }
    default:
  }

  return selectCustomers.map(customer => customer.id);
};

const CheckedListHeader = ({ checkedCustomers, handleHeaderCheckBox, updateCheckedCustomers, onDelete }) => {
  const [category, setCategory] = useState(selectCategories[0].slug);
  const classes = useStyles();

  const { customersList, labelsList } = useSelector(({ customerApp }) => customerApp);

  const handleSelectChange = e => {
    setCategory(e.target.value);
    const selectCustomers = onSelectCustomers(e.target.value, customersList);
    updateCheckedCustomers(selectCustomers);
  };

  return (
    <Box className={classes.appContentHeader}>
      <Checkbox
        color="primary"
        indeterminate={checkedCustomers.length > 0 && checkedCustomers.length < customersList.length}
        checked={checkedCustomers.length > 0 && checkedCustomers.length === customersList.length}
        onChange={e => handleHeaderCheckBox(e.target.checked, customersList)}
      />

      <AppSelectBox
        id="customer-app"
        data={selectCategories}
        value={category}
        fullWidth={false}
        onChange={handleSelectChange}
        className={classes.selectBoxRoot}
        renderRow={(item, index) => (
          <MenuItem key={index} value={item.slug}>
            {item.label}
          </MenuItem>
        )}
      />

      <Box ml="auto" display="flex" alignItems="center">
        <HeaderOptions
          checkedCustomers={checkedCustomers}
          customersList={customersList}
          labelsList={labelsList}
          updateCheckedCustomers={updateCheckedCustomers}
          onDelete={onDelete}
        />
      </Box>
    </Box>
  );
};

export default CheckedListHeader;

CheckedListHeader.prototype = {
  checkedCustomers: PropTypes.array.isRequired,
  handleHeaderCheckBox: PropTypes.func,
  updateCheckedCustomers: PropTypes.func,
  onDelete: PropTypes.func
};
