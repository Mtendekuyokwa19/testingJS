function analyzeArray(array) {
  const summaryObj = {
    average: null,
    min: array[0],
    max: array[0],
    length: null,
  };

  summaryObj.length = array.length;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (summaryObj.min > array[i]) {
      summaryObj.min = array[i];
    }

    if (summaryObj.max < array[i]) {
      summaryObj.max = array[i];
    }
  }

  summaryObj.average = sum / summaryObj.length;

  return summaryObj;
}

module.exports = analyzeArray;
