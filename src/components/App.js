import React from "react"
import HoiCategoryList from "../containers/HoiCategoryList"

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
              <h1>----</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
