import * as React from 'react';
 import {   useContext } from 'react';
// import { getMeApi } from '../api/user';
import Appcontext from '../context/Appcontext';

export default function UserProfile() { 
  const {logoutUser} = useContext(Appcontext);
  // const [user, setUser] = useState(undefined);

  // useEffect(()  => {
  //   (async () =>{
  //     const response = await getMeApi(logoutUser)
  //     console.log(response);
  //   })()
  // },[]);
  
  return (<>
  
  <div>
      <button onClick={logoutUser}>
          Cerrar Sesion
      </button>
  </div>
  </>);
}
