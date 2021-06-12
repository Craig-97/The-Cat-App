import React from 'react';
import { Typography } from '@material-ui/core';

export const UploadHeader = () => (
  <Typography className="upload__guidelines" variant="body1" component="h2">
    Any uploads must comply with the{' '}
    <a href="https://thecatapi.com/privacy"> upload guidelines</a> or face
    deletion.
  </Typography>
);
