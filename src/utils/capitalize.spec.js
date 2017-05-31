import { capitalize } from './capitalize';

describe('capitalize', () => {

  describe('when input is empty string', () => {
    it('returns empty string', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('when input is a non empty string', () => {
    it('returns the string capitalized', () => {
      expect(capitalize('abc def')).toBe('Abc def');
    });
  });

});
