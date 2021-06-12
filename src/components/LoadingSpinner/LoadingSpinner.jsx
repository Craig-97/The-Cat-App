import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const LoadingSpinner = ({ className, text }) => (
  <div className={className}>
    <CircularProgress size={100} />
    <h2>{text}</h2>
  </div>
);
