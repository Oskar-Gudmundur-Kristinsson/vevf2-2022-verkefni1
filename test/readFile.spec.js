import assert from 'assert';
import  getNumsFromFile from '../src/utils/readFile.js';
import convertFromTerribleNumbersToGoodNumbers from '../src/utils/readFile.js';

describe('Opening the files', ()=>{
    it('opening the first test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test1.txt');
            var x = [];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
    it('opening the second test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test2.txt');
            var x = [1,2,3,4,5,6,7];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
    it('opening the third test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test3.txt');
            var x = [2,3];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
});

describe('testing number conversion', ()=>{
    it('should return numbers given European "numbers"', () => {
        var x = convertFromTerribleNumbersToGoodNumbers(["123.456,789","1,0",""])
        
    })

});