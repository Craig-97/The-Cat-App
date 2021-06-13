import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getCats } from '../../reducers/catReducer';
import { CatCard } from '../CatCard';
import { Pagination } from '@material-ui/lab';
import { paginate } from '../../utils';
import './catList.scss';

export const CatList = () => {
  const [page, setPage] = useState(1);
  const { cats } = useSelector(state => ({
    cats: getCats(state)
  }));

  const pageCount = useMemo(
    () => (cats?.length / 8 > 1 ? Math.ceil(cats?.length / 8) : 1),
    [cats]
  );

  const paginatedCats = useMemo(() => paginate(cats, 8, page), [cats, page]);

  return (
    Boolean(cats?.length) && (
      <div data-testid="cat-list" className="cats__container container">
        <div className="container__catlist catlist">
          {paginatedCats?.map((cat, index) => {
            return <CatCard key={index} cat={cat} />;
          })}
        </div>
        <Pagination
          className="container__pagination"
          count={pageCount}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          color="primary"
          size="large"
        />
      </div>
    )
  );
};
