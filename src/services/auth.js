import axios from 'axios';

import router from '@/router';
import store from '@/store';

// const baseUrl = `${process.env.VUE_APP_API_URL}/accounts`;
const baseUrl = `https://reqres.in/api`;

export const authService = {
  login,
  logout,
  register
};

async function login (email, password) {
  // login with email and password in reqres
  const authResponse = await axios.post(`${baseUrl}/login`, { email, password });
  if (!authResponse) return;

  // save data
  const token = authResponse.data.token;
  store.dispatch('login', { email, token });

  // get return url from query parameters or default to home page
  const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
  router.push(returnUrl);
}

async function logout () {
  // accountData = null;
  store.dispatch('logout');
  router.push('/login');
}

async function register (email, password) {
  // register with email and password in reqres
  const authResponse = await axios.post(`${baseUrl}/register`, { email, password });
  if (!authResponse) return;

  // save data
  const token = authResponse.data.token;
  store.dispatch('login', { email, token });

  // get return url from query parameters or default to home page
  const returnUrl = router.currentRoute.value.query['returnUrl'] || '/';
  router.push(returnUrl);
}

// function getAll() {
//     return axios.get(baseUrl)
//         .then(response => response.data);
// }

// function getById(id) {
//     return axios.get(`${baseUrl}/${id}`)
//         .then(response => response.data);
// }

// async function update(id, params) {
//     const response = await axios.put(`${baseUrl}/${id}`, params);
//     let account = response.data;
//     // update the current account if it was updated
//     if (account.id === accountSubject.value?.id) {
//         // publish updated account to subscribers
//         account = { ...accountSubject.value, ...account };
//         accountSubject.next(account);
//     }
//     return account;
// }

// async function _delete(id) {
//     await axios.delete(`${baseUrl}/${id}`);
//     if (id === accountSubject.value?.id) {
//         // auto logout if the logged in account was deleted
//         logout();
//     }
// }
