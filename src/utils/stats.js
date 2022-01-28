//assumes data is sorted
export default function getStats(data){
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
    console.log((sq_sum / (data.length)))
    var std = Math.sqrt(variance);
    var qrts = findQuarters(data);
    console.log(data.length);
    return [variance,min,max,mean,(max-min),std,qrts[0],qrts[1],qrts[2],sum];
}

function findQuarters(data){
    var ret = [NaN,NaN,NaN];
    if(data.length % 2 == 0){
        ret[0] = data[data.length/4]
        ret[1] = (data[(data.length+1)/2] + data[(data.length-1)/2])/2;
        ret[2] = data[(data.length/4)*3]
    } else{
        ret[0] = (data[(data.length+1)/4] + data[(data.length-1)/4])/2;
        ret[1] = data[data.length/2];
        ret[2] = (data[((data.length+1)/4)*3] + data[((data.length+1)/4)*3])/2;
    }
    return ret;
}
