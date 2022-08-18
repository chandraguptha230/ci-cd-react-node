import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import CreateProduct from './CreateProduct';
import { setCurrentProduct } from '../../../../redux/actions/ProductApp';



//Components
import Scanner from '../Scanner';

const Product = () => {
  const classes = useStyles();
  const { isSideBarCollapsed } = useSelector(({ productApp }) => productApp);
  const [viewMode, setViewMode] = useState('grid');
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const dispatch = useDispatch();

  const onChangeViewMode = mode => {

    if(mode === viewMode){
     return setViewMode('table');
    } else {
      setViewMode(mode);
    }
  };

  const onShowProductDetail = product => {
    dispatch(setCurrentProduct(product));
    setShowProductDetail(true);
  };

  const onHideProductDetail = () => {
    dispatch(setCurrentProduct(null));
    setShowProductDetail(false);
  };

  const onClickCreateProduct = () => {
    setOpenCreateDialog(true);
  };

  const onClickEditProduct = product => {
    dispatch(setCurrentProduct(product));
    setOpenCreateDialog(true);
  };

  const onCloseComposeDialog = () => {
    dispatch(setCurrentProduct(null));
    setOpenCreateDialog(false);
  };






  return (
    <Box className={classes.inBuildAppCard}>
      <AppHeader onChangeViewMode={onChangeViewMode} viewMode={viewMode} />
      <Box className={clsx(classes.inBuildAppContainer, isSideBarCollapsed ? 'collapsed' : '')}>
        <Sidebar onClickCreateProduct={onClickCreateProduct} />
          <ProductsList
            viewMode={viewMode}
            onShowProductDetail={onShowProductDetail}
            onClickEditProduct={onClickEditProduct}
          />
      </Box>
      {showProductDetail && <ProductDetail open={showProductDetail} handleDialog={onHideProductDetail} />}
      {openCreateDialog && <CreateProduct open={openCreateDialog} handleDialog={onCloseComposeDialog} />}
  
    </Box>
  );
};

export default Product;
