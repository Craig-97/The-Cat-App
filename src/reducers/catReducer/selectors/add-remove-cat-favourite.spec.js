import { addFavouriteMockCats, mockCats } from '../../../mockData';
import {
  addCatFavourite,
  removeCatFavourite
} from './add-remove-cat-favourite';

describe('addCatFavourite', () => {
  const mockAddFavourite = {
    variables: {
      image_id: 'QyTrll_7t'
    },
    favourite: {
      id: 998877
    }
  };

  test('It returns updated cats array with favourite added', () => {
    const result = addCatFavourite(mockAddFavourite, mockCats);
    expect(result).toEqual(addFavouriteMockCats);
  });

  test('It returns same input if favourite is null', () => {
    const result = addCatFavourite(null, mockCats);
    expect(result).toEqual(mockCats);
  });

  test('It returns empty array if cats are null', () => {
    const result = addCatFavourite(mockAddFavourite, null);
    expect(result).toEqual([]);
  });

  test('It returns empty array if cats and favourite is null', () => {
    const result = addCatFavourite(null, null);
    expect(result).toEqual([]);
  });
});

describe('removeCatFavourite', () => {
  const mockRemoveFavouriteId = 998877;

  test('It returns updated cats array with favourite removed', () => {
    const result = removeCatFavourite(
      mockRemoveFavouriteId,
      addFavouriteMockCats
    );
    expect(result).toEqual(mockCats);
  });

  test('It returns same input if favourite is null', () => {
    const result = removeCatFavourite(null, mockCats);
    expect(result).toEqual(mockCats);
  });

  test('It returns empty array if cats are null', () => {
    const result = removeCatFavourite(mockRemoveFavouriteId, null);
    expect(result).toEqual([]);
  });

  test('It returns empty array if cats and favourite is null', () => {
    const result = removeCatFavourite(null, null);
    expect(result).toEqual([]);
  });
});
