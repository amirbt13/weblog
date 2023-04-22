import React from "react";
import CommentField from "./comments/CommentField";

import Loader from "../../shared/Loader";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../../graphql/queries";
import sanitizeHtml from "sanitize-html";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CommentsSection from "./comments/CommentsSection";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h3>Something went wrong...</h3>;
  const { post } = data;
  console.log(post);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={8} display="flex" justifyContent="space-between">
          <Typography component="h2" variant="h4" color="primary">
            {post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={10}>
          <img
            src={post.coverPhoto.url}
            alt=""
            width="100%"
            style={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box component="div" display="flex" alignItems="center" mt={8}>
            <Avatar
              src={post.author.avatar.url}
              sx={{ width: 80, height: 80 }}
            />
            <Box mr={1}>
              <Typography component="h5" variant="h5">
                {post.author.name}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {post.author.field}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} mt={4}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
        <Grid xs={12}>
          <CommentField slug={post.slug} />
        </Grid>
        <Grid xs={12}>
          <CommentsSection slug={post.slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
