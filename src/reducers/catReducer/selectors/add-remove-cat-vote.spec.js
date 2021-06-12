import {
  mockCats,
  addVoteMockCats,
  removeVoteMockCats
} from '../../../mockData';
import { addCatVote, removeCatVote } from './add-remove-cat-vote';

describe('addCatVote', () => {
  const mockAddVote = {
    variables: {
      image_id: 'QyTrll_7t',
      value: 1
    }
  };

  test('It returns updated cats array with vote added', () => {
    const result = addCatVote(mockAddVote, mockCats);
    expect(result).toEqual(addVoteMockCats);
  });

  test('It returns same input if vote is null', () => {
    const result = addCatVote(null, mockCats);
    expect(result).toEqual(mockCats);
  });

  test('It returns empty array if cats are null', () => {
    const result = addCatVote(mockAddVote, null);
    expect(result).toEqual([]);
  });

  test('It returns empty array if cats and vote is null', () => {
    const result = addCatVote(null, null);
    expect(result).toEqual([]);
  });
});

describe('removeCatVote', () => {
  const mockRemoveVote = {
    variables: {
      image_id: 'QyTrll_7t',
      value: 0
    }
  };

  test('It returns updated cats array with vote removed', () => {
    const result = removeCatVote(mockRemoveVote, mockCats);
    expect(result).toEqual(removeVoteMockCats);
  });

  test('It returns same input if vote is null', () => {
    const result = removeCatVote(null, mockCats);
    expect(result).toEqual(mockCats);
  });

  test('It returns empty array if cats are null', () => {
    const result = removeCatVote(mockRemoveVote, null);
    expect(result).toEqual([]);
  });

  test('It returns empty array if cats and vote is null', () => {
    const result = removeCatVote(null, null);
    expect(result).toEqual([]);
  });
});
