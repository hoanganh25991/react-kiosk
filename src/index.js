// @flow
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"
import thunkMiddleware from "redux-thunk"
import reducers from "./reducers"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import App from "./components/App"
import { Route, Link } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import registerServiceWorker from "./registerServiceWorker"
import DivTest from "./components/DivTest"
// Build store with history push
const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddlewareInstance, thunkMiddleware)))

// Try flow
let flow: number = "hello"
console.log(flow)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          Page url
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={App} />
        <Route path="/test" component={DivTest} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
