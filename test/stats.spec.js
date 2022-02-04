import assert from "assert";
import getStats from "../src/utils/stats.js";

describe("return stats from datasets", () => {
  it("should return variance min max and other stats of number 1-7", () => {
    const res = getStats([1, 2, 3, 4, 5, 6, 7]);
    const x = {
      variance: 4,
      min: 1,
      max: 7,
      mean: 4,
      range: 6,
      std: 2,
      median: 4,
      sum: 28,
    };
    assert.deepEqual(x, res);
  });
  it("should return 0 given empty data set", () => {
    const res = getStats([]);
    const x = 0;
    assert.deepEqual(x, res);
  });
  it("should return variance min max and other stats of number 1-8", () => {
    const res = getStats([1, 2, 3, 4, 5, 6, 7, 8]);
    const x = {
      variance: 5.25,
      min: 1,
      max: 8,
      mean: 4.5,
      range: 7,
      std: 2.29128784747792,
      median: 4.5,
      sum: 36,
    };
    assert.deepEqual(x, res);
  });
});
