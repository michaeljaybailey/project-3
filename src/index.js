import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { blue } from "@material-ui/core/colors";
import { Auth0Provider } from "@auth0/auth0-react";

// const theme1 = createMuiTheme({ palette: {
//   primary: blue,
// } });

ReactDOM.render(
  <Auth0Provider
    domain="dev-rjhqn50j.us.auth0.com"
    clientId="yKnqbDr10bU4KqPpLEnPmmwtlRftleAt"
    redirectUri={"http://localhost:3000/Dashboard/id:/"}
  >
    {/* <MuiThemeProvider theme = { theme1 }> */}
    <App />
    {/* </MuiThemeProvider> */}
  </Auth0Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
