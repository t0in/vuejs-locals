import router from '@/router';
import store from '@/store';

export function authGuard (to) {
  const token = store.getters.getToken;
  if (token) {
    // logged in so return true
    return true;
  }

  // not logged in so redirect to login page with the return url
  router.push({ path: '/login', query: { returnUrl: to.fullPath } });
  return false;
}
