import React from "react";
import { Redirect } from "react-router";

export default class Auth extends React.Component {
  render() {
    let iparams = new URLSearchParams(this.props.location.hash);
    sessionStorage.setItem("token", iparams.get("#access_token"));

    return <Redirect to="/home" />;
  }
}
