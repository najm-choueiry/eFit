import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { excerciseOptions, fetchData } from "../utils/fetchData";

function Exercises({ exercises, bodyPart, setExercises }) {
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
    </Box>
  );
}

export default Exercises;
