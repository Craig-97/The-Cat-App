import React, { Fragment } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Typography } from '@material-ui/core';

export const UploadFileArea = ({ setFile }) => {
  const handleChange = files => {
    if (files?.length) {
      setFile(files?.[0]);
    }
  };

  return (
    <Fragment>
      <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={'Drag and drop an image here or click to add file'}
        filesLimit={1}
        onChange={files => handleChange(files)}
        alertSnackbarProps={{
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
        }}
      />
      <Typography
        className="upload__type"
        gutterBottom
        variant="h5"
        component="h5"
      >
        Upload a .jpg or .png Cat Image
      </Typography>
    </Fragment>
  );
};
