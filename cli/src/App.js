import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import configureStore, { history } from './redux/store';
import AppWrapper from './@jumbo/components/AppWrapper';
import AppContextProvider from './@jumbo/components/contextProvider/AppContextProvider';
import Routes from './routes';
import jwtDecode from 'jwt-decode';

// Redux
// import {LOGIN} from "./redux/actions/types";
import {logout, getUserData} from "./redux/actions/Auth";

const store = configureStore();

const token = localStorage.idToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = "/";
  } else {
    store.dispatch(getUserData(history));
  }
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContextProvider>
        <AppWrapper>
          <Switch>
            <Routes />
          </Switch>
        </AppWrapper>
      </AppContextProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
