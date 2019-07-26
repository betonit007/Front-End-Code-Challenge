import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import ContactInfo from '../components/ContactInfo';
import placeHolder from '../components/apis/placeHolder';

class Posts extends React.Component {


  state = {
    posts: []
  }

  async componentDidMount() {
    const res = await placeHolder.get(`posts`)
    this.setState({ posts: res.data });
  }

  render() {
    return (
      <div style={{ paddingTop: '10px' }}>
        <Grid container spacing={2} justify="center">
          {this.state.posts.map(post => (
            <Grid item xs={12} key={post.title}>
              <Card>
                <CardActionArea>
                  <CardContent >
                    <Typography variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography component="p">{post.body}</Typography>
                  </CardContent>
                </CardActionArea>
                <ContactInfo userId={post.userId}/>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Posts;