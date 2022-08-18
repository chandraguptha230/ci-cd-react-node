import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { updateProductsLabel, updateStarredStatus } from '../../../../../../../redux/actions/ProductApp';
import PropTypes from 'prop-types';
import ExportProducts from '../../../ExportProducts';
// import PrintIcon from '@material-ui/icons/Print';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const HeaderOptions = ({ onDelete, checkedProducts, productsList, labelsList, updateCheckedProducts }) => {
  const dispatch = useDispatch();
  const [showLabels, setShowLabels] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(null);

  const products = productsList.filter(product => checkedProducts.includes(product.id));
  let unStarredOption = products.some(item => item.starred);
  let starredOption = products.some(item => !item.starred);

  const onShowLabels = event => {
    setShowLabels(event.currentTarget);
  };

  const onHideLabels = () => {
    setShowLabels(null);
  };

  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };

  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onClickLabelOption = label => {
    dispatch(updateProductsLabel(checkedProducts, label.id));
    updateCheckedProducts([]);
    onHideLabels();
  };

  const onClickStarredOption = status => {
    dispatch(updateStarredStatus(checkedProducts, status));
    updateCheckedProducts([]);
    onHideMoreOptions();
  };

  const onClickDeleteOption = () => {
    onDelete(checkedProducts)
    // dispatch(deleteProduct(checkedProducts));
    updateCheckedProducts([]);
  };

  const getDataForExport = () => {
    return productsList.filter(item => checkedProducts.includes(item.id));
  };

  return (
    <React.Fragment>
      {/* <Box ml={1}>
        <Tooltip title="Print">
          <IconButton size="small" onClick={() => window.print()}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
      </Box> */}

      <Box ml={1}>
        <ExportProducts data={getDataForExport()}>
          <Tooltip title="Export">
            <IconButton size="small">
              <CloudUploadIcon />
            </IconButton>
          </Tooltip>
        </ExportProducts>
      </Box>

      <Box ml={1}>
        <Tooltip title="Delete">
          <IconButton size="small" onClick={onClickDeleteOption}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box ml={1}>
        <Tooltip title="Labels">
          <IconButton size="small" onClick={onShowLabels}>
            <LabelIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showLabels} open={Boolean(showLabels)} onClose={onHideLabels}>
        {labelsList.map((item, index) => (
          <MenuItem key={index} onClick={() => onClickLabelOption(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      <Box ml={1}>
        <Tooltip title="More Options">
          <IconButton size="small" onClick={onShowMoreOptions}>
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
        {starredOption && <MenuItem onClick={() => onClickStarredOption(true)}>Mark as Starred</MenuItem>}
        {unStarredOption && <MenuItem onClick={() => onClickStarredOption(false)}>Remove from Starred</MenuItem>}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderOptions;

HeaderOptions.prototype = {
  checkedProducts: PropTypes.array.isRequired,
  productsList: PropTypes.array.isRequired,
  labelsList: PropTypes.array,
  updateCheckedProducts: PropTypes.func,
};

HeaderOptions.defaultProps = {
  labelsList: [],
};
