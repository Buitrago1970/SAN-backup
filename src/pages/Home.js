import * as React from "react";
import {useContext ,useEffect} from "react";
import { getMeApi } from '../api/user';
import Appcontext from "../context/Appcontext";

//styles
import "./styles/home.css";

import Navbar from "../components/Navbar";
export default function Home() {

  const { loginUser } = useContext(Appcontext);

    useEffect(()  => {
     (async () =>{
       const response = await getMeApi();
       loginUser(response);
     })()
     },[]);

    return (
      <>
        <div className="container-home">
          <Navbar />
        </div>
      </>
    );
}
