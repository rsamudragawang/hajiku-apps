/* eslint no-use-before-define: ["error", { "functions": false }] */
import { TYPES } from '../../constants';
import { ENDPOINT } from '../../configs';
import { loading, loadingDone } from '../../components/layouts/MainScreen/action';

export function fetchGetListUser(page) {
  return async dispatch => {
    dispatch(loading());
    try {
      const data = await ENDPOINT.getListUser(page);
      dispatch(getListUsersSuccess(data.data));
    } catch (error) {
      dispatch(getListUsersFailure(error));
    } finally {
      dispatch(loadingDone());
    }
  };
}

function getListUsersSuccess(data) {
  return {
    type: TYPES.GET_LIST_USERS_SUCCESS,
    data
  };
}

function getListUsersFailure(err) {
  return {
    type: TYPES.ERROR,
    err
  };
}

export default fetchGetListUser;
