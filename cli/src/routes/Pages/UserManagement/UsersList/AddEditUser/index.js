import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import GridContainer from '../../../../../@jumbo/components/GridContainer';
import Grid from '@material-ui/core/Grid';
import AppTextInput from '../../../../../@jumbo/components/Common/formElements/AppTextInput';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
// import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import CancelIcon from '@material-ui/icons/Cancel';
// import { isValidEmail } from '../../../../../@jumbo/utils/commonHelper';
import { Typography, TextField, InputAdornment, IconButton } from '@material-ui/core';

// import {
//   DatePicker,
// } from '@material-ui/pickers';

//Icons
import { Visibility, VisibilityOff } from '@material-ui/icons';



//Redux
import { uploadFile } from '../../../../../redux/actions/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getRoles, createUser, updateUserById } from 'redux/actions/Crud';
// import { CLEAR_DATA, SET_INIT_OBJ } from 'redux/actions/types';



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
  selectEmpty: {
    marginTop: theme.spacing(4),
  },
}));

// function PhoneNumberInput({ onChange, value, ...other }) {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   useEffect(() => {
//     if (!phoneNumber && value) {
//       setTimeout(() => {
//         setPhoneNumber(value);
//       }, 300);
//     }
//   }, [phoneNumber, value]);


//   const onNumberChange = number => {
//     setPhoneNumber(number.formattedValue);
//     onChange(number.formattedValue);
//   };
//   return <NumberFormat {...other} onValueChange={onNumberChange} value={phoneNumber} format="(###) ###-####" />;
// }


const AddEditUser = ({ open, onCloseDialog }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(({ dataReducer }) => dataReducer);
  const [roles, setRoles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    birthDate: new Date(),
    roles: [],
    gender: 'male'
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {


      let fileData = acceptedFiles[0]; 
      let filename = acceptedFiles[0].name; 
      const data = new FormData();
      data.append("file", fileData);
      data.append("filename", filename);
      dispatch(uploadFile(data, 'profile'))
        .then(rs => {
            setValues({...values, dpUrl: rs.url})
        })
        .catch(err => {
          console.log(err)
        })
    },
  });
  
  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value})
  }

  const handleSubmit = () => {

    if(!selectedUser._id){

    dispatch(createUser(values))
    .then(res => {
      onCloseDialog()
    })
    .catch(err => {
      console.log(err.response)
    })
  } else {
    dispatch(updateUserById(selectedUser._id, values))
    .then(res => {
      onCloseDialog()
    })
    .catch(err => {
      console.log(err.response)
    })
  }
  }

  useEffect(() => {
    dispatch(getRoles())
    .then((res) => {
      setRoles(res)
      if(selectedUser._id){
        setValues({...values, 
          ...selectedUser,
           roles: [selectedUser.roles[0]._id]})
      } else {
      setValues({...values, roles: [ res[2] ? res[2]._id : res[0]._id]})
    }
    })
    .catch(err => {
      console.log(err)
    }); 
    return () => {
      setRoles([]);
      setValues({
        birthDate: new Date(),
        roles: [],
        gender: 'male'
      })
    }
  }, [])

  useEffect(() => {
      if(selectedUser._id){
        // delete selected._id;
        setValues({...values, ...selectedUser, roles: [selectedUser.roles[0]._id]})
      }
  }, [selectedUser, open])

  return (
    <Dialog open={open} onClose={onCloseDialog} className={classes.dialogRoot}>
      <DialogTitle className={classes.dialogTitleRoot}>{selectedUser._id ? 'Edit User Details' : 'Create New User'}</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mb={{ xs: 6, md: 5 }}>
          <Box {...getRootProps()} mr={{ xs: 0, md: 5 }} mb={{ xs: 3, md: 0 }} className="pointer">
            <input {...getInputProps()} />
            <CmtAvatar size={70} 
            src={values.dpUrl}
             />
          </Box>
          <GridContainer>
            <Grid item xs={12} sm={12}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="First name"
                value={values.firstName}
                onChange={handleChange('firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="Last name"
                value={values.lastName}
                onChange={handleChange('lastName')}
              />
            </Grid>
          </GridContainer>
        </Box>
        <Box mb={{ xs: 6, md: 5 }}>
        <GridContainer>
            <Grid item xs={12} sm={12}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="Home Address"
                value={values.address}
                onChange={handleChange('address')}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="Last name"
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
            <AppTextInput
                fullWidth
                variant="outlined"
                label="Contact #"
                value={values.contact}
                onChange={handleChange('contact')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AppTextInput
                fullWidth
                variant="outlined"
                label="Email Address"
                value={values.email_address}
                onChange={handleChange('email_address')}
              />
            </Grid>
          </GridContainer>
        </Box>
        <br/>
        <Typography align='center'>CREDENTIALS</Typography>
        <hr/>
        <br/>
        <GridContainer style={{ marginBottom: 12 }}>
          <Grid item xs={12} sm={8}>
            <AppTextInput
              fullWidth
              variant="outlined"
              label="Username"
              value={values.username}
              onChange={handleChange('username')}
              // value={company}
              // onChange={e => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
          id="role"
          select
          label="Role"
          value={values.roles[0]}
          onChange={e => {
            setValues({...values, roles: [e.target.value]});
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
            <option key={index} value={option._id}>
             {String(option.title).toUpperCase()}
            </option>
          ))}
        </TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
                <TextField
              id="input-with-icon-textfield"
              fullWidth
              variant="outlined"
              size="small"
              type={visible ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                    size='small'
                    onClick={() => setVisible(!visible)}
                    >
                    {!visible ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </GridContainer>
        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button 
          onClick={onCloseDialog}
          >Cancel</Button>
          <Box ml={2}>
            <Button variant="contained" color="primary" 
            onClick={handleSubmit}
            >
             {selectedUser._id ? 'Update' : 'Save'}
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
