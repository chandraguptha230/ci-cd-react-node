import React, { useState, useEffect } from 'react';
import { Box, Divider, IconButton, makeStyles, Typography } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { alpha } from '@material-ui/core/styles';
import CmtList from '../../../../../../../@coremat/CmtList';
import CartItem from './CartItem';


import EmptyResult from '../EmptyResult';
// import SearchBox from '../Search/SearchBox';


//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCustomers, setCurrentCustomer } from '../../../../../../../redux/actions/Customer';
import { SET_CREATE_CUSTOMER_DIALOG } from '../../../../../../../redux/actions/types';



//Components
import CustomerAutoComplete from './AutoComplete';
import CreateCustomer from '../../../../../../../routes/Pages/Customers/CustomerList/CreateCustomer';




//Icons
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  scrollbarRoot: {
    marginRight: 10,
    maxHeight: '75vh',
    overflow: 'hidden',
    paddingBottom: 50,
    // paddingBottom: 50,
    // marginBottom: 100,
    [theme.breakpoints.up('sm')]: {
      maxHeight: '75vh',
      overflow: 'hidden',
      // paddingBottom: 50
    },
  },
  chipRoot: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    letterSpacing: 0.25,
    fontSize: 14,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
  },
  sectionCustomer: {
    paddingRight: 5,
    paddingLeft: 5,
    // display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: 12,
    color: theme.palette.text.secondary,
    minHeight: '20px'
  },
  sectionHeading: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    paddingRight: 5,
    paddingLeft: 5,
    marginBottom: 10
  },
  sectionTotal: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 12,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: theme.palette.text.secondary,
    // minHeight: '10px'
  },
  cartButton: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
    // marginBottom: 50,
    zIndex: 1000,
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      bottom: 80,
    },
  },
  labelRoot: {
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    color: theme.palette.text.disabled,
    padding: '4px 10px',
    borderRadius: 4,
    textTransform: 'capitalize',
  },
  label: {
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    fontSize: 10,
    marginRight: '10px',
    width: '100%',
    margin: 1,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.dark,
    [theme.breakpoints.up('md')]: {
      fontSize: 12
    }
  },
  titleRoot: {
    fontSize: 11,
    marginLeft: '10px',
    paddingTop: 0.5,
    color: theme.palette.common.dark,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      fontSize: 13
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  userInfoRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
}));

const Comments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { customersList, currentCustomer }  = useSelector(({customerApp}) => customerApp);
  const { create_customer } = useSelector(({ uiReducer }) => uiReducer);

  const [isSearch, setIsSearch] = useState(false);

  
  const onCloseDialog = () => {
    dispatch({
        type: SET_CREATE_CUSTOMER_DIALOG,
        payload: false
      })
  }


    const handleSelect = (data) => {
        console.log(data)
    }

    
  const handleValue = (data) => {
    dispatch(setCurrentCustomer(data));
  }


  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  useEffect(() => {
    if(currentCustomer && isSearch){
        setIsSearch(false);
    }
  }, [currentCustomer]);
  return (
    <>
      <Box mb={2} className={classes.sectionHeading}>
        <Typography variant="body1" style={{fontWeight: 'bolder'}}>Cart Summary</Typography>
        </Box>
      <Divider/>
       <Box mb={2} mt={1} className={classes.sectionCustomer}>
       <Box sx={{pr: 10 }} mb={1} display="flex" flexDirection="column" flexGrow={1}>
        <Box flexGrow={1} display="flex" alignItems="center" justifyContent="flex-start">
        <Typography variant="subtitle2" style={{fontWeight: 'bolder', flexGrow: 1}}>
        Customer Details
        </Typography>
            <IconButton style={{marginTop: 5}} size='small' onClick={() => setIsSearch(!isSearch)} >
               {isSearch ? < HighlightOffIcon/> : <SearchIcon fontSize="small"/>  }
            </IconButton>
        </Box>
        {/* <Box  flexGrow={1} > */}
        {isSearch &&
            <CustomerAutoComplete
                placeholder="Select"
                margin="dense"
                fullWidth={true}
                variant="outlined"
                listOption={customersList}
                handleSelect={handleSelect}
            />
        }
        {/* </Box> */}
        </Box>
       {!currentCustomer ?
         <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h2">Walk-in Customer</Typography>
        </Box> : 
        <Box sx={{pr: 10, p: 2 }} display="flex" flexDirection="column" flexGrow={1}>
        <Box mt={-2}>
            {currentCustomer && currentCustomer.id &&
            <Box display="flex" alignItems="flex-start" justifyContent="" flexDirection="row">
            <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Typography  className={classes.label}>Name:</Typography>
            <Typography  className={classes.label}>Address:</Typography>
            <Typography  className={classes.label}>Email:</Typography>
            <Typography  className={classes.label}>Phone:</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Typography className={classes.titleRoot}>{currentCustomer && currentCustomer.name}</Typography>
            <Typography className={classes.titleRoot}>{currentCustomer && currentCustomer.address}</Typography>
            <Typography  className={classes.titleRoot}>{currentCustomer && currentCustomer.email}</Typography>
            <Typography className={classes.titleRoot}>{currentCustomer && currentCustomer.phones.length !== 0 ? currentCustomer.phones.map(a => {return a.phone}).join() : 'No Contact #'}</Typography>
            </Box>
            </Box>
            }
          </Box>
        </Box>}
      </Box>
      <Divider/>
      <Box mt={5} className={classes.sectionTotal}>
        <Box sx={{pr: 10 }} display="flex" flexDirection="column" flexGrow={1}>
        <Box>
        <Typography variant="h2" style={{fontWeight: 'bolder'}}>
        Order Details
        </Typography>
        </Box>
        <Box >
          <br/>
        <Divider/>
            <Box display="flex" m={2} alignItems="center" justifyContent="space-between" >
              <Typography variant="h3">Gross Total</Typography>              <Typography variant="h3" align='left'>1000</Typography>

            </Box>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>Discount</Typography>              <Typography  align='left'>12%</Typography>

            </Box>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>Subtotal Less Discount</Typography>              <Typography>12%</Typography>

            </Box>
            <Divider/>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>TAX RATE(12%)</Typography>              <Typography>12%</Typography>

            </Box>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>Total Tax</Typography>              <Typography>120</Typography>

            </Box>
            <Divider/>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>Shipping/Handling</Typography>              <Typography>1000</Typography>

            </Box>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography>Other</Typography>              <Typography>1000</Typography>

            </Box>
            <Divider style={{height: 10}}/>
            <Box m={2} display="flex" alignItems="center" justifyContent="space-between" >
              <Typography variant="h1" style={{fontWeight: 'bold'}}>Grand Total</Typography>              <Typography variant="h2">1000</Typography>

            </Box>
            <Divider style={{height: 5}}/>
        </Box>
        </Box>
      </Box>
      {create_customer && <CreateCustomer open={create_customer} handleDialog={onCloseDialog} />}
   </>
  );
};

export default Comments;
