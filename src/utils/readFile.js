import fs from "fs";
import convertFromTerribleNumbersToGoodNumbers from './convertNums.js';

export default function getNumsFromFile(filePath) {
    try {
        var path = process.cwd() + "/data/" + filePath + ".txt";
        return new Promise((resolve, reject) => { 
            fs.readFile(path, "utf-8", function (err, data) {
                var nums = data;
                console.log(path);
                //split data into array with newline
                nums = nums.split(/\r?\n/);
                //remove empty elements
                nums = nums.filter((n) => n);
                nums = convertFromTerribleNumbersToGoodNumbers(nums);
                //convert to numbers
                nums = nums.map(Number);
                //get rid of NaNers
                nums = nums.filter(Boolean);
                //sort em while we are at it
                nums.sort((a, b) => a - b);

                resolve(nums);
            });
        });
        
    } catch (err) {
        console.error(err);
    }
}
