import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros.js";
import Servicios from "../pages/Servicios.js";
import Contactos from "../pages/Contactos.js";
import NotFound from "../pages/NotFound.js";
import ShoppingCart from "../pages/ShoppingCart";
import Appcontext from "../context/Appcontext";
import initialState from "../initialState";

function App() {
  return (
    <Appcontext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/contactos" component={Contactos} />
            <Route exact path="/carroCompras" component={ShoppingCart} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}

export default App;
