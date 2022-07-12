// Code your solution here

function findMatching(array,name) {
    const result = array.filter(driver =>driver.toLowerCase() === name.toLowerCase());
    return result;
}

function fuzzyMatch(array,name) {
    const result = array.filter(driver => driver.charAt(0) ===  name.charAt(0));
    return result;
}

function matchName (driverObjects,testName) {
    const result = driverObjects.filter(driver => driver.name === testName);
    return result;
}

