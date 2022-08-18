import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, Popover, Tooltip, useTheme } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import EmailIcon from '@material-ui/icons/Email';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ChatIcon from '@material-ui/icons/Chat';
import CmtGridView from '../../../../../@coremat/CmtGridView';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import LayoutContext from '../../../../../@coremat/CmtLayouts/LayoutContext';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-header-root': {
      paddingTop: 4,
      paddingBottom: 4,
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
  iconRoot: {
    color: alpha(theme.palette.common.white, 0.38),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },
}));

const actions = [
  {
    label: 'Create New',
  },
  {
    label: 'Close',
  },
];

const applications = [
  {
    name: 'Contacts',
    icon: <ContactMailIcon style={{ color: '#8DCD03' }} />,
    bgColor: '#E8F5CD',
    path: '/apps/contact',
  },
  {
    name: 'Contacts',
    icon: <ContactMailIcon style={{ color: '#8DCD03' }} />,
    bgColor: '#E8F5CD',
    path: '/apps/contact',
  },
  // {
  //   name: 'Contacts',
  //   icon: <ContactMailIcon style={{ color: '#8DCD03' }} />,
  //   bgColor: '#E8F5CD',
  //   path: '/apps/contact',
  // }
];

const appItem = (item, index, onClick) => {
  return (
    <Box
      key={index}
      py={2}
      className="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={() => onClick(item.path)}>
      <CmtAvatar style={{ backgroundColor: item.bgColor }} size={62}>
        {item.icon}
      </CmtAvatar>
      <Box mt={5} fontSize={16} fontWeight="bold" color="#666666">
        {item.name}
      </Box>
    </Box>
  );
};

const AppsMenu = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isSidebarOpen, setSidebarOpen, sidebarWidth, setSidebarWidth } = useContext(LayoutContext);

  const theme = useTheme();

  const onOpenPopOver = event => {
    setAnchorEl(event.currentTarget);
    setSidebarOpen(!isSidebarOpen);
  };

  const onClosePopOver = () => {
    setAnchorEl(null);
  };

  const handleMoreClick = e => {
    if (String(e.label).toLowerCase() === 'close') {
      onClosePopOver();
      return;
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onClickApp = path => {
    history.push(path);
    onClosePopOver();
  };

  return (
    <div>
      <Tooltip title="Stores">
        <IconButton onClick={onOpenPopOver} className={clsx(classes.iconRoot, 'Cmt-appIcon')}>
          <AppsIcon />
        </IconButton>
      </Tooltip>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClosePopOver}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <CmtCard className={classes.cardRoot}>
          <CmtCardHeader
            title="Stores"
            actionsPos="top-corner"
            actions={actions}
            actionHandler={handleMoreClick}
            separator={{
              color: theme.palette.borderColor.dark,
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          />
          <CmtCardContent>
            {applications.length > 0 ? (
              <CmtGridView
                itemPadding={20}
                column={applications.length > 1 ? 2 : 1}
                data={applications}
                renderRow={(item, index) => appItem(item, index, onClickApp)}
              />
            ) : (
              <Typography variant="body2">No applications found</Typography>
            )}
          </CmtCardContent>
        </CmtCard>
      </Popover>
    </div>
  );
};

export default AppsMenu;
