import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppContext from '../contextProvider/AppContextProvider/AppContext';
import globalStyles from '../../../theme/GlobalCss';
import '../../../services/api/index';
import { useDispatch, useSelector } from 'react-redux';
import { AuhMethods } from '../../../services/auth';
import { CurrentAuthMethod } from '../../constants/AppConstants';


import ModernSideBar from './VerticalLayouts/ModernSidebar';


const useStyles = makeStyles(() => ({
  circularProgressRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AppLayout = ({ children }) => {
  const [showLayoutLoader, setLayoutLoader] = useState(true);
  const { layout } = useContext(AppContext);
  const { loadUser } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  globalStyles();

  useEffect(() => {
    dispatch(AuhMethods[CurrentAuthMethod].getAuthUser());
    setLayoutLoader(false);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLayoutLoader || !loadUser) {
    return (
      <div className={classes.circularProgressRoot}>
        <CircularProgress />
      </div>
    );
  }

  if (['/signin', '/signup', '/forgot-password'].includes(location.pathname)) {
    return <div style={{ minHeight: '100vh', width: '100%', display: 'flex' }}>{children}</div>;
  }
  console.log(layout)
  switch (layout) {
    default:
      return <ModernSideBar children={children} />;
  }
};

export default AppLayout;
