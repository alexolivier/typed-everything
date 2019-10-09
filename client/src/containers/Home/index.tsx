import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import { useCreatePostMutation, usePostsQuery } from '../../generated/graphql';

interface Props {
}

function Home(props: Props) {

  const posts = usePostsQuery()
  const [createPost] = useCreatePostMutation()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  return (
    <Container className="home">

      <Card>
        <CardHeader>
          Posts
            </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {posts.data && posts.data.posts.map((post) => {
                return (
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>{post.createdAt}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Create Post
            </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="body">Body</Label>
              <Input type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.currentTarget.value)} />
            </FormGroup>
          </Form>
          <Button onClick={async (e) => {
            await createPost({
              variables: {
                data: {
                  title,
                  body
                }
              }
            })
            posts.refetch()
            setBody("")
            setTitle("")
          }}>Submit</Button>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Home;
