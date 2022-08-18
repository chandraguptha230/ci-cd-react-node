import React, { useEffect, useState } from 'react';
import CmtMediaObject from '../../../../../../../@coremat/CmtMediaObject';
import Box from '@material-ui/core/Box';
import { alpha, makeStyles } from '@material-ui/core/styles';
// import CmtAvatar from '../../../../../../../@coremat/CmtAvatar';
// import { timeFromNow } from '../../../../../../../@jumbo/utils/dateHelper';
// import DoneIcon from '@material-ui/icons/Done';
// import ClearIcon from '@material-ui/icons/Clear';
import {IconButton} from '@material-ui/core';



// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const useStyles = makeStyles(theme => ({
  itemRoot: {
    padding: '16px 24px',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.161741)',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& $actionButtons': {
        visibility: 'visible',
        opacity: 1,
      },
      '& $actionCounter': {
        display: 'flex',
        opacity: 1,
      },
    },

    '& .Cmt-media-image': {
      marginTop: 0,
    },
  },
  subTitleRoot: {
    fontSize: 14,
    // color: theme.palette.text.disabled,
    // marginTop: 4,
  },
  avatarRoot: {
    marginRight: 16,
    [theme.breakpoints.up('lg')]: {
      width: 56,
      height: 56,
    },
  },
  actionCounter: {
    paddingTop: 5,
    display: 'none',
    opacity: 0,
    zIndex: 2,
    transition: 'all 0.2s',
    '& .btn-white': {
      // backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    },
  },
  actionButtons: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 0.2s',
    '& .btn-white': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },

    '& .MuiFab-root:not(:last-child)': {
      marginRight: 12,
    },
  },
}));

const CommentItem = ({ item, handleItem }) => {
  const classes = useStyles();
  const [values, setValues] = useState({});




  useEffect(() => {
    setValues(item);
  }, [item]);


  const getTitle = () => {
    return (
      <Box color="text.primary">
        <Box fontSize={14} component="span" color="text.disabled" mr={5}>
        Name: 
      </Box>
        <Box component="span" color="primary.main">
          {values.name}
        </Box>
      </Box>
    );
  };

  const getSubtitle = () => (
    <Box display="relative">
      <Box display="flex">
<Box display="relative">
<Box fontSize={14} color="text.disabled" mr={6}>
        Price: 
      </Box>
      <Box fontSize={14} color="text.disabled">
        Stocks: 
      </Box>
</Box>
<Box display="relative">
<Box fontSize={14} color="text.disabled">
      ₱{values.price}
      </Box>
      <Box fontSize={14} color="text.disabled">
      {values.stocks}
      </Box>
</Box>
      </Box>

    </Box>
  );

  return (
    <Box className={classes.itemRoot}>
      <CmtMediaObject
        // avatar={<CmtAvatar className={classes.avatarRoot} src={cover} />}
        title={getTitle()}
        subTitle={getSubtitle()}
        subTitleProps={{
          className: classes.subTitleRoot,
          component: 'div',
          variant: 'inherit',
          gutterBottom: false,
        }}
        footerComponent={ <Box>
          <Box display="flex" flexDirection="column" alignItems="center">
          <Box fontSize={14} alignItems="center" style={{marginBottom: 5}} color="text.disabled">
          ₱{values.total}
        </Box>
          <Box display="flex" alignItems="center" className={classes.actionCounter}>
          <IconButton className="btn-white"
          size="small"
            onClick={() => handleItem(values, 'less')}
          >
            <RemoveCircleOutlineIcon 
            />
          </IconButton>
          <Box ml={3} mr={3} display="flex" alignItems="center" style={{ fontSize: 18}}>{values.qty}</Box>
          <IconButton className="btn-white"
          size="small"
          disabled={values.stocks <= 0}
          onClick={() => handleItem(values, 'add')}
          >
            <AddCircleIcon
            />
          </IconButton>
        </Box>
        </Box>
      </Box>}
      />
    </Box>
  );
};
export default CommentItem;
