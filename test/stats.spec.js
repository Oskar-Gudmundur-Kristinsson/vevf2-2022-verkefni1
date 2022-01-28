import assert from 'assert';
import getStats from '../src/utils/stats.js';

describe('return stats from datasets', ()=>{
    it('should return variance min max and other stats of number 1-7', () => {
        var res = getStats([1,2,3,4,5,6,7]);
        var x = [4,1,7,4,6,2,4,28];
        assert.deepEqual(x, res);
    })
    it('should return 0 given empty data set', () => {
        var res = getStats([]);
        var x = 0;
        assert.deepEqual(x, res);
    })
    it('should return variance min max and other stats of number 1-8', () => {
        var res = getStats([1,2,3,4,5,6,7,8]);
        var x = [5.25,1,8,4.5,7,2.29128784747792,4.5,36];
        assert.deepEqual(x, res);
    })
});