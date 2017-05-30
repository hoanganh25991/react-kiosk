import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="orderPage">
          <h1>Order Page</h1>
          <div className="flexRow">
            <div className="flex4">
              <h1>Category List</h1>
            </div>
            <div className="flex8">
              <h1>----</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
