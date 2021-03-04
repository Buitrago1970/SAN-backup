import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
