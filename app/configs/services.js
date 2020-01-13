import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('/login', params)
};

export default { endpoint };
