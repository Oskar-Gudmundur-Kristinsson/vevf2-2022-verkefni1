import assert from "assert";
import convertFromTerribleNumbersToGoodNumbers from "../src/utils/convertNums.js";

describe("testing number conversion", () => {
  it('should return numbers given European "numbers"', () => {
    const i = ["123.456,789", "1,0", "000.000,0", "1.0e10", "0000", "3.441,1"];
    const x = convertFromTerribleNumbersToGoodNumbers(i);
    const y = ["123456.789", "1.0", "000000.0", "1.0e10", "0000", "3441.1"];
    assert.deepEqual(x, y);
  });
});
