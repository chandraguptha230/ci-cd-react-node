import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './index.style';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CmtSearch from '../../../../@coremat/CmtSearch';
import { setFilterType, toggleExpandSidebar } from '../../../../redux/actions/ProductApp';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import GridOnIcon from '@material-ui/icons/GridOn';
// import ListIcon from '@material-ui/icons/List';
import Hidden from '@material-ui/core/Hidden';

const AppHeader = ({ onChangeViewMode, viewMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filterType } = useSelector(({ productApp }) => productApp);
  const { searchText } = filterType;

  const handleSearchText = e => {
    dispatch(
      setFilterType({
        selectedFolder: e.target.value ? '' : 'products',
        selectedLabel: '',
        searchText: e.target.value,
      }),
    );
  };

  return (
    <Box className={classes.inBuildAppHeader}>
      <Box 
      className={classes.inBuildAppHeaderSidebar}
      >
        <Hidden smDown>
          <IconButton onClick={() => dispatch(toggleExpandSidebar())}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Box>

      <Box className={classes.inBuildAppHeaderContent}>
        <CmtSearch placeholder="Search Products..." value={searchText} onChange={handleSearchText} border={false} />
      </Box>
    </Box>
  );
};

export default AppHeader;

AppHeader.prototype = {
  onChangeViewMode: PropTypes.func,
};
