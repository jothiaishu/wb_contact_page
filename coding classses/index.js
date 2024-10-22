const str = "apple, banana, orange";
const arr = str.split(",");
console.log(arr)
function convertToUpperCase(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
} 
const result = convertToUpperCase(str)
console.log(str)