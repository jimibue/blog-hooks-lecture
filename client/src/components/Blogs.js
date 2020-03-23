import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment, Button } from "semantic-ui-react";
import BlogForm from "./BlogForm";

const Blogs = props => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const addBlog = (blog) => setBlogs([ ...blogs, blog, ]);
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
      { showForm &&  <BlogForm toggleForm={setShowForm} add={addBlog} /> }
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Form" : "Show Form" }
      </Button>
      <List>{renderBlogs()}</List>
    </>
  );
};

export default Blogs;
