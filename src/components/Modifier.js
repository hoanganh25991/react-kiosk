import React from "react"
import HoiItemByModifierCheckboxRowList from "../containers/HoiItemByModifierCheckboxRowList"
export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAutoSelectOnLoadRun: null
    }
  }

  autoSelectOnLoad = () => {
    let { modifier, items, addItemByModifierToBag } = this.props
    let item = items[0]
    let { mandatory } = modifier
    if (mandatory && item) {
      addItemByModifierToBag(modifier.id, item.id)
      this.setState({ isAutoSelectOnLoadRun: true })
    }
  }

  componentDidMount() {
    this.autoSelectOnLoad()
  }

  render() {
    let { modifier, items, shouldLoadSingleItemByModifierAsItemCombo } = this.props
    return (
      <div>
        <h3 className="bgYellow">{modifier.display_name}, Id: {modifier.id}</h3>
        <pre>Mandatory: {modifier.mandatory}. Multiselect: {modifier.multi_select}</pre>
        {shouldLoadSingleItemByModifierAsItemCombo
          ? null
          : <HoiItemByModifierCheckboxRowList {...{ items, modifier }} />}
      </div>
    )
  }
}
