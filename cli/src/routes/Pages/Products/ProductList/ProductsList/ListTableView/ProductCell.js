import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import CmtAvatar from '../../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../ProductCell.style';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ProductCellOptions from './ProductCellOptions';

const ProductCell = ({ product, checkedProducts, handleCellCheckBox, onShowProductDetail, onClickEditProduct }) => {
  const classes = useStyles();
  const { id, name, phones, limit, balance, dpUrl } = product;
  return (
    <TableRow className={classes.tableRowRoot} onClick={() => onShowProductDetail(product)}>
      <TableCell className={classes.tableCellRoot}>
        <Box display="flex" alignItems="center">
          <Box component="span" mr={2} onClick={e => e.stopPropagation()}>
            <Checkbox
              color="primary"
              checked={checkedProducts.includes(id)}
              onChange={event => handleCellCheckBox(event.target.checked, id)}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={{ xs: 4, md: 5 }}>
              <CmtAvatar size={40} src={dpUrl} alt={name} />
            </Box>

            <Box>
              <Typography className={classes.titleRoot} component="div" variant="h4">
                {name}
              </Typography>
              <Typography className={classes.subTitleRoot}>{phones[0].phone}</Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell>₱{limit}.00</TableCell>
      <TableCell>₱{balance}.00</TableCell>
      {/* <TableCell className={classes.tableCellRoot}>{company}</TableCell> */}
      <TableCell className={clsx(classes.tableCellRoot, classes.tableCellAction)}>
        <ProductCellOptions product={product} onClickEditProduct={onClickEditProduct} />
      </TableCell>
    </TableRow>
  );
};

export default ProductCell;

ProductCell.prototype = {
  product: PropTypes.object.isRequired,
  checkedProducts: PropTypes.array,
  handleCellCheckBox: PropTypes.func,
  onShowProductDetail: PropTypes.func,
  onClickEditProduct: PropTypes.func,
};

ProductCell.defaultProps = {
  checkedProducts: [],
};
