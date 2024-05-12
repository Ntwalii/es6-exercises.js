function calculateSumThree(x, y, z) {
    return x + y + z;
  }
  
  function calculateSumFour(w, x, y, z) {
    return w + x + y + z;
  }

  function calculateSum(...x){
    return x.reduce((acc,value)=>acc+value)
  }
  
  function calculateAverage(arrayWithNumbers, numberOfMeasurements=3) {
    if (!Array.isArray(arrayWithNumbers)) {
      return null;
    }
  
    if (numberOfMeasurements !== 3 && numberOfMeasurements !== 4) {
      return null;
    }
  
    if (arrayWithNumbers.length !== numberOfMeasurements) {
      return null;
    }
  
    for (let number of arrayWithNumbers) {
      if (typeof number !== "number") {
        return null;
      }
    }
  
    if (numberOfMeasurements === 3) {
      return (
        calculateSum(...arrayWithNumbers) / 3
      );
    } else {
      return (
        calculateSum(...arrayWithNumbers) / 4
      );
    }
  }
  
  function testCalculateAverage() {
    if (calculateAverage("banana", 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6], "banana") !== null) {
      return false;
    }
  
    if (calculateAverage(["banana", 3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, 2, 3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([3, 1], 3) !== null) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6], 3) !== 2) {
      return false;
    }
  
    if (calculateAverage([1, -1, 6, 6], 4) !== 3) {
      return false;
    }
  
    /**
     * It would be so cool if I could just do this! But it looks like I can't do
     * it with ES5 ...
     */
    if (calculateAverage([1, -1, 6]) !== 2) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateAverage() === false) {
    console.log("The calculateAverage function is wrong.");
  } else {
    console.log("The calculateAverage function works fine!");
  }