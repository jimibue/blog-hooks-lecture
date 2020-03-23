import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";
import { useFormInput, } from "../hooks/useFormInput";


const BlogForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const title = useFormInput("");
  const body = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post("/api/blogs", { title, body, })
    axios.post("/api/blogs", { title: title.value, body: body.value, })

      .then(res => {
        props.add(res.data);
        props.toggleForm();
      })
  };

return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Title"
            placeholder="Title"
            name="title"
            required
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
            { ...title }
          />
          <Form.Input
            label="Body"
            placeholder="Body"
            name="body"
            required
            // onChange={(e) => setBody(e.target.value)}
            // value={body}
            { ...body }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  );
};

export default BlogForm