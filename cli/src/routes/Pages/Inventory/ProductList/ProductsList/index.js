import React, { useContext, useEffect, useState } from 'react';
import ListTableView from './ListTableView';
import { useDispatch, useSelector } from 'react-redux';
import { getInventoryList } from '../../../../../redux/actions/ProductApp';
import PropTypes from 'prop-types';
import DuplicateProductsMsg from './DuplicateProductsMsg';
import { Box } from '@material-ui/core';
import useStyles from '../index.style';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getProductContainerHeight } from '../../../../../@jumbo/constants/AppConstants';
import AppContext from '../../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import EmptyProductResult from './EmptyProductResult';

const ProductsList = ({ width, onDelete, onShowProductDetail, onClickEditProduct, onClickAddStocks }) => {
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();
  const { filterType, productsList } = useSelector(({ productApp }) => productApp);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [showDuplicateMsg, setShowDuplicateMsg] = useState(true);

  useEffect(() => {
    dispatch(getInventoryList(filterType));
  }, [filterType, dispatch]);

  const handleCellCheckBox = (isChecked, id) => {
    if (isChecked) {
      setCheckedProducts(checkedProducts.concat(id));
    } else {
      setCheckedProducts(checkedProducts.filter(productId => productId !== id));
    }
  };

  const toggleDuplicateMsgShow = () => {
    setShowDuplicateMsg(!showDuplicateMsg);
  };

  const handleHeaderCheckBox = isChecked => {
    if (isChecked) {
      const ids = productsList.map(product => product.id);
      updateCheckedProducts(ids);
    } else {
      updateCheckedProducts([]);
    }
  };

  const updateCheckedProducts = productIds => {
    setCheckedProducts(productIds);
  };

  const classes = useStyles({
    height: getProductContainerHeight(width, showFooter),
  });



  return productsList.length > 0 ? (
    <Box className={classes.inBuildAppMainContent}>
      <PerfectScrollbar className={classes.perfectScrollbarProductCon}>
        {showDuplicateMsg && (
          <DuplicateProductsMsg productsList={productsList} toggleDuplicateMsgShow={toggleDuplicateMsgShow} />
        )}
          <ListTableView
            checkedProducts={checkedProducts}
            handleCellCheckBox={handleCellCheckBox}
            handleHeaderCheckBox={handleHeaderCheckBox}
            updateCheckedProducts={updateCheckedProducts}
            onShowProductDetail={onShowProductDetail}
            onClickEditProduct={onClickEditProduct}
            onDelete={onDelete}
            onClickAddStocks={onClickAddStocks}
          />
      </PerfectScrollbar>
    </Box>
  ) : (
    <Box className={classes.inBuildAppMainContent}>
      <EmptyProductResult />
    </Box>
  );
};

export default ProductsList;

ProductsList.prototype = {
  viewMode: PropTypes.string,
  onShowProductDetail: PropTypes.func,
  onClickEditProduct: PropTypes.func,
  onDelete: PropTypes.func,
  onClickAddStocks: PropTypes.func

};

ProductsList.defaultProps = {
  viewMode: 'table',
};
