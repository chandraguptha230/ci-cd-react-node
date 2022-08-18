import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { intranet } from '../../../../../../../@fake-db';

const useStyles = makeStyles(theme => ({
  
  cardServicesView: {
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
    marginLeft: -24,
    marginRight: -24,
    padding: 20,
    paddingTop: 0,
  },
  cardServices: {
    display: 'flex',
    alignItems: 'center',
  },
  cardServicesItem: {
    width: '33.33%',
    textAlign: 'center',
    padding: '4px 10px 10px 10px',
    '&:not(:first-child)': {
      borderLeft: `1px solid ${theme.palette.borderColor.main}`,
    },
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  cardContentRoot: {
    paddingTop: 24,
    display: 'flex',
    alignItems: 'flex-end',
    color: theme.palette.text.secondary,
  },
}));

const UserInfo = ({ userDetail }) => {
  const { userDetails } = intranet;
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.cardServicesView}>
        <Box className={classes.cardServices}>
          {Object.keys(userDetails.stats).map((item, index) => (
            <Box className={classes.cardServicesItem} key={index}>
              <Box
                component="span"
                fontSize={12}
                color="text.secondary"
                display="block"
                mb={1}
                className={classes.capitalize}>
                {item}
              </Box>
              <Box component="span" fontSize={14} color="text.primary" display="block">
                {userDetails.stats[item]}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfo;
