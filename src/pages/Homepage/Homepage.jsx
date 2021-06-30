import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatsVotesAndFavs } from '../../api';
import { catsError, catsLoading } from '../../reducers/catReducer';
import { getAlertMessage, getAlertSeverity } from '../../reducers/alertReducer';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorPage } from '../../components/ErrorPage/';
import { AlertBar } from '../../components/AlertBar';
import { Navbar } from '../../components/Navbar';
import { CatList } from '../../components/CatList';

import './homepage.scss';

export const Homepage = () => {
  const dispatch = useDispatch();

  /* Fetches cat isLoading, cat errors and alert messages from redux store */
  const { isLoading, error, message, severity } = useSelector(state => ({
    isLoading: catsLoading(state),
    error: catsError(state),
    message: getAlertMessage(state),
    severity: getAlertSeverity(state)
  }));

  /* Fetches all cat data on mount */
  useEffect(() => {
    dispatch(fetchCatsVotesAndFavs());
  }, [dispatch]);

  return (
    <div className="cats">
      <Navbar />
      {isLoading && !error ? (
        <LoadingSpinner className="cats__loading" text="LOADING CATS..." />
      ) : (
        <CatList />
      )}
      <AlertBar message={message} severity={severity} />
      <ErrorPage error={error} />
    </div>
  );
};
