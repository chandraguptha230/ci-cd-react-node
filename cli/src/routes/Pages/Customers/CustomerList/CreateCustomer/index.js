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
import AppSelectBox from '../../../../../@jumbo/components/Common/formElements/AppSelectBox';
import { requiredMessage } from '../../../../../@jumbo/constants/ErrorMessages';
import { createCustomer, onUpdateCustomer } from '../../../../../redux/actions/Customer';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import { isValidEmail } from '../../../../../@jumbo/utils/commonHelper';
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
}));

function NumberFormatCustom({ onChange, value, ...other }) {
  const [phoneNo, setPhone] = useState('');

  useEffect(() => {
    if (!phoneNo && value) {
      setTimeout(() => {
        setPhone(value);
      }, 300);
    }
  }, [phoneNo, value]);

  const onNumberChange = number => {
    setPhone(number.formattedValue);
    onChange(number.formattedValue);
  };

  return <NumberFormat {...other}  onValueChange={onNumberChange} value={phoneNo} format="(###) ###-####" />;
}

const labels = [
  { title: 'Home', slug: 'home' },
  { title: 'Office', slug: 'office' },
  { title: 'Other', slug: 'other' },
];

const CreateCustomer = ({ open, handleDialog }) => {
  const { currentCustomer } = useSelector(({ customerApp }) => customerApp);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState({ 
    phones:[{phone: '', label: 'home'}],
    tags: []
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

  const onAddPhoneRow = () => {
    setValues({
      ...values,
      phones: values.phones.concat({ phone: '', label: 'home' }),
    });
  };

  const onRemovePhoneRow = index => {
    const updatedList = [...values.phones];
    updatedList.splice(index, 1);
    setValues({ ...values, phones: updatedList });
  };

  const onAddPhoneNo = (number, index) => {
    const updatedList = [...values.phones];
    updatedList[index].phone = number;
    setValues({ ...values, phones: updatedList });
    setErrors({ ...errors, phones: '' });
  };

  const onSelectLabel = (value, index) => {
    const updatedList = [...values.phones];
    updatedList[index].label = value;
    setValues({ ...values, phones: updatedList });
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    setErrors({ ...errors, [prop]: '' });
  };

  const isPhonesMultiple = values.phones.length > 1;

  const checkValidations = () => {
    const phoneNumbers = values.phones.filter(item => item.phone.trim());
    if (!values.name) {
      setErrors({ ...errors, name: requiredMessage });
    } else if (!values.email) {
      setErrors({ ...errors, email: requiredMessage });
    } else if (!isValidEmail(values.email)) {
      setErrors({ ...errors, email: requiredMessage });
    } else {
      handleSubmit(phoneNumbers);
    }
  };

  const handleSubmit = phoneNumbers => {
    let { limit, balance } = values;
    const customer = {
      ...values,
      phones: phoneNumbers,
      limit: limit ? limit : 0,
      balance: balance ? balance : 0,
    };
    if (currentCustomer) {
      console.log(currentCustomer)
      dispatch(onUpdateCustomer({ ...currentCustomer, ...customer }));
    } else {
      dispatch(createCustomer({...currentCustomer, ...customer}));
    }
    handleDialog();
  };


  useEffect(() => {
    if(currentCustomer){
      setValues(currentCustomer)
    }
  }, [currentCustomer])


  return (
    <Dialog open={open} onClose={handleDialog} className={classes.dialogRoot}>
      <DialogTitle className={classes.dialogTitleRoot}>
        {currentCustomer ? 'Edit Customer Details' : 'Create New Customer'}
      </DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mb={{ xs: 6, md: 5 }}>
          <Box {...getRootProps()} mr={{ xs: 0, md: 5 }} mb={{ xs: 3, md: 0 }} className="pointer">
            <input {...getInputProps()} />
            <CmtAvatar size={70} src={values.cover} />
          </Box>
          <GridContainer>
            <Grid item xs={12} sm={12}>
              <AppTextInput
                fullWidth
                variant="outlined"
                value={values.name}
                label="Complete Name"
                onChange={handleChange('name')}
                helperText={errors.name}
              />
            </Grid>
            {/* <Grid item xs={12} sm={7} /> */}
          </GridContainer>
        </Box>
        <GridContainer style={{ marginBottom: 12 }}>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              fullWidth
              variant="outlined"
              value={values.email}
              label="Email Address"
              onChange={handleChange('email')}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              fullWidth
              variant="outlined"
              value={values.address}
              label="Home Address"
              onChange={handleChange('address')}
              helperText={errors.address}
            />
          </Grid>
        </GridContainer>

        <CmtList
          data={values.phones}
          renderRow={(item, index) => (
            <GridContainer style={{ marginBottom: 12 }} key={index}>
              <Grid item xs={12} sm={isPhonesMultiple ? 6 : 8}>
                <AppTextInput
                  fullWidth
                  variant="outlined"
                  label="Phones"

                  value={item.phone}
                  onChange={number => onAddPhoneNo(number, index)}
                  helperText={errors.phones}
                  InputProps={{
                  
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </Grid>
              <Grid item xs={isPhonesMultiple ? 9 : 12} sm={4}>
                <AppSelectBox
                  fullWidth
                  data={labels}
                  label="Label"
                  valueKey="slug"
                  variant="outlined"
                  labelKey="title"
                  value={item.label}
                  onChange={e => onSelectLabel(e.target.value, index)}
                />
              </Grid>
              {isPhonesMultiple && (
                <Grid item xs={3} sm={2}>
                  <IconButton onClick={() => onRemovePhoneRow(index)}>
                    <CancelIcon />
                  </IconButton>
                </Grid>
              )}
            </GridContainer>
          )}
        />

        <Box
          mb={{ xs: 6, md: 5 }}
          display="flex"
          alignItems="center"
          onClick={onAddPhoneRow}
          className="pointer"
          color="primary.main">
          <AddCircleOutlineIcon />
          <Box ml={2}>Add More</Box>
        </Box>

        <GridContainer>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              fullWidth
              type="number"
              variant="outlined"
              label="Credit Limit"
              value={values.limit}
              onChange={handleChange('limit')}
            />
          </Grid>
          <Grid item xs={12} sm={7} />
        </GridContainer>

        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button onClick={handleDialog}>Cancel</Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={checkValidations}>
              Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCustomer;

CreateCustomer.prototype = {
  open: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func,
  selectedCustomer: PropTypes.object,
};

CreateCustomer.defaultProps = {
  selectedCustomer: null,
};
