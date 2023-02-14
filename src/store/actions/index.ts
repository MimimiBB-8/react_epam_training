import * as DataActionCreators from './data'
import * as SortActionCreators from './sort'
import * as DescriptionActionCreators from './description'

export default {
  ...DataActionCreators,
  ...SortActionCreators,
  ...DescriptionActionCreators,
}
