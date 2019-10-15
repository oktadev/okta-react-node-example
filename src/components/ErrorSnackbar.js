import React from 'react';
import {
  withStyles,
  Snackbar,
  SnackbarContent,
  IconButton,
} from '@material-ui/core';
import { Error as ErrorIcon, Close as CloseIcon } from '@material-ui/icons';
import { compose, withState } from 'recompose';
import uuid from 'uuid/v4';

const styles = theme => ({
  snackbarContent: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
});

const ErrorSnackbar = ({ id, message, onClose, classes }) => (
  <Snackbar
    open
    autoHideDuration={6000}
    onClose={onClose}
  >
    <SnackbarContent
      className={`${classes.margin} ${classes.snackbarContent}`}
      aria-describedby={id}
      message={
        <span id={id} className={classes.message}>
          <ErrorIcon className={`${classes.icon} ${classes.iconVariant}`} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
    />
  </Snackbar>
);

export default compose(
  withState('id', 'setId', uuid),
  withStyles(styles),
)(ErrorSnackbar);
