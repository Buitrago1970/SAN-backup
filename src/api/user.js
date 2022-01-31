import {authFetch} from '../utils/fetch';


export async function getMeApi(logoutUser){
    try {
     const url = "http://localhost:1337/api/users/me";
     const result = authFetch(url, null, logoutUser);
     return result ? result : null;
   } catch (error) {
     return null;
   }
}