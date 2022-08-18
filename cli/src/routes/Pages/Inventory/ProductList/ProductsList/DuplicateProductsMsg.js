import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ClearIcon from '@material-ui/icons/Clear';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';

const useStyles = makeStyles(theme => ({
  duplicateRoot: {
    padding: '10px 24px',
    backgroundColor: '#C8FFF4',
    // color: '#018786',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  btnRoot: {
    whiteSpace: 'nowrap',
    backgroundColor: '#00C4B4',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#04998d',
      color: theme.palette.common.white,
    },
  },
}));

const DuplicateCustomersMsg = ({ productsList, toggleDuplicateMsgShow }) => {
  const limitedStocks = [];
  const classes = useStyles();
  productsList.forEach((res) => {
      let ind = res.stocks !== 0 && res.limit > res.stocks
    if (ind) {
      limitedStocks.push(res);
    }
  });

  const length = limitedStocks.length;

  return (
    <React.Fragment>
      {length > 0 && (
        <Box className={classes.duplicateRoot}>
          <Box display="flex" alignItems="center">
            <Box mr={3}>
              <SyncProblemIcon />
            </Box>
            <Box fontSize={14} component="p">
              {length > 2
                ? `${limitedStocks[0].name}, ${limitedStocks[1].name} and ${length -
                    2} more products stocks reached their minimum quantity limit.`
                : `${length} ${length === 1 ? 'product' : 'products'} reached minimum quantity limit.`}
            </Box>
          </Box>
          <Box ml="auto" display="flex" alignItems="center">
            <Box ml={2}>
              <Button className={classes.btnRoot} variant="contained">
                View All
              </Button>
            </Box>
            <Box ml={2}>
              <IconButton onClick={toggleDuplicateMsgShow}>
                <ClearIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default DuplicateCustomersMsg;
