import jwtDecode from 'jwt-decode';
// set user token to localStorage
export function setToken(token) {
  localStorage.setItem('token', token);
}
// get user token from localStorage
export function getToken() {
  return localStorage.getItem('token');
}
// remove user token from localStorage
export function removeToken() {
  localStorage.removeItem('token');
}
// check if user token is valid
export function hasTokenExpired(token) {
  const tokenDecode = jwtDecode(token);
  const expireDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime;
  if (currentDate > expireDate) {
    return true;
  }
  return false;

}
