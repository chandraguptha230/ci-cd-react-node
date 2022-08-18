import React from 'react';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useSelector } from 'react-redux';
import CmtList from '../../../../../@coremat/CmtList';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from './index.style';
import { Block, CheckCircleOutline } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';


//Icons
import { HomeWorkOutlined, CakeOutlined, Wc} from '@material-ui/icons'
import moment from 'moment';



const UserDetailView = ({ open, onCloseDialog }) => {
  const classes = useStyles();
  const { selectedUser } = useSelector(({ dataReducer }) => dataReducer);


  const { fullName, email_address, status, business, role, contact, dpUrl, starred, gender, birthDate, age, address } = selectedUser;

  return (
    <Dialog open={open} onClose={onCloseDialog} className={classes.dialogRoot}>
      <Box className={classes.userInfoRoot}>
        <Box mr={3} display="flex" alignItems="center">
          <Box className={classes.avatarView} mr={{ xs: 4, md: 6 }}>
            <CmtAvatar size={70} src={dpUrl} alt={fullName} />
          </Box>

          <Box mt={-2}>
            <Box display="flex" alignItems="center">
              <Typography className={classes.titleRoot}>{fullName}</Typography>
              <Box ml={1}>
                <Checkbox
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
                  checked={starred}
                />
              </Box>
            </Box>
            {(role || business && business.name) && (
              <Box mt={-1}>
                {role && <Typography className={classes.subTitleRoot}>{role}</Typography>}
                {business && business.name && <Typography className={classes.subTitleRoot}>@{business && business.name}</Typography>}
              </Box>
            )}
          </Box>
        </Box>
        <Box ml="auto" mt={-2} display="flex" alignItems="center">
          <Box ml={1}>
            <Tooltip title={status}>
              <IconButton aria-label="filter list">
                {status === 'suspended' && <Block color="primary" />}
                {status === 'active' && <CheckCircleOutline color="primary" />}
              </IconButton>
            </Tooltip>
          </Box>
          <Box ml={1}>
            <IconButton onClick={onCloseDialog}>
              <ClearIcon   />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box px={6} py={5}>
        <Box mb={3} component="p" color="common.dark">
          Basic Details
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 5 }}>
          <Wc />
          <Box ml={5}>
                <Box  display="flex" alignItems="center">
                  <Box color="text.secondary">{String(gender).toUpperCase()}</Box>
                  <Box ml={2} className={classes.labelRoot}>
                    Gender
                  </Box>
                </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 5 }}>
          <CakeOutlined />
          <Box ml={5}>
                <Box  display="flex" alignItems="center">
                  <Box color="text.secondary">{moment(birthDate).format('LL')}</Box>
                  <Box ml={2} className={classes.labelRoot}>
                    Birth Date
                  </Box>
                </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 5 }}>
          <HomeWorkOutlined />
          <Box ml={5}>
                <Box  display="flex" alignItems="center">
                  <Box color="text.secondary">{address}</Box>
                  <Box ml={2} className={classes.labelRoot}>
                    Home
                  </Box>
                </Box>
          </Box>
        </Box>
      </Box>
      <Box px={6} py={5}>
        <Box mb={3} component="p" color="common.dark">
          Contact Details
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 7 }}>
          <EmailIcon />
          <Box ml={5} color="primary.main" component="p" className="pointer">
              <Box  display="flex" alignItems="center">
                      <Box color="text.secondary">{email_address}</Box>
                      <Box ml={2} className={classes.labelRoot}>
                        Email
                      </Box>
                    </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 5 }}>
          <PhoneIcon />
          <Box ml={5}>
                <Box  display="flex" alignItems="center">
                  <Box color="text.secondary">{contact}</Box>
                  <Box ml={2} className={classes.labelRoot}>
                    Mobile
                  </Box>
                </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default UserDetailView;

UserDetailView.prototype = {
  open: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func,
};
