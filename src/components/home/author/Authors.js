import React from "react";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (error) return <h5>something went wrong...</h5>;
  const { authors } = data;
  console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar src={author.avatar.url} />
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                sx={{ marginRight: 2 }}
              >
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
