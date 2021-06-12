import { capitalizeFirstLetter } from './capitalize';

describe('capitalize', () => {
  test('It returns first letter capital when string is lowercase', () => {
    const result = capitalizeFirstLetter('capital');
    expect(result).toEqual('Capital');
  });

  test('It returns first letter capital when string is already capitalized', () => {
    const result = capitalizeFirstLetter('Capital');
    expect(result).toEqual('Capital');
  });

  test('It returns null when string is undefined', () => {
    const result = capitalizeFirstLetter(undefined);
    expect(result).toEqual(null);
  });

  test('It returns null when string is null', () => {
    const result = capitalizeFirstLetter(null);
    expect(result).toEqual(null);
  });
});
