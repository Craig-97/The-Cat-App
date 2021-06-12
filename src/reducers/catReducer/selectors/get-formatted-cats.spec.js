import {
  mockCats,
  mockVotes,
  mockFavourites,
  mockVotesAddedCats,
  mockFavouritesAddedCats,
  mockNoFormattedCats,
  mockFormattedCats
} from '../../../mockData';
import { getFormattedCats } from './get-formatted-cats';

describe('addCatFavourite', () => {
  test('It returns cats array formatted with votes and favourites', () => {
    const result = getFormattedCats(mockCats, mockFavourites, mockVotes);
    expect(result).toEqual(mockFormattedCats);
  });

  test('It returns cats array formatted with favourites', () => {
    const result = getFormattedCats(mockCats, mockFavourites, null);
    expect(result).toEqual(mockFavouritesAddedCats);
  });

  test('It returns cats array formatted with votes added', () => {
    const result = getFormattedCats(mockCats, null, mockVotes);
    expect(result).toEqual(mockVotesAddedCats);
  });

  test('It returns cats array with votes field added if votes and favourites are null', () => {
    const result = getFormattedCats(mockCats, null, null);
    expect(result).toEqual(mockNoFormattedCats);
  });

  test('It returns empty array if votes, favourite and cats are null', () => {
    const result = getFormattedCats(null, null, null);
    expect(result).toEqual([]);
  });
});
