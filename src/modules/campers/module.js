const TOGGLE_ORDER = 'TOGGLE_ORDER'
const SORT_BY = 'SORT_BY'

export const toggleOrder = () => ({
  type: TOGGLE_ORDER,
})

export const changeSortBy = sortBy => ({
  sortBy,
  type: SORT_BY,
})

const initialState = {
  asc: 1,
  sortBy: 'username',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ORDER:
      return { ...state, asc: state.asc * -1 }
    case SORT_BY:
      const sortBy = state.sortBy
      if (action.sortBy === sortBy) {
        return { ...state, asc: state.asc * -1 }
      }
      return { ...state, sortBy: action.sortBy }
    default:
      return state
  }
}
