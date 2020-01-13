import { TYPES } from '../../constants';

const initialState = {
  listUsers: [],
  isLoading: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listUsers: state.listUsers.concat(action.data)
      };
    case TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}
