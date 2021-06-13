import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catsUploading } from '../../reducers/catReducer';
import { Button } from '@material-ui/core';
import { uploadCat } from '../../api';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export const UploadFileButton = ({ file }) => {
  const dispatch = useDispatch();

  /* Fetches isUploading from redux store */
  const { isUploading } = useSelector(state => ({
    isUploading: catsUploading(state)
  }));

  /* When upload file button is pressed, send POST request */
  const onUpload = () => {
    if (file) dispatch(uploadCat(file));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => onUpload()}
      disabled={isUploading}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
    </Button>
  );
};
