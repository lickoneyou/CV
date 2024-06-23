export const pagesReducer = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      state = action.payload
      return state
    default:
      return state
  }
}
