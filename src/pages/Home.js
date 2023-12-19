import React, { useState } from "react";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercices />
      <Exercises />
    </Box>
  );
}

export default Home;
