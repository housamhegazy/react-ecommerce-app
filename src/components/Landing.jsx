import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function Landing() {
  return (
    <Stack
      sx={{
        minHeight: "80vh",
        flexDirection: "row",
        "@media(max-width: 780px)": { flexDirection: "column", px: "0px" },
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        px: "40px",
      }}
    >
      <Box
        sx={{
          flexBasis: "50%",
          mx: 5,
          "@media(max-width: 780px)": { mx: "0" },
        }}
      >
        <Typography
          sx={{ "@media(max-width: 780px)": { fontSize: "25px" } }}
          variant="h4"
        >
          Welcome To Your Shopping Home
        </Typography>
        <Typography sx={{ my: 4 }} variant="body1">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim
          eum voluptate, blanditiis autem veritatis cum ea cupiditate
          accusantium quis repudiandae molestias natus omnis, ratione labore
          reiciendis necessitatibus maxime corrupti.
        </Typography>
        <Button variant="contained">see more</Button>
      </Box>
      <Box sx={{flexBasis: "50%" }}>
        <Box sx={{mx:"auto",width:"80%","@media(max-width: 780px)":{width:"70%"}}}>
          <img src="./E-Commerce.png" alt="ecommerce" width={"100%"} />
        </Box>
      </Box>
    </Stack>
  );
}

export default Landing;
