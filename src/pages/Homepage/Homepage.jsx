import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatsVotesAndFavs } from '../../api';
import { catsError, catsLoading } from '../../reducers/catReducer';
import { getAlert } from '../../reducers/alertReducer';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorPage } from '../../components/ErrorPage/';
import { AlertBar } from '../../components/AlertBar';
import { Navbar } from '../../components/Navbar';
import { CatList } from '../../components/CatList';

import './homepage.scss';

export const Homepage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, alert } = useSelector(state => ({
    isLoading: catsLoading(state),
    error: catsError(state),
    alert: getAlert(state)
  }));

  /* FETCHES DATA ON MOUNT */
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
      <AlertBar message={alert?.message} severity={alert?.severity} />
      <ErrorPage error={error} />
    </div>
  );
};
