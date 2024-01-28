import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/efit_logo.png";

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap={"40x"} alignItems={"center"} px={"40px"} pt="24px">
        <img
          src={Logo}
          alt="Logo"
          height="100px"
          width="200px"
          style={{ marginBottom: "30px" }}
        />
        <Typography variant="h5" pb="40px" mt="20px">
          Your physical and mental health are the most import things 🖤
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
