import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros.js";
import Servicios from "../pages/Servicios.js";
import Contactos from "../pages/Contactos.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/contactos" component={Contactos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
