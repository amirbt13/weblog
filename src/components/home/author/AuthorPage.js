import React from "react";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

import CardEl from "../../shared/CardEl";
import Loader from "../../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h1>Something went wrong...</h1>;

  const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            variant="rounded"
            src={author.avatar.url}
            sx={{ width: 260, height: 260 }}
          />
          <Typography component="h3" variant="h5" mt={4} fontWeight={700}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" mt={2} color="text.secondary">
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {author.posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
