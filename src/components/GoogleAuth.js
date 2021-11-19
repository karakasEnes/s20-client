import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "836137427845-1ct5upf6907t3mkccb6uv7074tn3p90p.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>G Auth</div>;
  }
}

export default GoogleAuth;
