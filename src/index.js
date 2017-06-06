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
let flow: number = 1
console.log(flow)

// Array access
let array: Array<number> = []
array[0] = 0
array[2] = 2
// It's fine, flow mark as 'possible undefined'
// But not warn it out
let value: number = array[1]

// Tuple type
let tuple: [number, boolean, string] = [1, true, "three"]
let none: void = tuple[3]

// Type keyword
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string
}
let obj1: MyObject = { foo: 1, bar: true, baz: 3 }

// Generic Type
type MyObjectX<A, B, C> = {
  foo: A,
  bar: B,
  baz: C
}
var val: MyObjectX<number, boolean, string> = {
  foo: 1,
  bar: true,
  baz: "three"
}

// Interface
class Foo {
  serialize() {
    return "[Foo]"
  }
}

class Bar {
  serialize() {
    return "[Bar]"
  }
}

// $ExpectError
const foo: Foo = new Bar() // Error!

// @flow
interface Serializable {
  serialize(): string
}

class Foo {
  serialize() {
    return "[Foo]"
  }
}

class Bar {
  serialize() {
    return "[Bar]"
  }
}
// They return string > Ok good, as what the interface defined
const foo: Serializable = new Foo() // Works!
const bar: Serializable = new Bar() // Works!

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
