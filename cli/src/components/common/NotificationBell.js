import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const notifications = [
    {
        id: 0,
        label: 'First notification'
    },
    {
        id: 1,
        label: 'Second notification'
    },
];

const NotificationBell = ({ iconColor }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const newNotifications = `You have ${notifications.length} new notifications!`;
    const noNotifications = 'No new notifications';

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    <Badge
                        badgeContent={notifications.length}
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default NotificationBell
