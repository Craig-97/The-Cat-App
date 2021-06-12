import { paginate } from './paginate';
import { mockCats, paginatedMockCats } from '../mockData';

const mockPageSize = 8;
const mockPageNumber = 1;

describe('paginate', () => {
  test('It returns paginated cats based on page size and number', () => {
    const result = paginate(mockCats, mockPageSize, mockPageNumber);
    expect(result).toEqual(paginatedMockCats);
  });

  test('It returns empty array when cats is empty array', () => {
    const result = paginate([], mockPageSize, mockPageNumber);
    expect(result).toEqual([]);
  });

  test('It returns null when cats is undefined', () => {
    const result = paginate(undefined, mockPageSize, mockPageNumber);
    expect(result).toEqual(null);
  });

  test('It returns null when pageSize is undefined', () => {
    const result = paginate(mockCats, undefined, mockPageNumber);
    expect(result).toEqual(null);
  });

  test('It returns null when pageNumber is undefined', () => {
    const result = paginate(mockCats, mockPageSize, undefined);
    expect(result).toEqual(null);
  });
});
