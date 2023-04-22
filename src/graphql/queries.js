import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      id
      slug
      title
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      slug
      name
      id
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      description {
        html
      }
      field
      name
      posts {
        coverPhoto {
          url
        }
        title
        slug
        id
      }
    }
  }
`;

export const GET_BLOG_INFO = gql`
  query getBlog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      coverPhoto {
        url
      }
      title
      slug
      content {
        html
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      id
      text
    }
  }
`;
