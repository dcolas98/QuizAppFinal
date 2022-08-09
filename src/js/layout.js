import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { RegistrationForm, Signup } from "./views/createaccount";
import injectContext from "./store/appContext";
import { questionElement } from "./views/quiz";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { UserHome } from "./views/userhome";
import { Quiz } from "./views/quiz";
import { AuthProvider } from "../contexts/AuthContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
      <AuthProvider>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/createaccount">
              <Signup />
            </Route>
            <Route exact path="/userhome">
              <UserHome />
            </Route>
            <Route exact path="/quiz">
              <Quiz />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);