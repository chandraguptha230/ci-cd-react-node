import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import GridContainer from '../../../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import AppTextInput from '../../../../../@jumbo/components/Common/formElements/AppTextInput';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import CmtList from '../../../../../@coremat/CmtList';
import IconButton from '@material-ui/core/IconButton';
import {  requiredMessage } from '../../../../../@jumbo/constants/ErrorMessages';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { isValidEmail } from '../../../../../@jumbo/utils/commonHelper';
import { Typography, Menu, Tooltip, MenuItem, Checkbox, TextField, InputAdornment } from '@material-ui/core';


//Components
import Autocomplete  from './AutoComplete';
import MoreMenu from './MoreMenu';



//Icons
import DoneIcon from '@material-ui/icons/Done';
import LabelIcon from '@material-ui/icons/Label';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, onUpdateProduct } from '../../../../../redux/actions/ProductApp';
import { uploadFile } from '../../../../../redux/actions/Users';




const useStyles = makeStyles(theme => ({
  dialogRoot: {
    position: 'relative',
  },
  dialogTitleRoot: {
    '& .MuiTypography-h6': {
      fontSize: 18,
      color: theme.palette.common.dark,
    },
  },
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


const CreateProduct = ({ open, handleDialog }) => {

  const { currentProduct, labelsList, tax_disc } = useSelector(({ productApp }) => productApp);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [isAddVD, setIsAddVD] = useState('tax');
  const [showLabels, setShowLabels] = useState(null);
  const [other_amounts, setOtherAmounts] = useState({
    type: null,
    title: '',
    value: 0,
    amount_type: 'Rate'
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const [values, setValues] = useState({
    limit: 0,
    name: '',
    description: '',
    price: 0,
    cover: '',
    labels: [],
    other_amounts: []
  });
  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      dispatch(uploadFile(formData)).then(a => {
        setValues({...values, cover: a.url})
      })
      .catch(err => {
        console.log(err)
      })
    },
  });

  const onShowLabels = event => {
    setShowLabels(event.currentTarget);
  };

  const onHideLabels = () => {
    setShowLabels(null);
  };


  const handleClickOA = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleCloseOA = () => {
    setAnchorEl(null);
  }

  const handleSelectOA = (val) => {
    console.log(val)
    setOtherAmounts({...other_amounts, amount_type: val})
    handleCloseOA()
  }

  const handleSelectOAType = (val) => {
    setOtherAmounts({...other_amounts, type: val})
    setIsAddVD(val)
  }

  const handleRemoveOA = (val) => {
      if(!val){
        setOtherAmounts({
          type: 'Rate',
          title: '',
          value: 0
        })
        setIsAddVD(null)
      } else {
        console.log(val)
      }
  }

  const handleAddOtherAmounts = (val) => {
    console.log(val)
    let oa = values.other_amounts;
     oa.push(other_amounts);
      setValues({...values, other_amounts: oa})
      setOtherAmounts({
        type: 'Rate',
        title: '',
        value: 0
      })   
      setIsAddVD(null)
  }






  const onClickLabelOption = label => {
    let newTags = [];
    let tags = values && values.labels ? values.labels : [];
    let ind = tags.find(a => a === label);

    if(ind){
      newTags = tags.filter(a => a !== label);
    } else {
      tags.push(label);
     newTags = tags;
    }
    
    setValues({ ...values, labels: newTags  })
    // dispatch(updateProductsLabel(checkedProducts, label.id));
    // updateCheckedProducts([]);
    // onHideLabels();
  };

  

  const handleChange = prop => event => {

    if(prop === 'limit' || prop === 'price' || prop === 'discount_price'){
      setValues({ ...values, [prop]: event.target.value >= 0 ? event.target.value : 0});
      setErrors({ ...errors, [prop]: '' });
    } else {
      setValues({ ...values, [prop]: event.target.value });
      setErrors({ ...errors, [prop]: '' });
    }

  };

  const checkValidations = () => {

    if (!values.name) {
      setErrors({ ...errors, name: requiredMessage });
    } else if (!values.price) {
      setErrors({ ...errors, price: 'Price is required!' });
    } else if (values.price <= 0) {
      setErrors({ ...errors, price: 'Price is required!' });
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    handleDialog();
    if (currentProduct) {
      dispatch(onUpdateProduct({ ...currentProduct, ...values }));
    } else { 
      dispatch(createProduct(values));
    }
  };



  const onAddVD = () => {
    setValues({
      ...values,
      phones: values.phones.concat({ phone: '', label: 'home' }),
    });
  };

  const onRemoveOARow = index => {
    const updatedList = [...values.other_amounts];
    updatedList.splice(index, 1);
    setValues({ ...values, other_amounts: updatedList });
  };

  const onChangeVD = (field, value, index) => {
    const updatedList = [...values.other_amounts];
    updatedList[index][field] = value;
    setValues({ ...values, other_amounts: updatedList });
    setErrors({ ...errors, other_amounts: '' });
  };

  const handleOAChange = (val, index, field) => {
      let oa = values.other_amounts;
        oa[index] = { ...oa[index], [field]: val }
      setValues({...values, other_amounts: oa})

  };  

  const handleOtherAmounts = (prop) => event => {
    console.log(prop)
    console.log(event)
    setOtherAmounts({...other_amounts, [prop]: event.target.value})

  }


  useEffect(() => {
    if(currentProduct){
      setValues(currentProduct) 
    }
  }, [currentProduct])

  return (
    <Dialog maxWidth="sm" fullWidth 
    open={true} 
      onClose={handleDialog} className={classes.dialogRoot}>
      <DialogTitle className={classes.dialogTitleRoot}>
        {currentProduct ? 'Edit Product Details' : 'Create New Product'}
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mb={{ xs: 6, md: 5 }}>
          <Box {...getRootProps()} mr={{ xs: 0, md: 5 }} mb={{ xs: 3, md: 0 }} className="pointer">
            <input {...getInputProps()} />
            <CmtAvatar size={70} src={values.cover} />
          </Box>
          <GridContainer>
            <Grid item xs={10} sm={10}>
              <AppTextInput
                fullWidth
                variant="outlined"
                value={values.name}
                label="Product Name"
                onChange={handleChange('name')}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
            <Box ml={1}>
              <Tooltip title="Labels">
                <IconButton size="small" onClick={onShowLabels}>
                  <LabelIcon color='primary' />
                </IconButton>
              </Tooltip>
            </Box>
            </Grid>
          
            {/* <Grid item xs={12} sm={7} /> */}
          </GridContainer>
        </Box>
        <GridContainer >
         <Grid item xs={12} sm={6} lg={6}>
         <Typography variant="h4">Selling Price</Typography>
              <br/>
                <AppTextInput
                  fullWidth
                  type="number"
                  variant="outlined"
                  label="amount"
                  value={values.price}
                  onChange={handleChange('price')}
                />
              </Grid>
         <Grid item xs={12} sm={6} lg={6}>
         <Typography variant="h4">Stock Limit</Typography>
              <br/>
              <AppTextInput
                fullWidth
                type="number"
                variant="outlined"
                label="Quantity"
                value={values.limit}
                onChange={handleChange('limit')}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6} /> */}
            
          </GridContainer>
        <GridContainer style={{ marginBottom: 12 }}>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              fullWidth
              multiline
              minRows={3}
              variant="outlined"
              value={values.description}
              label="Product Description"
              onChange={handleChange('description')}
              helperText={errors.description}
            />
          </Grid>
            </GridContainer>
          <CmtList
          data={values.other_amounts}
          renderRow={(item, index) => (
            <GridContainer style={{ marginBottom: 12 }} key={index}>
            {/* <Grid style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between"}} item xs={2}>
                
                </Grid> */}
                <Grid item xs={12} sm={12}>
                <Box display="flex" alignItems="center">
                <Checkbox
                  size="small"
                  checked={item.isActive}
                  onChange={() => onChangeVD('isActive', !item.isActive, index)}
                 />
              <Autocomplete
                 fullWidth
                 variant="outlined"
                 label="Title"
                 size="small"
                 value={item.name}
                 onChange={handleOtherAmounts}
                 options={tax_disc}
                />
         <IconButton size='small' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickOA}>
<MoreVertIcon fontSize='small'/>
</IconButton>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleCloseOA}
>
  <MenuItem onClick={(e) => handleOAChange('Rate', index, 'amount_type')}>Rate</MenuItem>
  <MenuItem onClick={(e) => handleOAChange('Amount', index, 'amount_type')}>Amount</MenuItem>
</Menu>
<AppTextInput
                  fullWidth
                  type="number"
                  variant="outlined"
                  label={item.amount_type}
                  value={item.value}
                  onChange={(e) => handleOAChange(e.taget.value, index, 'amount_type')}
                  style={{width: '200px'}}
                />
                    <IconButton size="small" onClick={() => onRemoveOARow(index)}>
                    <CancelIcon fontSize="small"/>
                  </IconButton>
          </Box>
              </Grid>
             
            </GridContainer>
          )}
        />
<Typography style={{marginLeft: '30px', marginBottom: '10px'}}>{isAddVD === 'tax' ? 'ADD TAX' : isAddVD === 'charges' ? 'Add CHARGES' : isAddVD === 'discounts' && 'LESS DISCOUNTS'}</Typography> 
<GridContainer >
       {isAddVD ? 
       <>
       <Grid item xs={12} sm={12}>
        <Box display="flex" alignItems="center">
        <IconButton style={{marginRight: '5px'}} size="small" onClick={() => handleRemoveOA()} >
            <CancelIcon fontSize="small"/>
          </IconButton>
              <Autocomplete
                 fullWidth
                 variant="outlined"
                 label="Title"
                 size="small"
                 value={other_amounts.name}
                 handleChange={handleOtherAmounts('name')}
                 options={tax_disc}
                />
         <IconButton size='small' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickOA}>
<MoreVertIcon fontSize='small'/>
</IconButton>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleCloseOA}
>
  <MenuItem onClick={() => handleSelectOA('Rate')}>Rate</MenuItem>
  <MenuItem onClick={() => handleSelectOA('Amount')}>Amount</MenuItem>
</Menu>
<AppTextInput
                  fullWidth
                  type="number"
                  variant="outlined"
                  label={other_amounts.amount_type}
                  value={other_amounts.value}
                  onChange={handleOtherAmounts('value')}
                  style={{width: '200px'}}
                />
       
          <IconButton 
         style={{marginLeft: '10px'}}
          size="small" 
            onClick={() => handleAddOtherAmounts()}
          >
             <DoneOutlineIcon style={{color: "green"}} fontSize="small"/>
         </IconButton>
          </Box>
          </Grid>
          </>
         : 
         <Grid item xs={12} sm={12}>
          <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box
          mb={{ xs: 6, md: 5 }}
          display="flex"
          alignItems="center"
          onClick={() => handleSelectOAType('tax')}
          className="pointer"
          color="primary.main">
          <AddCircleOutlineIcon />
            <Box ml={2}>TAX</Box>
        </Box>
        <Box
          mb={{ xs: 6, md: 5 }}
          display="flex"
          alignItems="center"
          onClick={() => handleSelectOAType('charges')}
          className="pointer"
          color="primary.main">
          <AddCircleOutlineIcon />
            <Box ml={2}>CHARGES</Box>
        </Box>
        <Box
          mb={{ xs: 6, md: 5 }}
          display="flex"
          alignItems="center"
          onClick={() => handleSelectOAType('discounts')}
          className="pointer"
          color="secondary.main">
          <RemoveCircleOutlineIcon />
            <Box ml={2}>DISCOUNTS</Box>
        </Box>
          </Box>
       
        </Grid>

      }
       
  </GridContainer>
        <Box display="flex" justifyContent="flex-end" mt={5} mb={4}>
          <Button onClick={handleDialog}>Cancel</Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={checkValidations}>
              Save
            </Button>
          </Box>
        </Box>
        <Menu anchorEl={showLabels} open={Boolean(showLabels)} onClose={onHideLabels}>
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
                {values && values.labels && values.labels.includes(item.id) && (
                  <Box ml="auto">
                    <DoneIcon className={classes.iconBlock} />
                  </Box>
                )}
              </Box>
            </MenuItem>
          )}
        />
      </Menu>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;

CreateProduct.prototype = {
  open: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func,
  selectedProduct: PropTypes.object,
};

CreateProduct.defaultProps = {
  selectedProduct: null,
};
