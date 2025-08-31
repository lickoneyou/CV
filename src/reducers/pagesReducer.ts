interface IAction {
  payload: number,
  type: 'CHANGE_PROJECT_PAGE' | 'CHANGE_CERTIFICATES_PAGE'
}

export const pagesReducer = (
  state = {
    projectsPage:     1,
    certificatesPage: 1,
  },
  action: IAction,
) => {
  switch (action.type) {
    case 'CHANGE_PROJECT_PAGE':
      return {
        ...state,
        projectsPage: action.payload,
      };
    case 'CHANGE_CERTIFICATES_PAGE':
      return {
        ...state,
        certificatesPage: action.payload,
      };
    default:
      return state;
  }
};
