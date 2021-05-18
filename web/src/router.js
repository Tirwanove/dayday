import React from 'react';
import { Router, Route, IndexRedirect } from 'dva/router';

import Index from './routes/index/index';
import List from './routes/list/list';
import ToDo from './routes/todo/todo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} >
        <IndexRedirect to="/list" />
        <Route path="/list(/:id)" component={List} ></Route>
        <Route path="/todo(/:id)" component={ToDo} ></Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
