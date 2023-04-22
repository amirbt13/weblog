import React, { useEffect, useState } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../../../graphql/mutations";

const CommentField = ({ slug }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: {
      name: comment.name,
      email: comment.email,
      text: comment.text,
      slug,
    },
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  }
  function sendHandler() {
    const { name, email, text } = comment;
    if (name && email && text) {
      sendComment();
      console.log(data, loading, errors);
    } else {
      toast.error("تمام فیلد ها را پر کنید", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  useEffect(() => {
    if (data) {
      console.log(loading, data, errors);
      toast.success("نظر شما ارسال شد و پس از تایید نمایش داده خواهد شد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setComment({ ...comment, text: "" });
    }
    // eslint-disable-next-line
  }, [data]);
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
        <Typography component="p" variant="h6" fontWeight={600} color="primary">
          فرم ارسال نظرات
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام"
          variant="outlined"
          name="name"
          value={comment.name}
          onChange={changeHandler}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          name="email"
          value={comment.email}
          onChange={changeHandler}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          name="text"
          value={comment.text}
          onChange={changeHandler}
          sx={{ width: "100%" }}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال..
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentField;
