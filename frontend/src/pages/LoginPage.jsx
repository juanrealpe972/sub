import React from "react";
import LoginPageOrganism from "../components/organisms/LoginPageOrganism";
import LoginPageTemplate from "../components/templates/LoginPageTemplate";

const LoginPage = () => {
  return (
    <LoginPageTemplate>
      <LoginPageOrganism />
    </LoginPageTemplate>
  );
};

export default LoginPage;
