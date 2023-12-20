import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography className="herobanner-fitnessclub">Fitness Club</Typography>

      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
        Checkout the most effective exercises
      </Typography>
    </Box>
  );
}

export default HeroBanner;
