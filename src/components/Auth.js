import React from "react";
import { Redirect } from "react-router";
import * as _constants from "./util/constants";

export default class Auth extends React.Component {
  render() {
    let iparams = new URLSearchParams(this.props.location.hash);
    sessionStorage.setItem(
      _constants.ACCESS_TOKEN,
      iparams.get("#access_token")
    );
    sessionStorage.setItem(_constants.LOGIN_PROVIDER, _constants.MICROSOFT);

    return <Redirect to="/home" />;
  }
}
