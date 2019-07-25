import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Person } from '@material-ui/icons'

import placeHolder from '../components/apis/placeHolder';

class Posts extends React.Component {

  
  state = {
    posts: []
  }

  async componentDidMount() {
    const res  = await placeHolder.get(`posts`)
    this.setState({ posts : res.data });
  }

  render() {
    console.log(this.state);
    return (
      <div style={{paddingTop: '10px'}}>
        <Grid container spacing={2} justify="center">
          {this.state.posts.map(post => (
            <Grid item xs={12} key={post.title}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Person />
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography component="p">{post.body}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Posts;