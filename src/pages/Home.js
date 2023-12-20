import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercices from "../components/SearchExercices";

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
