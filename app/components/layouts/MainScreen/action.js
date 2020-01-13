/* eslint no-use-before-define: ["error", { "functions": false }] */
import { TYPES } from '../../../constants';

export function loading() {
  return {
    type: TYPES.LOADING
  };
}

export function loadingDone() {
  return {
    type: TYPES.LOADING_DONE
  };
}

export default {
  loading,
  loadingDone
};
