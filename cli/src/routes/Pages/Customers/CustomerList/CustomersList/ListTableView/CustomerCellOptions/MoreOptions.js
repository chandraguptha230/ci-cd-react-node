import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import DoneIcon from '@material-ui/icons/Done';
import { deleteCustomer, setCurrentCustomer, updateCustomersLabel } from '../../../../../../../redux/actions/Customer';
import ExportCustomers from '../../../ExportCustomers';
import CmtList from '../../../../../../../@coremat/CmtList';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  menuItemsRoot: {
    width: 200,
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 18,
    },
  },
  iconBlock: {
    display: 'block',
  },
  titleLabelsRoot: {
    fontSize: 10,
    letterSpacing: 1.5,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    padding: '16px 16px 8px',
  },
}));

//isFromDetailPage ->  property is set to true if this file is called from detail page.

const MoreOptions = ({ customer, isDetailView, onDelete }) => {
  const classes = useStyles();
  const { labelsList } = useSelector(({ customerApp }) => customerApp);
  const [showMoreOptions, setShowMoreOptions] = useState(null);
  const dispatch = useDispatch();
  const { tags } = customer;
  const onShowMoreOptions = event => {
    setShowMoreOptions(event.currentTarget);
  };


  const onHideMoreOptions = () => {
    setShowMoreOptions(null);
  };

  const onClickDeleteOption = () => {
    onDelete([customer.id])
    // onDelete([product.id])
    // dispatch(deleteProduct([product.id]));
    onHideMoreOptions();
    return
  };

  const onClickLabelOption = label => {
    dispatch(updateCustomersLabel([customer.id], label));
    if (isDetailView) {
      const newLabel = customer.tags.find(item => item === label);
      if (newLabel) {
        customer.tags = customer.tags.filter(item => item !== label);
      } else {
        customer.tags = customer.tags.concat(label);
      }
      dispatch(setCurrentCustomer(customer));
    }

    onHideMoreOptions();
  };

  return (
    <React.Fragment>
      <Box ml={1}>
        <Tooltip title="More Options">
          <IconButton size="small" onClick={onShowMoreOptions}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu anchorEl={showMoreOptions} open={Boolean(showMoreOptions)} onClose={onHideMoreOptions}>
        <MenuItem onClick={onHideMoreOptions} className={classes.menuItemsRoot}>
          <ExportCustomers data={[{ ...customer }]}>
            <Box component="span" display="flex" alignItems="center">
              <CloudUploadIcon />
              <Box component="span" ml={4}>
                Export
              </Box>
            </Box>
          </ExportCustomers>
        </MenuItem>
        <MenuItem onClick={onClickDeleteOption} className={classes.menuItemsRoot}>
          <DeleteIcon />
          <Box component="span" ml={4}>
            Delete
          </Box>
        </MenuItem>
        <Box className={classes.titleLabelsRoot}>Labels</Box>
        <CmtList
          data={labelsList}
          renderRow={(item, index) => (
            <MenuItem key={index} onClick={() => onClickLabelOption(item.id)} className={classes.menuItemsRoot}>
              <Box display="flex" alignItems="center" width={1}>
                <Box>
                  <LabelIcon className={classes.iconBlock} style={{ color: item.color }} />
                </Box>
                <Box ml={4} component="span">
                  {item.name}
                </Box>
                {tags.includes(item.id) && (
                  <Box ml="auto">
                    <DoneIcon className={classes.iconBlock} />
                  </Box>
                )}
              </Box>
            </MenuItem>
          )}
        />
      </Menu>
    </React.Fragment>
  );
};

export default MoreOptions;
