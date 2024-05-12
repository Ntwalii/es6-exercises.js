function calculateForceOnIncline(
    massInKg,
    heightInMeters,
    lengthOfInclineInMeters
  ) {
    if (
      typeof massInKg !== "number" ||
      typeof heightInMeters !== "number" ||
      typeof lengthOfInclineInMeters !== "number"
    ) {
      return null;
    }
  
    if (massInKg < 0 || heightInMeters < 0 || lengthOfInclineInMeters < 0) {
      return null;
    }
  
    const gravityAcceleration = 9.8;
  
    let gravitationalForce = gravityAcceleration * massInKg;
  
    let downhillForce = (force * heightInMeters) / lengthOfInclineInMeters;
  
    return Math.trunc(force);
  }
  
  function testCalculateForceOnIncline() {
    if (calculateForceOnIncline(3, "banana", 5) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, -8, 2) !== null) {
      return false;
    }
  
    if (calculateForceOnIncline(3, 3, 3) !== 29) {
      return false;
    }
  
    return true;
  }
  
  if (testCalculateForceOnIncline() === false) {
    console.log("The calculateForceOnIncline function is wrong.");
  } else {
    console.log("The calculateForceOnIncline function works fine!");
  }
  