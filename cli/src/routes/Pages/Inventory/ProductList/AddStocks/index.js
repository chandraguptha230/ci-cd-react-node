import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { Typography, DialogTitle, Button, Grid, TextField, Divider} from '@material-ui/core';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';





const useStyles = makeStyles(theme => ({
  dialogRoot: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      width: '100%',
    },
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
  avatarView: {
    [theme.breakpoints.down('sm')]: {
      '& .Cmt-avatar-size': {
        width: 40,
        height: 40,
      },
    },
  },
  titleRoot: {
    fontSize: 14,
    marginLeft: '10px',
    paddingTop: 0.5,
    color: theme.palette.common.dark,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      fontSize: 15,
    },
  },
  subTitleRoot: {
    fontSize: 12,
    color: theme.palette.text.secondary,
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
    fontSize: 13,
    marginRight: '10px',
    width: '100%',
    margin: 1,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.dark,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    }
  },
}));
const ProductDetail = ({ open, handleDialog, onSubmit }) => {
  const classes = useStyles();
  const { currentProduct } = useSelector(({ productApp }) => productApp);
  const { authUser } = useSelector(({ auth }) => auth);

  const [values, setValues] = useState({});


  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value})
  }


  const handleSubmit = () => {
    onSubmit({  ...values, productId: currentProduct.id, purchaserId: authUser.id })
    handleDialog(false);
  }

  const { id, name, description, stocks, price, cover  } = currentProduct;
  return (
    <Dialog open={open} onClose={handleDialog} className={classes.dialogRoot}>
       <DialogTitle >
        <Box display="flex" alignItems="center" justifyContent="space-between" m={-3}>
        <Typography >
        ADD PURCHASE STOCKS
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleDialog}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ClearIcon />
        </IconButton>
        </Box>
      </DialogTitle>
      <Divider/>
      <Box className={classes.userInfoRoot} mt={-1}>
        <Box mr={3} display="flex" alignItems="center">
          <Box className={classes.avatarView} mr={{ xs: 4, md: 6 }}>
            <CmtAvatar size={70} src={cover} alt={name} />
          </Box>

          <Box mt={-2}>
            <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="row">
            <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Typography variant="subtitle" className={classes.label}>Name:</Typography>
            <Typography variant="subtitle" className={classes.label}>Description:</Typography>
            <Typography variant="subtitle" className={classes.label}>Selling Price:</Typography>
            <Typography variant="subtitle" className={classes.label}>Stocks:</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
            <Typography variant="body" className={classes.titleRoot}>{name}</Typography>
            <Typography variant="body" className={classes.titleRoot}>{description}</Typography>
            <Typography variant="subtitle" className={classes.titleRoot}>₱<span style={{paddingTop: 2, marginLeft: 1}}>{price}</span></Typography>
            <Typography variant="body" className={classes.titleRoot}>{stocks}</Typography>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px={6} py={5}>
        <Box mb={5} component="h3" color="common.dark">
          Purchase Details
        </Box>
        <Box display="flex" flexDirection="column">
         <Grid container spacing={2}>
         <Grid item xs={12} sm={8}>
        <Typography variant="h5">Purchase Amount</Typography>
              <TextField
                margin="dense"
                fullWidth
                size="small"
                type="number"
                variant="outlined"
                label="Total Purchase Amount"
                value={values.amount}
                onChange={handleChange('amount')}
              />
            </Grid>
           <Grid item xs={12} sm={4}>
        <Typography variant="h5">Quantity</Typography>
              <TextField
                margin="dense"
                fullWidth
                size="small"
                type="number"
                variant="outlined"
                label="Quantity"
                value={values.quantity}
                onChange={handleChange('quantity')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
        <Typography variant="h5">Notes</Typography>
              <TextField
                margin="dense"
                fullWidth
                multiline
                minRows={2}
                size="small"
                type="number"
                variant="outlined"
                label="Purchase Notes"
                value={values.notes}
                onChange={handleChange('notes')}
              />
            </Grid>
            
          </Grid>
          
          </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" mb={4} mt={5} pr={5}>
          <Button onClick={handleDialog}>Cancel</Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Box>
        </Box>
    </Dialog>
  );
};

export default ProductDetail;

ProductDetail.prototype = {
  open: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func,
  selectedProduct: PropTypes.object.isRequired,
};
