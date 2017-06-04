import React from "react"

import HoiItemByCategoryList from "../containers/HoiItemByCategoryList"

export default class SubCategoryList extends React.Component {
  render() {
    let { subCategories, orderCategoryId } = this.props
    let canLoad = subCategories && subCategories.length > 0

    return (
      <div>
        {canLoad
          ? subCategories.map((category, index) => (
              <div key={category.id} className="fullWidth">
                <h3 className="bgYellow">{category.display_name}</h3>
                <HoiItemByCategoryList {...{ category_id: category.id }} />
              </div>
            ))
          : <HoiItemByCategoryList {...{ category_id: orderCategoryId }} />}
      </div>
    )
  }
}
