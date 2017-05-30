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
// Build store with history push
const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddlewareInstance, thunkMiddleware)))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ul>
          Page url
          <li><Link to="/">Home</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
