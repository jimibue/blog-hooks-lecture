import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment } from "semantic-ui-react";

const Blogs = props => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/blogs")
      .then(res => {
        setBlogs(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const renderBlogs = () => {
    return blogs.map(blog => (
      <Segment key={blog.id}>
        <List.Header as="h3">{blog.title}</List.Header>
        <List.Description>{blog.body}</List.Description>
      </Segment>
    ));
  };

  return (
    <>
      <Header as="h1">My Blogs</Header>
      <br />
      <List>{renderBlogs()}</List>
    </>
  );
};

export default Blogs;
