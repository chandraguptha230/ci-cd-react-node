import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, MenuList, Paper, Popover, Typography } from '@material-ui/core';
import CmtAvatar from '../../../../@coremat/CmtAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { CurrentAuthMethod } from '../../../constants/AppConstants';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarThemeContext from '../../../../@coremat/CmtLayouts/SidebarThemeContext/SidebarThemeContext';
import LayoutContext from '../../../../@coremat/CmtLayouts/LayoutContext';

//Redux
import { logout } from '../../../../redux/actions/Auth';

//Services
import { AuthMethods } from '../../../../services/auth';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '30px 16px 12px 16px',
    borderBottom: props => `solid 1px ${props.sidebarTheme.borderColor}`,
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: props => props.sidebarTheme.textDarkColor,
    marginBottom: 8,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 0.25,
  },
}));

const SidebarHeader = () => {
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const { setSidebarOpen } = useContext(LayoutContext);

  const classes = useStyles({ sidebarTheme });
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSidebarOpen(false)
  };

  const open = Boolean(anchorEl);

  const onLogoutClick = () => {
    handlePopoverClose();
    dispatch(logout());
    dispatch(AuthMethods[m]);

  };

  return (
    <div className={classes.root}>
      <CmtAvatar src={'https://via.placeholder.com/150'} alt="User Avatar" />
      <div className={classes.userInfo} onClick={handlePopoverOpen}>
        <div
          className="pointer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <div className="mr-2">
            <Typography className={classes.userTitle} component="h3" variant="h6">
            Jason Brown
            </Typography>
            <Typography className={classes.userSubTitle}>jasonbrown@gmail.com</Typography>
          </div>
          <ArrowDropDownIcon />
        </div>
      </div>

      {open && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          container={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}>
          <Paper elevation={8}>
            <MenuList>
              <NavLink style={{color: 'inherit'}} to="/profile" onClick={handlePopoverClose}>
              <MenuItem >
                <PersonIcon />
                <div className="ml-2">Profile</div>
              </MenuItem>
              </NavLink>
              <MenuItem onClick={onLogoutClick}>
                <ExitToAppIcon />
                <div className="ml-2">Logout</div>
              </MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      )}
    </div>
  );
};

export default SidebarHeader;
