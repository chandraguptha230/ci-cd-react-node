import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';

import CustomDialog from './Dialog';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<EditIcon />} onClick={handleClickOpen}>
          Edit Profile
        </Button>

        <Button variant="outlined"  endIcon={<LogoutIcon />} onClick={handleClose}>
          Sign Out
        </Button>
    </Stack>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
         Hello anu  kuno m karuyag pabalyuan?
         \
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="name"
                fullWidth
                variant="standard"
          />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
          />

      <Stack direction="row" spacing={3}>

      <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Street Address"
                type="address"
                fullWidth
                variant="standard"
          />

<TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Coontact Number"
                type="phone"
                fullWidth
                variant="standard"
          />

      </Stack>

      <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
          />

        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}