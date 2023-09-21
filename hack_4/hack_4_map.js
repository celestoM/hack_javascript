/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let array = [];
for(let i=1;i<=7;i+=2){
    array.push(i);
}

 result=array.map(function(element){
    return element;
});
console.log(result);


//export result
module.exports = result;