//assumes data is sorted
export default function getStats(data){
    if(data.length < 1){
        return 0;
    }
    var min = data[0];
    var max = data[0];
    var sum = 0;
    var sq_sum = 0;
    var mean;
    for(var i = 0; i < data.length; i++){
        sum += data[i];
        sq_sum = sq_sum + (data[i] * data[i]);
        if(data[i] < min){
            min = data[i];
        }
        if(data[i] > max){
            max = data[i];
        }
    }
    mean = sum / data.length;
    var variance = (sq_sum / (data.length)) - (mean * mean);
    var std = Math.sqrt(variance);
    var median = findMedian(data);

    return [variance,min,max,mean,(max-min),std,median,sum];
}

export function findMedian(data){
    var ret;
    if(data.length % 2 == 0){
        var mid = data.length/2;
        ret = (data[ ( Math.floor(mid) ) ] + data[(mid-1)]) / 2;
    } else{
        ret = data[Math.floor(data.length/2)];
    }
    return ret;
}
