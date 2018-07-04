import React, { Component } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { withAuth } from '@okta/okta-react';

class LoginButton extends Component {
  state = {
    authenticated: null,
    user: null,
    menuAnchorEl: null,
  };

  componentDidUpdate() {
    this.checkAuthentication();
  }

  componentDidMount() {
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      const user = await this.props.auth.getUser();
      this.setState({ authenticated, user });
    }
  }

  login = () => this.props.auth.login();
  logout = () => {
    this.handleMenuClose();
    this.props.auth.logout();
  };

  handleMenuOpen = event => this.setState({ menuAnchorEl: event.currentTarget });
  handleMenuClose = () => this.setState({ menuAnchorEl: null });

  render() {
    const { authenticated, user, menuAnchorEl } = this.state;

    if (authenticated == null) return null;
    if (!authenticated) return <Button color="inherit" onClick={this.login}>Login</Button>;

    const menuPosition = {
      vertical: 'top',
      horizontal: 'right',
    };

    return (
      <div>
        <IconButton onClick={this.handleMenuOpen} color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={menuPosition}
          transformOrigin={menuPosition}
          open={!!menuAnchorEl}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.logout}>
            <ListItemText
              primary="Logout"
              secondary={user && user.name}
            />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withAuth(LoginButton);
