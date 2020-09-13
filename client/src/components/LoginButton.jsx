import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <p
      className="nav-link magictime tinRightIn LOGINOUT"
      onClick={() => loginWithRedirect()}
    >
      LOG IN
    </p>
  );
};

export default LoginButton;
