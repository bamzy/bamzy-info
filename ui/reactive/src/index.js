import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import DemoLayout from "layouts/demo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import { Auth0Provider } from "@auth0/auth0-react";
import history  from "./utils/history";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin+"/dashboard",
    ...(process.env.REACT_APP_AUDIENCE ? { audience: process.env.REACT_APP_AUDIENCE} : null),
  },
  
};


ReactDOM.render(
  <Auth0Provider  {...providerConfig}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              <Route path={`/admin`} component={AdminLayout} />
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/rtl`} component={RTLLayout} />
              <Route path={`/demo`} component={DemoLayout} />
              <Redirect from='/' to='/admin' />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
