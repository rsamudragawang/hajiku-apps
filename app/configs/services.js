import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('api/users/login', params),
  register: async params => post('api/users/register', params),
  getAll: async id => get(`api/haji/all?data=${id}`),
  getById: async (id, type) => get(`api/haji/?id=${id}&data=${type}`)
};

export default { endpoint };
