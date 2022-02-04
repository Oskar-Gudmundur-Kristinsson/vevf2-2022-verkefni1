import assert from "assert";
import getNumsFromFile from "../src/utils/readFile.js";

describe("Opening the files", () => {
  it("opening the first test file", async function () {
    const res = await getNumsFromFile("test1");
    const x = [];
    console.log(res);
    assert.deepEqual(x, res);
  });
  it("opening the second test file", async function () {
    const res = await getNumsFromFile("test2");
    const x = [1, 2, 3, 4, 5, 6, 7];
    console.log(res);
    assert.deepEqual(x, res);
  });
  it("opening the third test file", async function () {
    const res = await getNumsFromFile("test3");
    const x = [2, 3];
    console.log(res);
    assert.deepEqual(x, res);
  });
});
