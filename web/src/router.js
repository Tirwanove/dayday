import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import Index from './routes/index/index';
import List from './routes/list/list';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} >
        <Route path="/list(/:id)" component={List} ></Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
