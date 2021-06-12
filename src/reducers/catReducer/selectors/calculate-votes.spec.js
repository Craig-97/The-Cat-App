import { mockVotes } from '../../../mockData';
import { calculateVotes } from './calculate-votes';

describe('calculateVotes', () => {
  test('It returns calulcated votes as expected', () => {
    const result = calculateVotes(mockVotes);

    expect(result).toEqual([
      { image_id: '6R_EwIZDF', value: 2 },
      { image_id: 'Umfu6WUgZ', value: 1 }
    ]);
  });

  test('It returns empty array if votes is empty array', () => {
    const result = calculateVotes([]);
    expect(result).toEqual([]);
  });

  test('It returns empty array if votes is null', () => {
    const result = calculateVotes(null);
    expect(result).toEqual([]);
  });
});
