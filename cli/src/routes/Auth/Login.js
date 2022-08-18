import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import IntlMessages from "../../@jumbo/utils/IntlMessages";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";
// import {AuhMethods} from "../../services/auth";
import ContentLoader from "../../@jumbo/components/ContentLoader";
import {alpha, makeStyles} from "@material-ui/core/styles";
import CmtImage from "../../@coremat/CmtImage";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {CurrentAuthMethod} from "../../@jumbo/constants/AppConstants";
import {NavLink} from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import {
  emailNotValid,
  requiredMessage,
  passwordLength
} from "../../@jumbo/constants/ErrorMessages";
import {isValidEmail} from "../../@jumbo/utils/commonHelper";

//Redux
import {loginUser} from "../../redux/actions/Auth";

const useStyles = makeStyles(theme => ({
  authThumb: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      order: 2
    }
  },
  authContent: {
    padding: 25,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: props => (props.variant === "default" ? "50%" : "100%"),
      order: 1
    },
    [theme.breakpoints.up("xl")]: {
      padding: 50
    }
  },
  titleRoot: {
    marginBottom: 14,
    color: theme.palette.text.primary
  },
  textFieldRoot: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: alpha(theme.palette.common.dark, 0.12)
    }
  },
  formcontrolLabelRoot: {
    "& .MuiFormControlLabel-label": {
      fontSize: 14,
      [theme.breakpoints.down("xs")]: {
        fontSize: 12
      }
    }
  }
}));

//variant = 'default', 'standard'
const SignIn = ({
  method = CurrentAuthMethod,
  variant = "default",
  wrapperVariant = "default"
}) => {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles({variant});

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
    setErrors({...errors, [prop]: ""});
  };

  const handleErrors = () => {
    if (!values.email) {
      setErrors({...errors, email: requiredMessage});
      return true;
    } else if (!isValidEmail(values.email)) {
      setErrors({...errors, email: emailNotValid});
      return true;
    } else if (!values.password) {
      setErrors({...errors, password: requiredMessage});
      return true;
    } else if (values.password.length < 8) {
      setErrors({...errors, password: passwordLength});
      return true;
    } else {
      return false;
    }
  };

  //  const onSubmitClick = () => {
  //     const phoneNumbers = phones.filter(item => item.phone.trim());
  //     if (!firstName) {
  //       setFirstNameError(requiredMessage);
  //     } else if (!email) {
  //       setEmailError(requiredMessage);
  //     } else if (!isValidEmail(email)) {
  //       setEmailError(emailNotValid);
  //     } else if (phoneNumbers.length === 0) {
  //       setPoneError(requiredMessage);
  //     } else {
  //       onUserSave(phoneNumbers);
  //     }
  //   };
  const onSubmit = e => {
    e.preventDefault();
    const isError = handleErrors();
    if (!isError) {
      dispatch(loginUser(values));
    }
  };

  return (
    <AuthWrapper variant={wrapperVariant}>
      {variant === "default" ? (
        <Box className={classes.authThumb}>
          <CmtImage src={"/images/auth/login-img.png"} />
        </Box>
      ) : null}
      <Box className={classes.authContent}>
        <Box
          mb={7}
          sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
        >
          <CmtImage
            style={{
              height: 170,
              width: 170
            }}
            src={"/images/AjA18.png"}
          />
        </Box>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          Login
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.email" />}
              fullWidth
              onChange={handleChange("email")}
              value={values.email}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
              helperText={errors.email}
              error={errors.email}
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="password"
              label={<IntlMessages id="appModule.password" />}
              fullWidth
              onChange={handleChange("password")}
              value={values.password}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
              helperText={errors.password}
              error={errors.password}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <FormControlLabel
              className={classes.formcontrolLabelRoot}
              control={<Checkbox name="checkedA" />}
              label="Remember me"
            />

            <Box
              fontSize={{lg: 14, xs: 12}}
              style={{textAlign: "end"}}
              component="p"
            >
              <NavLink to="/forgot-password">
                <IntlMessages id="appModule.forgotPassword" />
              </NavLink>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Button type="submit" variant="contained" color="primary">
              <IntlMessages id="appModule.signIn" />
            </Button>
            {/* 
            <Box component="p" fontSize={{ xs: 12, sm: 16 }}>
              <NavLink to="/signup">
                <IntlMessages id="signIn.signUp" />
              </NavLink>
            </Box> */}
          </Box>
        </Box>
        {/* 
        {dispatch(AuhMethods[method].getSocialMediaIcons())} */}

        <ContentLoader />
      </Box>
    </AuthWrapper>
  );
};

export default SignIn;
