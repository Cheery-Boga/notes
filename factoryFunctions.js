// const newUser = handle => {
//   return {
//     handle: handle,
//     followers: [], 
//     addFollowers: function(followerHandle){
//       this.followers.push(followerHandle); 
//     }
//   }
// }; 

// var scott = newUser("scott"); 

// console.log(scott); 

// scott.addFollowers("Gypsy"); 
// scott.followers; 

// console.log(scott);

const createCalculator = mathMethod => {
  var calculator;
  return {
    add: function additionFunction (number, num) {
      return number + num; 
      },

    subtraction: function subtractionFunction(number, num){
      return number - num; 
      },

    multiplication: function multiplicationFunction (number, num){
      return number * num; 
    }, 

    division: function divisionFunction(number, num){
      return number / num; 
    }
    }
  }


var calculator = createCalculator(); 
console.log(calculator); 
calculator.add(2,3); 
calculator.division(9, 3); 

