import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo-image-navbar" />
      </Link>
    </Stack>
  );
}

export default Navbar;
