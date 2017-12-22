const ArraySnippets = require('./snippets');
const chai = require('chai'), expect = chai.expect, should = chai.should;

const { arrMax, arrMin, compact, numOfOccurrences, difference, almostEqual, uniqueItems, nthItem } = ArraySnippets;

var assert = require('assert');
describe('Array', () => {
  const arr = [14, 3, 2, 4, 11, 14, 0, 8, 17, 9, 14, false, 8, 5, 13, 14, -4, 14, null, '', 12];
  describe('array max', () => {
    it('should return maximum element in array', function() {
      assert.equal(arrMax(arr), 17);
    });
  });
  describe('array min', () => {
    it('should return smallest element in array', function() {
      assert.equal(arrMin(arr), -4);
    });
  });
  describe('No falsy', function() {
    it('should remove all falsy values from array', function() {
      expect(compact(arr)).to.be.an('array').that.not.includes(false);
      expect(compact(arr)).to.be.an('array').that.not.includes('');
      expect(compact(arr)).to.be.an('array').that.not.includes(0);
    });
  });
  describe('number of occurrences', () => {
    it('should return the number of times a number appears in array', function() {
      assert.equal(numOfOccurrences(arr, 14), 5);
    });
  });
  describe('difference between arrays', () => {
    it('should return the difference between two arrays', function() {
      expect(difference([1,2,3,4], [1,2,5,6])).to.include(3);
      expect(difference([1,2,3,4], [1,2,5,6])).to.include(4);
    });
  });

  describe('Unique values', () => {
    it('should return only unique values from array', function() {
      expect(uniqueItems(arr)).to.not.include(14);
    });
  });

  describe('Nth item', () => {
    it('should return values at every nth element', function() {
      expect(nthItem(arr, 5)).to.deep.equal([14, 14, 14, 14, 12]);
    });
  });
});

describe('Maths', () => {
  describe('Elements are almost equal', () => {
    it('should return true when within 4 decimal places', function() {
      expect(almostEqual(Math.PI, 3.14159)).to.equal(true);
      expect(almostEqual(Math.PI, 3.14259)).to.equal(false);
    });
  });
});