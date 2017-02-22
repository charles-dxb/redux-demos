import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App'
import todoApp from './reducers'
import AllMemoRoute from './routers/AllMemoRoute'
import MemoTodoRoute from './routers/MemoTodoRoute'
import MemoDoingRoute from './routers/MemoDoingRoute'
import MemoDoneRoute from './routers/MemoDoneRoute'
import './index.less';

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
   <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AllMemoRoute}/>
        <Route path="/todo" component={MemoTodoRoute}/>
        <Route path="/doing" component={MemoDoingRoute}/>
        <Route path="/done" component={MemoDoneRoute}/>
      </Route>
    </Router>
  </Provider>,
  rootElement
)