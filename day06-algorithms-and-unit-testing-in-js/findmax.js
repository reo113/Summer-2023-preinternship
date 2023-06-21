function findMax(arr) {
  if (!arr.length) {
    return null;
  } else if (arr.length === 1) {
    return arr[0];
  }
  let max = arr[0];
  for (let i =0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMax;
