import fs from "fs";

export default function getNumsFromFile(filePath) {
    try {
        var path = process.cwd() + "/data/" + filePath;
        return new Promise((resolve, reject) => { 
            fs.readFile(path, "utf-8", function (err, data) {
                var nums = data;
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
                console.log(nums);

                resolve(nums);
            });
        });
        
    } catch (err) {
        console.error(err);
    }
}

//input: list of European "numbers" as Strings
//output: list of numbers
export function convertFromTerribleNumbersToGoodNumbers(nums) {
    for(var i = 0; i < nums.length;i++){
        if(nums[i].includes(",")|| nums[i].includes(".")) {
            if(!(nums[i].includes("e") || nums[i].includes("#") )){
                var temp = nums[i].split(",");
                if(nums[i].includes(".")){
                    temp.forEach((item,index) => {
                        temp[index] = item.split(".").join("");
                    })
                }
                nums[i] = (temp.join("."));
            }
        }
    }
    return nums;
}

function removeCommas(nums){
    
}