import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-t6bznyrp.us.auth0.com"
    clientId="fWVmFJf0FHj74P2wFtWoqiLVrIqxLVvV"
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
