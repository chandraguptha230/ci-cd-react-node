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

const onSelectProducts = (category, products) => {
  let selectProducts = [];
  switch (category) {
    case 'all': {
      selectProducts = products;
      break;
    }
    case 'starred': {
      selectProducts = products.filter(product => product.starred);
      break;
    }
    case 'unpaid': {
      selectProducts = products.filter(product => product.unpaid);
      break;
    }
    default:
  }

  return selectProducts.map(product => product.id);
};

const CheckedListHeader = ({ checkedProducts, handleHeaderCheckBox, updateCheckedProducts }) => {
  const [category, setCategory] = useState(selectCategories[0].slug);
  const classes = useStyles();

  const { productsList, labelsList } = useSelector(({ productApp }) => productApp);

  const handleSelectChange = e => {
    setCategory(e.target.value);
    const selectProducts = onSelectProducts(e.target.value, productsList);
    updateCheckedProducts(selectProducts);
  };

  return (
    <Box className={classes.appContentHeader}>
      <Checkbox
        color="primary"
        indeterminate={checkedProducts.length > 0 && checkedProducts.length < productsList.length}
        checked={checkedProducts.length > 0 && checkedProducts.length === productsList.length}
        onChange={e => handleHeaderCheckBox(e.target.checked, productsList)}
      />

      <AppSelectBox
        id="product-app"
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
          checkedProducts={checkedProducts}
          productsList={productsList}
          labelsList={labelsList}
          updateCheckedProducts={updateCheckedProducts}
        />
      </Box>
    </Box>
  );
};

export default CheckedListHeader;

CheckedListHeader.prototype = {
  checkedProducts: PropTypes.array.isRequired,
  handleHeaderCheckBox: PropTypes.func,
  updateCheckedProducts: PropTypes.func,
};
