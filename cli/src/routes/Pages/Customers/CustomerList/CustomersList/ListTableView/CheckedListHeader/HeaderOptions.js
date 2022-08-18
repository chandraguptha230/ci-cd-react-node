import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { deleteCustomer, updateCustomersLabel, updateStarredStatus } from '../../../../../../../redux/actions/Customer';
import PropTypes from 'prop-types';
import ExportCustomers from '../../../ExportCustomers';
import PrintIcon from '@material-ui/icons/Print';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const HeaderOptions = ({ checkedCustomers, customersList, labelsList, updateCheckedCustomers, onDelete }) => {
  const dispatch = useDispatch();
  const [showLabels, setShowLabels] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(null);

  const customers = customersList.filter(customer => checkedCustomers.includes(customer.id));
  let unStarredOption = customers.some(item => item.starred);
  let starredOption = customers.some(item => !item.starred);

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
    dispatch(updateCustomersLabel(checkedCustomers, label.id));
    updateCheckedCustomers([]);
    onHideLabels();
  };

  const onClickStarredOption = status => {
    dispatch(updateStarredStatus(checkedCustomers, status));
    updateCheckedCustomers([]);
    onHideMoreOptions();
  };

  const onClickDeleteOption = () => {
    onDelete(checkedCustomers)
    updateCheckedCustomers([]);
  };

  const getDataForExport = () => {
    return customersList.filter(item => checkedCustomers.includes(item.id));
  };

  return (
    <React.Fragment>
      <Box ml={1}>
        <Tooltip title="Print">
          <IconButton size="small" onClick={() => window.print()}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box ml={1}>
        <ExportCustomers data={getDataForExport()}>
          <Tooltip title="Export">
            <IconButton size="small">
              <CloudUploadIcon />
            </IconButton>
          </Tooltip>
        </ExportCustomers>
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
  checkedCustomers: PropTypes.array.isRequired,
  customersList: PropTypes.array.isRequired,
  labelsList: PropTypes.array,
  updateCheckedCustomers: PropTypes.func,
  onDelete: PropTypes.func
};

HeaderOptions.defaultProps = {
  labelsList: [],
};
