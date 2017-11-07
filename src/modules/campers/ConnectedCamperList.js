import { toggleOrder } from './module'
import camperList from '../../components/camperList/index'
import { connect } from 'react-redux'
import { changeSortBy } from '../../modules/campers/module'

const mapStateToProps = state => ({
  sortBy: state.campers.sortBy,
  asc: state.campers.asc,
})

export default connect(mapStateToProps, { changeSortBy })(camperList)
