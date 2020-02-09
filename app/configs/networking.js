/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* global fetch:false */
import cacheService from '../utils/cache';
import storage from '../utils/storage';
import { STORAGE_KEY } from '../constants';

export const config = {
  baseUrl: 'http://34.238.41.114:8080/'
};

export const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

const fetchData = async (url, params, customHeaders, cachedControll) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...customHeaders
  };
  const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
  console.log(token);
  if (token.length > 0) {
    if (url === 'http://34.238.41.114:8080/api/users/register') {
      headers = {
        ...headers
      };
    } else {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`
      };
      console.log(headers);
    }
  }

  const response = await fetch(url, {
    ...params,
    headers
  });
  // for DELETE method case
  if (response.status === STATUS_CODE.NO_CONTENT) return {};
  const json = await response.json();

  // for caching response API
  if (cachedControll) {
    await cacheService.set(cachedControll, json);
  }
  return json;
};
// const fetchData = async (url, params, customHeaders) => {
//   let headers = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     ...customHeaders
//   };

//   // const tokens = await tokenService.get();
//   // if (tokens) {
//   //   headers = {
//   //     ...headers,
//   //     Authorization: `Bearer ${tokens.accessToken}`
//   //   };
//   // }
//   if (url.slice(0, 43) === 'http://34.238.41.114:8080/api/haji/all?data=') {
//     headers = {
//       ...headers,
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTFlYjdiZjliNzBiYzIxZWU4MDlmZTkiLCJpYXQiOjE1Nzk3NTMyOTB9.0wjFaxcmQeTztjgGOLWme99lttgvzAwav6famOLt5Pw'
//     };
//   }
//   const response = await fetch(url, {
//     ...params,
//     headers
//   });
//   // for DELETE method case
//   if (response.status === STATUS_CODE.NO_CONTENT) return {};
//   const json = await response.json();
//   // if (!response.ok) {
//   //   if (json && json.message) {
//   //     if (json.data) {
//   //       const error = new Error(json.message);
//   //       error.code = json.data.errorCode;
//   //       throw error;
//   //     } else {
//   //       throw new Error(json.message);
//   //     }
//   //   }
//   //   throw new Error('unknownError');
//   // }
//   return json;
// };

const get = async (endpoint, params = {}, headers = {}) => {
  console.log(params)
  let queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${config.baseUrl}${endpoint}${queryString}`;
  const fetchParams = {
    method: 'GET'
  };
  // console.log(headers)
  return fetchData(url, fetchParams, headers);
};

const post = async (endpoint, params = {}, headers = {}) => {
  console.log(params)
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const patch = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PATCH',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const put = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PUT',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const remove = async (endpoint, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'DELETE'
  };
  return fetchData(url, fetchParams, headers);
};

export { get, post, put, patch, remove };
