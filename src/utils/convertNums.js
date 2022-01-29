//input: list of European "numbers" as Strings
//output: list of numbers
export default function convertFromTerribleNumbersToGoodNumbers(nums) {
    var nums;
    for(var i = 0; i < nums.length;i++){
        if(nums[i].includes(",")|| nums[i].includes(".")) {
            if(!(nums[i].includes("e") || nums[i].includes("#") )){
                var temp = nums[i].split(",");
                if(nums[i].includes(".")){
                    temp.forEach((item,index) => {
                        temp[index] = item.split(".").join("");
                    })
                }
                nums[i] = temp.join(".");
            }
        }
    }
    return nums;
}
