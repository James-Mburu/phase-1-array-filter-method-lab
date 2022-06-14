
// function findMatching(drivers, name) { 
//     let result = drivers.filter(drivers => drivers.trim().toLowerCase() == name.toLowerCase()); 
//     return result; 
//  } 

function findMatching(drivers, name) {
    // return a list of all drivers whose name is the same as the provided name
      return drivers.filter(function(driver) {
          return driver.toLowerCase() === name.toLowerCase();
      }
      );
  }
  
  function fuzzyMatch(drivers, name) {
    // return a list of all drivers whose name begins with the provided letters
      return drivers.filter(function(driver) {
          return driver.startsWith(name);
      }
      );
  }
  
  function matchName(drivers_objects, name) {
    // return a list of all driver objects whose name attribute matches the provided name
      return drivers_objects.filter(function(driver) {
          return driver.name === name;
      }
      );
  }