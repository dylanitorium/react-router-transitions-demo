import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from 'rrtd/state';
import { Main } from 'rrtd/view/components/layouts';
import { actions as historyActions } from 'rrtd/state/modules/history';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
store.dispatch(historyActions.listen(history));

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>
);
