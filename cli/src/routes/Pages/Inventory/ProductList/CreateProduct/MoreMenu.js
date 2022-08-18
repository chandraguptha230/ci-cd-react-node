import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const ITEM_HEIGHT = 48;

export default function LongMenu({
    options,
    selected,
    onSelect,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (e) => {
    onSelect(e);
    handleClose()
  };


  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        size="small"
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="small"/>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === selected} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
