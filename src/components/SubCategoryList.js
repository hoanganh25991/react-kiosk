import React from "react"

import HoiItemList from "../containers/HoiItemList"

// export default class SubCategoryList extends React.Component {
//   shouldLoadSubCategories = () => {
//     let { subCategories } = this.props
//     return subCategories.length > 0
//   }
//
//   loadSubCategories = () => {
//     let { subCategories } = this.props
//
//     return (
//       <div className="height500 scroll">
//         {subCategories.map((category, index) => (
//           <div key={index} className="fullWidth">
//             <h3>Sub: {category.display_name}</h3>
//             <HoiItemList categoryId={category.id} />
//           </div>
//         ))}
//       </div>
//     )
//   }
//
//   loadItemFromItSelf = () => {
//     let { order: { category_id } } = this.props
//
//     return (
//       <div className="fullWidth">
//         <h3>Load from it self</h3>
//         {[category_id].map((category_id, index) => <HoiItemList categoryId={category_id} key={index} />)}
//       </div>
//     )
//   }
//
//   componentDidMount(){
//     let {findSubCategoriesByCategory} = this.props;
//     let {order: {category_id}} = this.props;
//     findSubCategoriesByCategory(category_id);
//   }
//
//   render() {
//     return (
//       <div className="fullWidth">
//         <h1>Please choose one</h1>
//         {this.shouldLoadSubCategories() ? this.loadSubCategories() : this.loadItemFromItSelf()}
//       </div>
//     )
//   }
// }

export default class SubCategoryList extends React.Component {
  componentDidUpdate() {
    console.log("SubCategoryList updated")
    let { normalizeSubCategoriesByCategory } = this.props
    normalizeSubCategoriesByCategory()
  }

  componentDidMount() {
    console.log("SubCategoryList mounted")
    let { normalizeSubCategoriesByCategory } = this.props
    normalizeSubCategoriesByCategory()
  }

  shouldLoadSubCategories = () => {
    let { subCategories } = this.props
    return subCategories && subCategories.length > 0
  }

  loadSubCategories = () => {
    let { subCategories } = this.props

    return (
      <div className="height500 scroll">
        {subCategories.map((category, index) => (
          <div key={index} className="fullWidth">
            <h3>Sub: {category.display_name}</h3>
            <HoiItemList categoryId={category.id} />
          </div>
        ))}
      </div>
    )
  }

  loadItemFromItSelf = () => {
    return (
      <div className="fullWidth">
        <h3>Load from it self</h3>
      </div>
    )
  }

  render() {
    return (
      <div className="fullWidth">
        <h1>Please choose one</h1>
        {this.shouldLoadSubCategories() ? this.loadSubCategories() : this.loadItemFromItSelf()}
      </div>
    )
  }
}
