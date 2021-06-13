import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  catsError,
  catsUploading,
  catsUploadComplete
} from '../../reducers/catReducer';
import { LoadingSpinner } from '../LoadingSpinner';
import { UploadHeader } from './UploadHeader';
import { UploadFileButton } from './UploadFileButton';
import { UploadFileArea } from './UploadFileArea';
import { AlertBar } from '../AlertBar';
import { useNavigate } from 'react-router-dom';
import './uploadFile.scss';

export const UploadFile = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  /* Fetches upload error, isUploading and uploadComplete from redux store */
  const { error, isUploading, uploadComplete } = useSelector(state => ({
    error: catsError(state),
    isUploading: catsUploading(state),
    uploadComplete: catsUploadComplete(state)
  }));

  /* Once upload is complete navigate to home page */
  useEffect(() => {
    if (uploadComplete) {
      navigate('/');
    }
  }, [uploadComplete, navigate]);

  return (
    <div data-testid="upload" className="upload">
      <UploadHeader />
      {isUploading ? (
        <LoadingSpinner className="upload__loading" text="UPLOADING IMAGE..." />
      ) : (
        <UploadFileArea setFile={setFile} />
      )}
      <AlertBar message={error?.message} severity="error" />
      <UploadFileButton file={file} />
    </div>
  );
};
