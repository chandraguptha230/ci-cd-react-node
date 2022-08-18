import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { updateStarredStatus } from '../../../../../../../redux/actions/ProductApp';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import MoreOptions from './MoreOptions';


//Icons
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  productCellOptionsRoot: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  starViewRoot: {
    transition: 'all 0.3s ease',
    transform: 'translateX(200%)',
  },
  actionOptionRoot: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: 'all 0.3s ease',
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateX(100%)',
  },
}));

const ProductCellOptions = ({ product, onClickEditProduct, onDelete, onClickAddStocks }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const onClickStarredIcon = status => {
    dispatch(updateStarredStatus([product.id], status));
  };

  


  const { starred } = product;

  return (
    <Box className={classes.productCellOptionsRoot} onClick={e => e.stopPropagation()}>
      <Box className={clsx(classes.starViewRoot, 'star-view')}>
      <Tooltip title="Add Stocks Purchase">
            <IconButton size="small" onClick={() => onClickAddStocks({ ...product })}>
            <AddShoppingCartIcon color="primary"/>
            </IconButton>
          </Tooltip>
     
      </Box>
      <Box className={clsx(classes.actionOptionRoot, 'action-option')}>
        <Box ml={1}>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
          checked={starred}
          onChange={e => onClickStarredIcon(e.target.checked)}
          size="small"
        />
        </Box>
        <MoreOptions product={product} onDelete={onDelete} onClickEditProduct={() => onClickEditProduct({ ...product })} />
      </Box>
    </Box>
  );
};

export default ProductCellOptions;

ProductCellOptions.prototype = {
  product: PropTypes.object.isRequired,
  onClickEditProduct: PropTypes.func,
  onDelete: PropTypes.func,
  onClickAddStocks: PropTypes.func

};
