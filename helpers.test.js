const { validateInput, findMean, findMedian, findMode } = require('./helpers');


describe("findMean", function() {
  it ("finds the mean of array of numbers", function() {
    expect(findMean([12, 4, 5, 27, 8])).toEqual(11.2);
    expect(findMean([12, 4, -5, 27, 8])).toEqual(9.2);
  });
});


describe("findMedian", function() {
  it ("finds the median of odd array of numbers", function() {
    expect(findMedian([12, 4, 27, 9, 15])).toEqual(12);
  });
  it ("finds the median of even array of numbers", function() {
    expect(findMedian([12, 4, 5, 27, 9, 15])).toEqual(10.5);
  });
});


describe("findMode", function() {
  it ("finds the mode of array of numbers", function() {
    expect(findMode([3, 3, 4, 4, 8, 5, 10])).toEqual(3);
    expect(findMode([3, 3, 3, 8, 8, 8, 8, 9])).toEqual(8);
  });
});
