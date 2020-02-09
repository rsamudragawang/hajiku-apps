import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('api/users/login', params),
  register: async params => post('api/users/register', params),
  getAll: async id => get(`api/haji/all?data=${id}`),
  getById: async (id, type) => get(`api/haji/?id=${id}&data=${type}`),
  quizAll: async () => get('api/quiz/all'),
  quizById: async id => get(`api/quiz/?id=${id}`),
  getNilai: async (id, params) => post(`api/quiz/post/quiz?id=${id}`, params)
};

export default { endpoint };
