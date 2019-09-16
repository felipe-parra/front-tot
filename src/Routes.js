import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const { Content, Footer } = Layout;

const Routes = () => (
  <Router>
    <Nav></Nav>
    <Layout>
      <Content>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/register" component={Register}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Content>
      <Footer>footer</Footer>
    </Layout>
  </Router>
);

export default Routes;
