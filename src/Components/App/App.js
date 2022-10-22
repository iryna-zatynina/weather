import React from "react";
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import useRoutes from "../../hooks/route.hook";
import "../../i18n"

function App() {

  const routes = useRoutes()

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
