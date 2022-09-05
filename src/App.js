import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiProvider from "./components/ApiProvider";
import Landing from "./pages/landing";
import Degrees from "./pages/degrees";

function App() {
  return (
    <ApiProvider>
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/degrees">
          <Degrees />
        </Route>
      </Router>
    </ApiProvider>
  );
}

export default App;
