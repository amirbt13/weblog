import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Authors from "./author/Authors";
import Blogs from "./blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={3} spacing={2} padding={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" mb={2} fontWeight={600}>
            نویسندگان
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" mb={2} fontWeight={600}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
