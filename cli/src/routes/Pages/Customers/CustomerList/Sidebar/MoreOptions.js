import React from 'react';
import { List } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ExportCustomers from '../ExportCustomers';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import PrintIcon from '@material-ui/icons/Print';

const MoreOptions = ({ classes, customersList }) => {
  return (
    <List>
      {/* <ListItem button className={classes.appNavItem} onClick={() => {}}>
        <ListItemIcon className="Cmt-icon-root">
          <CloudDownloadIcon />
        </ListItemIcon>
        <ListItemText className="Cmt-nav-text" primary="Import" />
      </ListItem> */}
      <ExportCustomers data={customersList}>
        <ListItem button className={classes.appNavItem} onClick={() => {}}>
          <ListItemIcon className="Cmt-icon-root">
            <CloudUploadIcon />
          </ListItemIcon>
          <ListItemText className="Cmt-nav-text" primary="Export" />
        </ListItem>
      </ExportCustomers>
      {/* <ListItem button className={classes.appNavItem} onClick={() => window.print()}>
        <ListItemIcon className="Cmt-icon-root">
          <PrintIcon />
        </ListItemIcon>
        <ListItemText className="Cmt-nav-text" primary="Print" />
      </ListItem> */}
    </List>
  );
};

export default MoreOptions;
