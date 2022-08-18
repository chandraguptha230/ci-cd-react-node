import React from 'react';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import CmtAvatar from '../../../../../@coremat/CmtAvatar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { setCurrentCustomer, updateStarredStatus } from '../../../../../redux/actions/Customer';
import { useDispatch, useSelector } from 'react-redux';
import CmtList from '../../../../../@coremat/CmtList';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MoreOptions from '../CustomersList/ListTableView/CustomerCellOptions/MoreOptions';

const useStyles = makeStyles(theme => ({
  dialogRoot: {
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      width: '100%',
    },
  },
  userInfoRoot: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  avatarView: {
    [theme.breakpoints.down('sm')]: {
      '& .Cmt-avatar-size': {
        width: 40,
        height: 40,
      },
    },
  },
  titleRoot: {
    fontSize: 16,
    color: theme.palette.common.dark,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
  subTitleRoot: {
    fontSize: 12,
    letterSpacing: 0.4,
    color: theme.palette.text.secondary,
  },
  labelRoot: {
    backgroundColor: alpha(theme.palette.common.dark, 0.05),
    color: theme.palette.text.disabled,
    padding: '4px 10px',
    borderRadius: 4,
    textTransform: 'capitalize',
  },
}));
const CustomerDetail = ({ open, handleDialog }) => {
  const classes = useStyles();
  const { currentCustomer } = useSelector(({ customerApp }) => customerApp);
  const dispatch = useDispatch();

  const onClickStarredIcon = status => {
    dispatch(updateStarredStatus([currentCustomer.id], status));
    dispatch(setCurrentCustomer({ ...currentCustomer, starred: status }));
  };

  const { name, email_address, phones, dpUrl, starred } = currentCustomer;
  return (
    <Dialog open={open} onClose={handleDialog} className={classes.dialogRoot}>
      <Box className={classes.userInfoRoot}>
        <Box mr={3} display="flex" alignItems="center">
          <Box className={classes.avatarView} mr={{ xs: 4, md: 6 }}>
            <CmtAvatar size={70} src={dpUrl} alt={name} />
          </Box>

          <Box mt={-2}>
            <Box display="flex" alignItems="center">
              <Typography className={classes.titleRoot}> {name}</Typography>
              <Box ml={1}>
                <Checkbox
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon style={{ color: '#FF8C00' }} />}
                  checked={starred}
                  onChange={e => onClickStarredIcon(e.target.checked)}
                />
              </Box>
            </Box>
            {/* {(limit || balance) && (
              <Box mt={-1}>
                {limit && <Typography className={classes.subTitleRoot}> Limit: ₱{limit}.00 </Typography>}
                {balance && <Typography className={classes.subTitleRoot}> Balance: ₱{balance}.00 </Typography>}
              </Box>
            )} */}
          </Box>
        </Box>
        <Box ml="auto" mt={-2} display="flex" alignItems="center">
          <Box ml={1}>
            <MoreOptions customer={currentCustomer} isFromDetailPage={true} isDetailView={true} />
          </Box>
          <Box ml={1}>
            <IconButton onClick={handleDialog}>
              <ClearIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box px={6} py={5}>
        <Box mb={5} component="p" color="common.dark">
          Customer Detail
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 7 }}>
          <EmailIcon />
          <Box ml={5} color="primary.main" component="p" className="pointer">
            {email_address}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb={{ xs: 4, sm: 5 }}>
          <PhoneIcon />
          <Box ml={5}>
            <CmtList
              data={phones}
              renderRow={(item, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <Box color="text.secondary">{item.phone}</Box>
                  <Box ml={2} className={classes.labelRoot}>
                    {item.label}
                  </Box>
                </Box>
              )}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CustomerDetail;

CustomerDetail.prototype = {
  open: PropTypes.bool.isRequired,
  handleDialog: PropTypes.func,
  selectedCustomer: PropTypes.object.isRequired,
};
