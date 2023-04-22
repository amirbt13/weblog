import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardEl = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card
      sx={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
      }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Typography component="p" variant="p" color="text.secondary" mr={1}>
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height={194}
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="p"
          variant="p"
          color="text.primary"
          fontWeight={500}
          height={50}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ marginBottom: "10px" }} />
      <Link to={`/blogs/${slug}`}>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 4 }}
          >
            مطالعه مقاله
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
};

export default CardEl;
