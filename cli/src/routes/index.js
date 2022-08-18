import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

//Pages
//Main Pages
import Dashboard from './Pages/Dashboard';
import Customers from './Pages/Customers';
import Inventory from './Pages/Inventory';
import Products from './Pages/Products';
import SalesReport from './Pages/Reports';
import Users from './Pages/Users';
import Settings from './Pages/Settings';


import Error404 from './Pages/404';
import Login from './Auth/Login';
import DefaultForgotPassword from './Pages/forgot-password/Default';
// import Register from './Auth/Register';
// import ForgotPasswordPage from './Auth/ForgotPassword';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/dashboard'} />;
  } else if (authUser && location.pathname === '/signin') {
    return <Redirect to={'/dashboard'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        Main Pages
        <RestrictedRoute path="/dashboard" component={Dashboard} />
        <RestrictedRoute path="/users" component={Users} />
        <RestrictedRoute path="/products" component={Products} />
        <RestrictedRoute path="/inventory" component={Inventory} />
        <RestrictedRoute path="/customers" component={Customers} />
        <RestrictedRoute path="/reports" component={SalesReport} />
        <RestrictedRoute path="/settings" component={Settings} />

        {/* Other Pages */}
        <Route path="/signin" component={Login} />
        <Route path="/forgot-password" component={DefaultForgotPassword} />

        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
