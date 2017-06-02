import React from "react"

import HoiItemList from "../containers/HoiItemList"

export default class SubCategoryList extends React.Component {
  normalizeData = () => {
    let { normalizeSubCategoriesByCategory } = this.props
    let { categoryId } = this.props
    normalizeSubCategoriesByCategory(categoryId)
  }

  componentDidUpdate() {
    this.normalizeData()
  }

  componentDidMount() {
    this.normalizeData()
  }

  render() {
    let { getSubCategoriesByCategory, category_id } = this.props
    let subCategories = getSubCategoriesByCategory(category_id)
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
          : <HoiItemList {...{ category_id }} />}
      </div>
    )
  }
}
