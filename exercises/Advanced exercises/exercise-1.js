function calculateSpeed(
    startingSpeedInKmPerHour,
    accelerationInMetersPerSquareSecond,
    timeInSeconds,
  ) {
    let multiply = (x,y) => x*y; 
    if (
      typeof startingSpeedInKmPerHour !== "number" ||
      typeof accelerationInMetersPerSquareSecond !== "number" ||
      typeof timeInSeconds !== "number"
    ) {
      return null;
    }
  
    if (
      startingSpeedInKmPerHour < 0 ||
      accelerationInMetersPerSquareSecond < 0 ||
      timeInSeconds < 0
    ) {
      return null;
    }
  
    return (
      startingSpeedInKmPerHour +
      multiply(accelerationInMetersPerSquareSecond, timeInSeconds)
    );
  }
  
  function testCalculateSpeed() {
    if (calculateSpeed("banana", 3, 1) !== null) {
      return false;
    }
  
    if (calculateSpeed(3, -8, 2) !== null) {
      return false;
    }
  
    if (calculateSpeed(3, 3, 3) !== 12) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateSpeed() === false) {
    console.log("The calculateSpeed function is wrong.");
  } else {
    console.log("The calculateSpeed function works fine!");
  }
  

  