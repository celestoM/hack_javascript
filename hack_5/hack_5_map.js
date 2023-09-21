/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let array=[]
for (let i=7;i>=1;i-=2){
    array.push(i);
}
result=array.map(function(element){
    return element
});
console.log(result);

//export result
module.exports = result;