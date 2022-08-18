
import * as React from 'react';
import Box from '@mui/material/Box';

import { intranet } from '../../../../../../../@fake-db';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { alpha, makeStyles } from '@material-ui/core/styles';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';
import FilterVintageSharpIcon from '@mui/icons-material/FilterVintageSharp';
// USER DATA

const useStyles = makeStyles(theme => ({
  actionMenu: {
    '& button': {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
      },
    },
  },
  cardMediaRoot: {
    position: 'relative',
    marginBottom: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: alpha(theme.palette.common.black, 0.6),
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  },
  cardMediaContent: {
    padding: '40px 24px',
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    '& .Cmt-badge-avatar': {
      border: `solid 2px ${theme.palette.success.main}`,
      padding: 5,
      borderRadius: '15%',
    },
    '& .Cmt-badge': {
      padding: 0,
      backgroundColor: 'transparent',
      marginBottom: -36,
      marginLeft: -15,
    },
    '& .Cmt-user-info': {
      marginTop: 15,
      '& .Cmt-title': {
        fontSize: 16,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },
  avatarRoot: {
    border: `solid 2px ${theme.palette.common.white}`,
  },
  Buttons: {
    padding: '40px 24px',
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

}));

const UserDetail = () => {
  const { userDetails } = intranet;
  const classes = useStyles();

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonRoundedIcon className={classes.inputIcons} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={userDetails.name} disabled fullWidth variant="standard" />
      </Box>
      <br />

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonRoundedIcon className={classes.inputIcons} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={userDetails.email} disabled fullWidth variant="standard" />
      </Box>
      <br />

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <PersonRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={userDetails.birthdate} disabled  variant="standard" />

        <PermPhoneMsgRoundedIcon className={classes.inputIcons} sx={{ color: 'action.active',  mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={userDetails.phone} disabled  variant="standard" />
      </Box>
      <br />

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonPinCircleRoundedIcon className={classes.inputIcons} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"label={userDetails.address} disabled fullWidth variant="standard" />
      </Box>
    <br />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonPinCircleRoundedIcon className={classes.inputIcons} sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  label={userDetails.bio} disabled fullWidth variant="standard" />
      </Box>
    </Box>
  );
}

export default UserDetail;