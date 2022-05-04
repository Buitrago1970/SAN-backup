import { getToken, hasTokenExpired } from './token';


export async function authFetch(url, params, logoutUser) {
    const token = getToken();
    if (!token) {
        //usuario no logeado 
        logoutUser()
    } else {
        if (hasTokenExpired(token)) {
            //token expirado
            logoutUser()
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            try {
                const response = await fetch(url, paramsTemp);
                const result = await response.json();
                return result;
            }
            catch (error) {
                return error;
            }
        }
    }

}