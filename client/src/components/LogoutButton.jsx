import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <p
      className="nav-link magictime tinRightIn LOGINOUT"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      LOG OUT
    </p>
  );
};

export default LogoutButton;
