// Polyfill for filter() method
// if (!Array.prototype.filter) {
//   Array.prototype.filter = function(callback, thisArg) {
//     if (this == null) {  // Check for null or undefined
//           throw new TypeError('Array.prototype.filter called on null or undefined');
//      }
//      if (typeof callback !== 'function') {  // Check if callback is a function
//           throw new TypeError(callback + ' is not a function');
//      }
//      const result = [];
//      const array = Object(this);  // Convert this to an object
//      const len = array.length >>> 0;  // Ensure length is a positive integer
//      for (let i = 0; i < len; i++) {
//           if (i in array) {  // Check if the index exists in the array
//                const value = array[i];
//                if (callback.call(thisArg, value, i, array)) {  // Call the callback with thisArg
//                     result.push(value);  // If true, add to result
//                }
//           }
//      }
//      return result;  // Return the new filtered array
//   };
// }         