import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight={700} flex={1}>
            <Link to="/">وبلاگ</Link>
          </Typography>
          <Link to="/">
            <MenuBookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
