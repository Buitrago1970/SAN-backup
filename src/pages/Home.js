import React from "react";

//styles
import "./styles/home.css";

import Navbar from "../components/Navbar";
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container-home">
          <Navbar />
        </div>
      </>
    );
  }
}

export default Home;
