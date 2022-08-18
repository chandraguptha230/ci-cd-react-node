import React, { useState, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { alpha } from '@material-ui/core/styles';
import CmtList from '../../../../../../../@coremat/CmtList';
import CartItem from './CartItem';


import EmptyResult from '../EmptyResult';
// import SearchBox from '../Search/SearchBox';


//Redux
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CART, SET_CART_ITEMS_COUNT } from '../../../../../../../redux/actions/types';


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
  sectionHeading: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    marginBottom: 10,
    textTransform: 'uppercase',
    paddingRight: 5,
    paddingLeft: 5,
  },
  sectionTotalHeading: {
    paddingRight: 5,
    paddingLeft: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginBottom: 10,
    textTransform: 'uppercase',
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
}));

const Comments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cart_items, cart_items_count, total }  = useSelector(({cartApp}) => cartApp);
  const [subTotal, setSubTotal] = useState(0);


  const handleItem = (val, action) => {
    let items = [];
    let id = val.productId;
    let sub = 0;
    items = cart_items;

    if(Number(val.qty) <= 1){
      let newItems = items.filter(a => a.productId !== id);

      let ind = items.find(a => a.productId === id)
      
      items.map(a => {
        sub += Number(a.price * a.qty);
      })



      dispatch({
        type: UPDATE_CART,
        payload: { cart_items: newItems, total: sub}
      })
  
      dispatch({
        type: SET_CART_ITEMS_COUNT,
        payload: newItems.length
      })

      return;
    } else {

    if(action === 'add'){
      items.map(a => {
        if(a.productId === id){
            a.stocks--;
            a.qty++;
            a.total = a.qty * a.price;
            return a;
        } else {
            return a;
        }
      })
    
    } else {

   
      items.map(a => {
        if(a.productId === id){
            a.stocks++;
            a.qty--;
            a.total = a.qty * a.price;
            return a;
        } else {
            return a;
        }
      })
    }



    items.map(a => {
      sub += Number(a.price * a.qty);
    })


    dispatch({
      type: UPDATE_CART,
      payload: { cart_items: items, total: sub}
    })

    dispatch({
      type: SET_CART_ITEMS_COUNT,
      payload: items.length
    })

    return;
  }
  }

  useEffect(() => {
  let sub = 0;
    
    cart_items.map(a => {
      sub += Number(a.price * a.qty);
    })

    setSubTotal(sub)
  }, [total, cart_items])



  return (
    <>
      <Box className={classes.sectionHeading}>Cart Items ({cart_items_count})</Box>
      {cart_items_count !== 0 && <Box className={classes.sectionTotalHeading}>
        <Box>
        Sub-Total
        </Box>
        <Box pr={5} fontSize={18} fontWeight={700}>
        ₱{subTotal}
        </Box>
      </Box>} 
      {cart_items_count !== 0 ? (
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={cart_items} renderRow={(item, index) => <CartItem key={index} item={item} handleItem={handleItem}/>} />
        </PerfectScrollbar>
        ) : (
        <EmptyResult content="No record found" />
      )}
        </>
  );
};

export default Comments;
