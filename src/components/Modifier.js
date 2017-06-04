import React from "react"
import SingleItemByModifierAsCombo from "../containers/HoiSingleItemByModifierAsCombo"
import HoiItemByModifierCheckboxRowList from "../containers/HoiItemByModifierCheckboxRowList"
export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAutoSelectOnLoadRun: null
    }
  }

  autoSelectOnLoad = () => {
    let { modifier, items, actionAutoSelectItemByModifierOnLoad } = this.props
    let item = items[0]
    let { mandatory } = modifier
    if (mandatory && item) {
      actionAutoSelectItemByModifierOnLoad(modifier.id, item.id)
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
        {shouldLoadSingleItemByModifierAsItemCombo
          ? <SingleItemByModifierAsCombo {...{ items, modifier }} />
          : <div>
              <h3 className="bgYellow">{modifier.display_name}, Id: {modifier.id}</h3>
              <pre>Mandatory: {modifier.mandatory}. Multiselect: {modifier.multi_select}</pre>
              <HoiItemByModifierCheckboxRowList {...{ items, modifier }} />
            </div>}
      </div>
    )
  }
}
