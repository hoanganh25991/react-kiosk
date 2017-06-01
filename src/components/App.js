import React from "react"
import HoiCategoryList from "../containers/HoiCategoryList"
import HoiOrderProcess from "../containers/HoiOrderProcess"
import HoiOrderInfo from "../containers/HoiOrderInfo"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="orderPage">
          <h1>Order Page</h1>
          <div className="flexRow height600">
            <div className="flex4">
              <HoiCategoryList />
            </div>
            <div className="flex8">
              <HoiOrderProcess />
            </div>
          </div>
          {/*<HoiOrderInfo />*/}
        </div>
      </div>
    )
  }
}
