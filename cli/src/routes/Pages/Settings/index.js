import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';



const Settings = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={`${requestedUrl}/`} component={lazy(() => import('./Configurations'))} />
       {/* <Route path={`${requestedUrl}/user-management`} component={lazy(() => import('./UserManagement'))} /> */}
         {/* <Route path={`${requestedUrl}/crm`} component={lazy(() => import('./Crm'))} />
        <Route path={`${requestedUrl}/intranet`} component={lazy(() => import('./Intranet'))} />
        <Route path={`${requestedUrl}/eCommerce`} component={lazy(() => import('./ECommerce'))} />
        <Route path={`${requestedUrl}/news`} component={lazy(() => import('./News'))} />
        <Route path={`${requestedUrl}/misc`} component={lazy(() => import('./Misc'))} /> */}
        <Route component={lazy(() => import('../404'))} />
      </Switch>
    </Suspense>
  );
};

export default Settings;
