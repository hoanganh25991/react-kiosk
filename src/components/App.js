import React from "react"
import HoiCategoryList from "../containers/HoiCategoryList"

import HoiSubCategoryList from "../containers/HoiSubCategoryList"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="orderPage">
          <h1>Order Page</h1>
          <div className="flexRow">
            <div className="flex4">
              <HoiCategoryList />
            </div>
            <div className="flex8">
              <HoiSubCategoryList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
