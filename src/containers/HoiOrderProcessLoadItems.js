import { connect } from "react-redux"
import OrderProcessLoadItems from "../components/OrderProcessLoadItems"

const mapStateToProps = ({ subCategoriesByCategory, itemsByCategory, order }) => ({
  subCategoriesByCategory,
  itemsByCategory,
  order
})

const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, mapActionToProps)(OrderProcessLoadItems)
