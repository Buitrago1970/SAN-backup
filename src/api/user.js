import {authFetch} from '../utils/fetch';


export async function getMeApi(logoutUser){
    try {
     const url = process.env.REACT_APP_API_URL_CRETE_USER;
     const result = authFetch(url, null, logoutUser);
     return result ? result : null;
   } catch (error) {
     return null;
   }
}