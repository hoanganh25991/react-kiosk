import React from "react"
import Fingerprint2 from "fingerprintjs2"

export default class DivTest extends React.Component {
  constructor(props) {
    super(props)

    this.state = { Fingerprint2 }
  }

  render() {
    let uuid = new Promise(resolve => {
      new Fingerprint2().get(result => resolve(result))
    })
    uuid.then(result => console.log(result))
    return <h1>DivTest</h1>
  }
}
