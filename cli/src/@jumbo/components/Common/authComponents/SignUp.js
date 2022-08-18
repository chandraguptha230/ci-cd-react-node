import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Box} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IntlMessages from "../../../utils/IntlMessages";
import Button from "@material-ui/core/Button";
import ContentLoader from "../../ContentLoader";
import {alpha, makeStyles} from "@material-ui/core/styles";
import CmtImage from "../../../../@coremat/CmtImage";
import Typography from "@material-ui/core/Typography";
import {CurrentAuthMethod} from "../../../constants/AppConstants";
import AuthWrapper from "./AuthWrapper";
import {NavLink} from "react-router-dom";

//Services
import {AuhMethods} from "../../../../services/auth";

//Redux
import {register} from "../../../../redux/actions/Auth";

const useStyles = makeStyles(theme => ({
  authThumb: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    [theme.breakpoints.up("md")]: {
      width: "50%",
      order: 2
    }
  },
  authContent: {
    padding: 30,
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
  textCapital: {
    textTransform: "capitalize"
  },
  textAcc: {
    textAlign: "center",
    "& a": {
      marginLeft: 4
    }
  },
  alrTextRoot: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right"
    }
  }
}));

//variant = 'default', 'standard', 'bgColor'
const SignUp = ({
  method = CurrentAuthMethod,
  variant = "default",
  wrapperVariant = "default"
}) => {
  const [ values, setValues ] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles({variant});

  const onSubmit = () => {
    dispatch(register(values));
  };

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };

  return (
    <AuthWrapper variant={wrapperVariant}>
      {variant === "default" ? (
        <Box className={classes.authThumb}>
          <CmtImage src={"/images/auth/sign-up-img.png"} />
        </Box>
      ) : null}
      <Box className={classes.authContent}>
        {/* <Box mb={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <CmtImage src={'/images/logo.png'} />
        </Box> */}
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          Create an account
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.firstName" />}
              fullWidth
              size="small"
              onChange={handleChange("firstName")}
              value={values.firstName}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.lastName" />}
              fullWidth
              size="small"
              onChange={handleChange("lastName")}
              value={values.lastName}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.phone" />}
              fullWidth
              size="small"
              onChange={handleChange("contact")}
              value={values.contact}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.email" />}
              fullWidth
              onChange={handleChange("email_address")}
              value={values.email_address}
              margin="normal"
              variant="outlined"
              size="small"
              className={classes.textFieldRoot}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label={<IntlMessages id="appModule.username" />}
              fullWidth
              onChange={handleChange("username")}
              value={values.username}
              margin="normal"
              variant="outlined"
              size="small"
              className={classes.textFieldRoot}
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
              size="small"
              className={classes.textFieldRoot}
            />
          </Box>

          <Box
            display="flex"
            flexDirection={{xs: "column", sm: "row"}}
            alignItems={{sm: "center"}}
            justifyContent={{sm: "space-between"}}
            mb={3}
          >
            <Box mb={{xs: 2, sm: 0}}>
              <Button onClick={onSubmit} variant="contained" color="primary">
                <IntlMessages id="appModule.regsiter" />
              </Button>
            </Box>

            {/* <Typography className={classes.alrTextRoot}>
              <NavLink to="/signin">
                <IntlMessages id="signUp.alreadyMember" />
              </NavLink>
            </Typography> */}
          </Box>
        </form>

        <Box mb={3}>{dispatch(AuhMethods[method].getSocialMediaIcons())}</Box>

        <Typography className={classes.textAcc}>
          Have an account?
          <NavLink to="/signin">Sign In</NavLink>
        </Typography>
        <ContentLoader />
      </Box>
    </AuthWrapper>
  );
};

export default SignUp;
