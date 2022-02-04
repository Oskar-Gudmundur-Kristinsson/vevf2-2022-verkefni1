// assumes data is sorted
export default function getStats(data) {
  if (data.length < 1) {
    return 0;
  }
  let min = data[0];
  let max = data[0];
  let sum = 0;
  let sqSum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    sqSum = sqSum + data[i] * data[i];
    if (data[i] < min) {
      min = data[i];
    }
    if (data[i] > max) {
      max = data[i];
    }
  }
  const mean = sum / data.length;
  const variance = sqSum / data.length - mean * mean;
  const std = Math.sqrt(variance);
  const median = findMedian(data);

  const ret = {
    variance: variance,
    min: min,
    max: max,
    mean: mean,
    range: max - min,
    std: std,
    median: median,
    sum: sum,
  };
  return ret;
}

export function findMedian(data) {
  let ret;
  if (data.length % 2 === 0) {
    const mid = data.length / 2;
    ret = (data[Math.floor(mid)] + data[mid - 1]) / 2;
  } else {
    ret = data[Math.floor(data.length / 2)];
  }
  return ret;
}
