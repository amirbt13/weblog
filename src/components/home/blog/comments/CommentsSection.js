import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../../../graphql/queries";
import { Grid, Typography } from "@mui/material";
import Loader from "../../../shared/Loader";

const CommentsSection = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log(loading, data, error);
  if (loading) return <Loader />;
  return (
    <Grid
      container
      sx={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary">
          نظرات
        </Typography>
      </Grid>
      {data.comments.map((comment) => (
        <Grid
          key={comment.id}
          item
          xs={12}
          border="1px silver solid"
          borderRadius={1}
          m={1}
          p={2}
        >
          <Typography component="p" variant="p" mb={3}>
            {comment.name}
          </Typography>
          <Typography
            component="p"
            variant="p"
            border="1px #f2f2f2 solid"
            borderRadius={1}
            p={1}
          >
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentsSection;
