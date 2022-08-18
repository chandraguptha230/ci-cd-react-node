import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';

const Store = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/dashboard`} /> */}
        <Route exact path={`${requestedUrl}/`} component={lazy(() => import('./Dashboard'))} />
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

export default Store;
