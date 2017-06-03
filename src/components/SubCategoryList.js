import React from "react"

import HoiItemList from "../containers/HoiItemList"

export default class SubCategoryList extends React.Component {
  render() {
    let { subCategories } = this.props
    let canLoad = subCategories && subCategories.length > 0

    return (
      <div>
        {canLoad
          ? subCategories.map((category, index) => (
              <div key={category.id} className="fullWidth">
                <h3 className="bgYellow">{category.display_name}</h3>
                <HoiItemList {...{ category_id: category.id }} />
              </div>
            ))
          : null}
      </div>
    )
  }
}
