import axios from 'axios';

import { authService } from '@/services';
import store from '@/store';

export function tokenInterceptor() {
  axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = store.getters.getToken;
    const isLoggedIn = !!token;
    const isApiUrl = request.url.startsWith(process.env.VUE_APP_API_URL);

    if (isLoggedIn && isApiUrl) {
      request.headers.common['X-Session'] = token;
    }

    return request;
  });
}

export function errorInterceptor() {
  axios.interceptors.response.use(null, (error) => {
    const { response } = error;
    if (!response) {
      // network error
      console.error(error);
      return;
    }

    if ([401, 403].includes(response.status) && store.getters.getToken) {
      // auto logout if 401 or 403 response returned from api
      authService.logout();
    }

    const errorMessage = response.data?.message || response.statusText;
    console.error('ERROR:', errorMessage);
  });
}
