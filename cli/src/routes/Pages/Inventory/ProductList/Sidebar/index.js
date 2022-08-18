import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../index.style';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import CmtList from '../../../../../@coremat/CmtList';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import { getProductCounts, getLabelsList, setFilterType } from '../../../../../redux/actions/ProductApp';
import ItemCell from './ItemCell';
import AddLabel from './AddLabel';
import { foldersList } from '../../../../../@fake-db/modules/products';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withWidth } from '@material-ui/core';
import { getAppSidebarHeight } from '../../../../../@jumbo/constants/AppConstants';
import MoreOptions from './MoreOptions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AppContext from '../../../../../@jumbo/components/contextProvider/AppContextProvider/AppContext';
import LabelCell from './LabelCell';

const Sidebar = ({ onClickCreateProduct, width }) => {
  const { isSideBarCollapsed, labelsList, filterType, productsList } = useSelector(({ productApp }) => productApp);
  const { showFooter } = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCounts());
  }, [dispatch, productsList]);

  useEffect(() => {
    dispatch(getLabelsList());
  }, [dispatch]);

  const onChangeFolder = folder => {
    dispatch(
      setFilterType({
        selectedFolder: folder,
        selectedLabel: '',
        searchText: '',
      }),
    );
  };

  const onChangeLabel = label => {
    dispatch(
      setFilterType({
        selectedFolder: '',
        selectedLabel: label,
        searchText: '',
      }),
    );
  };

  const classes = useStyles({
    isCollapsed: isSideBarCollapsed,
    height: getAppSidebarHeight(width, showFooter),
  });

  return (
    <Box className={classes.inBuildAppSidebar}>
      <Box className={classes.inBuildAppSidebarHeader}>
        <Button className={classes.addTaskBtn} variant="contained" color="primary" onClick={onClickCreateProduct}>
          <PersonAddIcon />
          <Box component="span" className="add-task-btn-text">
            Create New
          </Box>
        </Button>
      </Box>

      <PerfectScrollbar className={classes.perfectScrollbarProductSidebar}>
        <List component="nav" className={classes.appNav}>
          <CmtList
            data={foldersList}
            renderRow={(item, index) => (
              <ItemCell
                key={index}
                item={item}
                classes={classes}
                selectedItem={filterType.selectedFolder}
                onChange={onChangeFolder}
              />
            )}
          />

          <ListItem component="div" className={classes.appNavHeaderItem}>
            <Box component="span" className={classes.appNavHeaderItemText}>
              Labels
            </Box>
          </ListItem>
          <AddLabel />
          <CmtList
            data={labelsList}
            renderRow={(item, index) => (
              <LabelCell
                key={index}
                item={item}
                classes={classes}
                selectedItem={filterType.selectedLabel}
                onChange={onChangeLabel}
              />
            )}
          />

          <MoreOptions classes={classes} productsList={productsList} />
        </List>
      </PerfectScrollbar>
    </Box>
  );
};

export default withWidth()(Sidebar);

Sidebar.prototype = {
  onClickCreateProduct: PropTypes.func,
};
