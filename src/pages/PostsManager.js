import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import moment from 'moment';
import { orderBy } from 'lodash';
import { compose } from 'recompose';

const styles = theme => ({
  posts: {
    marginTop: 2 * theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit,
    },
  },
});

const API = process.env.REACT_APP_API || 'http://localhost:3001';

class PostsManager extends Component {
  state = {
    loading: true,
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  async fetch(method, endpoint) {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        headers: {
          authorization: `Bearer ${await this.props.auth.getAccessToken()}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  async getPosts() {
    this.setState({ loading: false, posts: await this.fetch('get', '/posts') });
  }

  async createPost(post) {
    await this.fetch('post', '/posts', post);
    this.getPosts();
  }

  async updatePost(id, post) {
    await this.fetch('patch', `/posts/${id}`, post);
    this.getPosts();
  }

  async deletePost(post) {
    if (window.confirm(`Are you sure you want to delete "${post.title}"`)) {
      await this.fetch('delete', `/posts/${post.id}`);
      this.getPosts();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="display1">Posts Manager</Typography>
        {this.state.posts.length > 0 ? (
          <Paper elevation={1} className={classes.posts}>
            <List>
              {orderBy(this.state.posts, ['updatedAt', 'title'], ['desc', 'asc']).map(post => (
                <ListItem key={post.id} button>
                  <ListItemText
                    primary={post.title}
                    secondary={post.updatedAt && `Updated ${moment(post.updatedAt).fromNow()}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.deletePost(post)} color="inherit">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <Typography variant="subheading">No posts to display</Typography>
        )}
      </Fragment>
    );
  }
}

export default compose(
  withAuth,
  withStyles(styles),
)(PostsManager);
