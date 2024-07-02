export const pagesReducer = (
  state = { projectsPage: 1, certificatesPage: 1 },
  action,
) => {
  switch (action.type) {
    case 'CHANGE_PROJECT_PAGE':
      return { ...state, projectsPage: action.payload }
    case 'CHANGE_CERTIFICATES_PAGE':
      return { ...state, certificatesPage: action.payload }
    default:
      return state
  }
}
