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
import AddStocks from './AddStocks';

import {  deleteProduct, setCurrentProduct, addProductStocks } from '../../../../redux/actions/ProductApp';
import ConfirmDialog from '../../../../@jumbo/components/Common/ConfirmDialog';



const Product = () => {
  const classes = useStyles();
  const { isSideBarCollapsed } = useSelector(({ productApp }) => productApp);
  const [viewMode, setViewMode] = useState('table');
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selected, setSelected] = useState(false);
  const [addStock, setAddStocks] = useState(false);
  const dispatch = useDispatch();

  const onChangeViewMode = mode => {
    setViewMode(mode);
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

  const handleCancelDelete = (data) => {
    setSelected([]);
    setConfirmDelete(false)
  }

  const handleConfirmDelete = () => {
    dispatch(deleteProduct(selected))
    setSelected([]);
    setConfirmDelete(false)
  }

  const onDelete = (data) => {
    setSelected(data);
    setConfirmDelete(true);

  }

  const onClickAddStocks = (val) => {
    dispatch(setCurrentProduct(val));
    setAddStocks(true);
  }


  const onCloseAddStockDialog = () => {
    setAddStocks(false);
    dispatch(setCurrentProduct(null));
  };
  

  const handleAddStocks = (val) => {
    dispatch(addProductStocks(val));

  }


  return (
    <Box className={classes.inBuildAppCard}>
      <AppHeader onChangeViewMode={onChangeViewMode} viewMode={viewMode} />
      <Box className={clsx(classes.inBuildAppContainer, isSideBarCollapsed ? 'collapsed' : '')}>
        <Sidebar onClickCreateProduct={onClickCreateProduct} />
        <ProductsList
          viewMode={viewMode}
          onShowProductDetail={onShowProductDetail}
          onClickEditProduct={onClickEditProduct}
          onDelete={onDelete}
          onClickAddStocks={onClickAddStocks}
        />
      </Box>
      {showProductDetail && <ProductDetail open={showProductDetail} handleDialog={onHideProductDetail} />}
      {openCreateDialog && <CreateProduct open={openCreateDialog} handleDialog={onCloseComposeDialog} />}
      {addStock && <AddStocks open={addStock} handleDialog={onCloseAddStockDialog} onSubmit={handleAddStocks} />}
      <ConfirmDialog
        open={confirmDelete}
        title={`Confirm delete`}
        content={'Are you sure, you want to  delete?'}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default Product;
