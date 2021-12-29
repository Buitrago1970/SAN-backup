import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros.js";
import Servicios from "../pages/Servicios.js";
import Contactos from "../pages/Contactos.js";
import NotFound from "../pages/NotFound.js";
import ShoppingCart from "../pages/ShoppingCart";
import Address from "../pages/Address";
import Checkout from "../pages/Checkout";
import Appcontext from "../context/Appcontext";
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/contactos" component={Contactos} />
            <Route exact path="/carrocompras" component={ShoppingCart} />
            <Route
              exact
              path="/carrocompras/{}/direccion"
              component={Address}
            />
            <Route component={NotFound} />
            <Route
              exact
              path="/carrocompras/{}/checkout"
              component={Checkout}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}

export default App;
