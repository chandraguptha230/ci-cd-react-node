import React from 'react';
import ProductTableHead from './ProductTableHead';
import Table from '@material-ui/core/Table';
import { useSelector } from 'react-redux';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import ProductCell from './ProductCell';
import CheckedListHeader from './CheckedListHeader';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import useStyles from './index.style';
import NoRecordFound from './NoRecordFound';


//Jumbo
import { getComparator, stableSort } from '../../../../../../@jumbo/utils/tableHelper';



const ListTableView = ({
  checkedProducts,
  handleCellCheckBox,
  handleHeaderCheckBox,
  updateCheckedProducts,
  onShowProductDetail,
  onClickEditProduct,
  onClickAddStocks,
  onDelete
}) => {
const classes = useStyles();
  const [orderBy, setOrderBy] = React.useState('name');
  const [order, setOrder] = React.useState('asc');
  const { productsList } = useSelector(({ productApp }) => productApp);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };






  return (
    <React.Fragment>
      {checkedProducts.length > 0 && (
        <CheckedListHeader
          checkedProducts={checkedProducts}
          handleHeaderCheckBox={handleHeaderCheckBox}
          updateCheckedProducts={updateCheckedProducts}
          onDelete={onDelete}
        />
      )}
      <Box className="Cmt-table-responsive">
        <Table>
          {checkedProducts.length === 0 && (
                     <ProductTableHead
                     classes={classes}
                     numSelected={checkedProducts.length}
                     order={order}
                     orderBy={orderBy}
                     onSelectAllClick={handleHeaderCheckBox}
                     onRequestSort={handleRequestSort}
                     rowCount={productsList.length}

                   />
          )}
          <TableBody>
          {!!productsList.length ? (
                stableSort(productsList, getComparator(order, orderBy))
                  .map((row, index) => (
                    <ProductCell
                    key={index}
                    product={row}
                    checkedProducts={checkedProducts}
                    handleCellCheckBox={handleCellCheckBox}
                    onShowProductDetail={onShowProductDetail}
                    onClickEditProduct={onClickEditProduct}
                    onClickAddStocks={onClickAddStocks}
                    onDelete={onDelete}
                  />
                  ))
              ) : (
                <TableRow style={{ height: 53 * 6 }}>
                <TableCell colSpan={7} rowSpan={10}>
                    <NoRecordFound>There are no records found with your filter.</NoRecordFound>
                </TableCell>
              </TableRow>
              ) 
              }
          </TableBody>
        </Table>
      </Box>
    </React.Fragment>
  );
};

export default ListTableView;

ListTableView.prototype = {
  checkedProducts: PropTypes.array,
  handleCellCheckBox: PropTypes.func,
  handleHeaderCheckBox: PropTypes.func,
  updateCheckedProducts: PropTypes.func,
  onShowProductDetail: PropTypes.func,
  onClickEditProduct: PropTypes.func,
  onClickAddStocks: PropTypes.func,
  onDelete: PropTypes.func
};

ListTableView.defaultProps = {
  checkedProducts: [],
};
