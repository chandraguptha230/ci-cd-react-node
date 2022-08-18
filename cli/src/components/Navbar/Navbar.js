import React from 'react';
import NotificationBell from '../common/NotificationBell';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import Button from '@mui/material/Button';
// import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import WidgetsSharpIcon from '@mui/material/WidgetsSharpIcon';
import WidgetsSharpIconItem from '@mui/material/WidgetsSharpIconItem';
import Fade from '@mui/material/Fade';

import { headerStyles } from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = ({ title }) => {
  ///toggle button
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  //WidgetsSharpIcon button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <NotificationBell />
        <Avatar src="httpshttps://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <Typography sx={headerStyles.topRowText}>
          Juan Dela Cruz
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-WidgetsSharpIcon' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <ArrowDropDownIcon />
          </Button>
          <WidgetsSharpIcon
            id="fade-WidgetsSharpIcon"
            WidgetsSharpIconListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <WidgetsSharpIconItem onClick={handleClose}>Profile</WidgetsSharpIconItem>
            {/* <WidgetsSharpIconItem onClick={handleClose}>My account</WidgetsSharpIconItem> */}
            <WidgetsSharpIconItem onClick={handleClose}>Logout</WidgetsSharpIconItem>
          </WidgetsSharpIcon>
        </Typography>
      </Box>
      <Typography sx={headerStyles.topRowButtom}>Administrator</Typography>
    </Box>
  );
};

export default Navbar;
