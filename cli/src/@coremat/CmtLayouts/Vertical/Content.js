import React, { useImperativeHandle } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  appMainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '20px 15px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 35,
      paddingRight: 35,
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: 48,
      paddingRight: 48,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
}));

const CmtContent = React.forwardRef(function LayoutContent(props, ref) {
  const { children } = props;

  useImperativeHandle(ref, () => ({}));

  const contentRef = React.createRef();
  const classes = useStyles();

  return (
    <Box ref={contentRef} className={clsx(classes.appMainContent, 'Cmt-appMainContent')} bgcolor="background.main">
      {children}
    </Box>
  );
});

export default CmtContent;
CmtContent.defaultProps = {
  name: 'LayoutContent',
};
