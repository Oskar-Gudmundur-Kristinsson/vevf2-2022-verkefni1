import assert from 'assert';
import getNumsFromFile from '../src/utils/readFile.js';

describe('Opening the files', ()=>{
    it('opening the first test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test1');
            var x = [];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
    it('opening the second test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test2');
            var x = [1,2,3,4,5,6,7];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
    it('opening the third test file', () => {
        async function getNumsFromFileTestHelper(){
            var res = getNumsFromFile('test3');
            var x = [2,3];
            assert.deepEqual(x, res);
        }
        getNumsFromFileTestHelper();
    })
});
