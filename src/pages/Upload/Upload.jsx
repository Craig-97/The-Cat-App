import React, { Fragment } from 'react';
import { Navbar } from '../../components/Navbar';
import { UploadFile } from '../../components/UploadFile';

export const Upload = () => {
  return (
    <Fragment>
      <Navbar />
      <UploadFile />
    </Fragment>
  );
};
