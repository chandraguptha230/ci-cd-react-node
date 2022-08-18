import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import AppTextInput from '../../../../@jumbo/components/Common/formElements/AppTextInput';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import CmtList from '../../../../@coremat/CmtList';
import IconButton from '@material-ui/core/IconButton';
import AppSelectBox from '../../../../@jumbo/components/Common/formElements/AppSelectBox';
import { requiredMessage } from '../../../../@jumbo/constants/ErrorMessages';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { DialogTitle, TextField, InputAdornment}  from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import { isValidEmail } from '../../../../@jumbo/utils/commonHelper';
import { addNewUser, updateUser, uploadFile } from '../../../../redux/actions/Users';

//Icons
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    position: 'relative',
  },
  dialogTitleRoot: {
    '& .MuiTypography-h6': {
      fontSize: 16,
      color: theme.palette.common.dark,
    },
  },
}));

function PhoneNumberInput({ onChange, value, ...other }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (!phoneNumber && value) {
      setTimeout(() => {
        setPhoneNumber(value);
      }, 300);
    }
  }, [phoneNumber, value]);

  const onNumberChange = number => {
    setPhoneNumber(number.formattedValue);
    onChange(number.formattedValue);
  };

  return <NumberFormat {...other} onValueChange={onNumberChange} value={phoneNumber} format="(###) ###-####" />;
}

const labels = [
  { title: 'Home', slug: 'home' },
  { title: 'Office', slug: 'office' },
  { title: 'Other', slug: 'other' },
];

const roles = [
  { id: 3, name: 'cashier' },
  { id: 4, name: 'admin' }
];




const AddEditUser = ({ open, onCloseDialog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(({ usersReducer }) => usersReducer.currentUser);
  const [visible, setVisible] = useState(false);
  const [dpUrl, setDpUrl] = useState('');
  const [phones, setPhones] = useState([{ phone: '', label: 'home' }]);

  const [phoneError, setPhoneError] = useState('');
  
  
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});


  const handleChange = prop => e => {
    setValues({...values, [prop]: e.target.value});
    setErrors({...errors, [prop]: ''});
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {

      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      dispatch(uploadFile(formData)).then(a => {
        setDpUrl(a.url)
      })
      .catch(err => {
        console.log(err)
      })

    },
  });


  useEffect(() => {
    if (currentUser) {
      setValues({ ...currentUser, roles: currentUser.roles[0].name})
      setDpUrl(currentUser.dpUrl);
      setPhones(currentUser.phones);
    }
  }, [currentUser]);

  const onPhoneNoAdd = (number, index) => {
    const updatedList = [...phones];
    updatedList[index].phone = number;
    setPhones(updatedList);
    setPhoneError('');
  };

  const onPhoneRowRemove = index => {
    const updatedList = [...phones];
    updatedList.splice(index, 1);
    setPhones(updatedList);
  };

  const onPhoneRowAdd = () => {
    setPhones(phones.concat({ phone: '', label: 'home' }));
  };

  const onLabelChange = (value, index) => {
    const updatedList = [...phones];
    updatedList[index].label = value;
    setPhones(updatedList);
  };

  const onSubmitClick = () => {
    const phoneNumbers = phones.filter(item => item.phone.trim());
    if (!values.name) {
      setErrors({...errors, name: requiredMessage })
    } else if (!values.email) {
      setErrors({...errors, email: requiredMessage })
    } else if (!isValidEmail(values.email)) {
      setErrors({...errors, email: 'Invalid Email Address' })
    } else if (phoneNumbers.length === 0) {
      setPhoneError(requiredMessage);
    } else {
      onUserSave(phoneNumbers);
    }
  };

  const onUserSave = phoneNumbers => {
    const userDetail = {
      ...values,
      dpUrl,
      phones: phoneNumbers
    };

    if (currentUser) {
      dispatch(
        updateUser({ ...currentUser, ...userDetail }, (a) => {
          onCloseDialog();
        }),
      );
    } else {
      dispatch(
        addNewUser(userDetail, (a) => {
          onCloseDialog();
        }),
      );
    }
  };

  const isPhonesMultiple = phones.length > 1;
  return (
    <Dialog open={open} onClose={onCloseDialog} className={classes.dialogRoot}>
      <DialogTitle className={classes.dialogTitleRoot}>{currentUser ? 'Edit User Details' : 'Create New User'}</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mb={{ xs: 6, md: 5 }}>
          <Box {...getRootProps()} mr={{ xs: 0, md: 5 }} mb={{ xs: 3, md: 0 }} className="pointer">
            <input {...getInputProps()} />
            <CmtAvatar size={70} src={dpUrl} />
          </Box>
          <GridContainer>
            <Grid item xs={12} sm={12}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="Full Name"
                value={values.name}
                onChange={handleChange('name')}
                helperText={errors.name}
              />
            </Grid>
          </GridContainer>
        </Box>
        <Box mb={{ xs: 6, md: 5 }}>
          <AppTextInput
            fullWidth
            variant="outlined"
            label="Complete Address"
            value={values.address}
            onChange={handleChange('address')}
            helperText={errors.address}
          />
        </Box>
        <CmtList
          data={phones}
          renderRow={(item, index) => (
            <GridContainer style={{ marginBottom: 2 }} key={index}>
              <Grid item xs={12} sm={isPhonesMultiple ? 6 : 8}>
                <AppTextInput
                  fullWidth
                  variant="outlined"
                  label="Phone"
                  onChange={number => onPhoneNoAdd(number, index)}
                  helperText={phoneError}
                  InputProps={{
                    inputComponent: PhoneNumberInput,
                    inputProps: { value: item.phone },
                  }}
                />
              </Grid>
              <Grid item xs={isPhonesMultiple ? 10 : 12} sm={4}>
                <AppSelectBox
                  fullWidth
                  data={labels}
                  label="Label"
                  valueKey="title"
                  variant="outlined"
                  labelKey="title"
                  value={item.label}
                  onChange={e => onLabelChange(e.target.value, index)}
                />
              </Grid>
              {index > 0 && (
                <Grid container item xs={2} sm={2} justifyContent="center" alignItems="center">
                  <IconButton color="inherit" onClick={() => onPhoneRowRemove(index)} size="small">
                    <CancelIcon />
                  </IconButton>
                </Grid>
              )}
            </GridContainer>
          )}
        />
        <Box mb={{ xs: 6, md: 5 }} display="inline-flex" alignItems="center" className="pointer">
          <Button color="primary" onClick={onPhoneRowAdd} startIcon={<AddCircleOutlineIcon />}>
            Add More
          </Button>
        </Box>
        <GridContainer style={{ marginBottom: 12 }}>
          <Grid item xs={12} sm={8}>
            <AppTextInput
              fullWidth
              variant="outlined"
              label="Email Address"
              value={values.email}
              onChange={handleChange('email')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
              <TextField
            fullWidth
          id="role"
          select
          label="Role"
          value={values.roles}
          onChange={e => {
            setValues({...values, roles: e.target.value});
          }}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          size="small"
          >
             {/* <option value="">
              
            </option> */}
          {roles.map((option, index) => (
            <option key={index} value={option.name}>
             {String(option.name).toUpperCase()}
            </option>
          ))}
        </TextField>

          </Grid>
          <Grid item xs={12} sm={12}>
            <AppTextInput
              fullWidth
              type={visible ? 'text' : 'password'}
              variant="outlined"
              label="Password"
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setVisible(!visible)}>
                   {visible ?<VisibilityOffIcon/> : < VisibilityIcon/>}
                   </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
          </Grid>
        </GridContainer>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button onClick={onCloseDialog}>Cancel</Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={onSubmitClick}>
            {currentUser ? 'Update' : 'Save'}  
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditUser;

AddEditUser.prototype = {
  open: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func,
};
