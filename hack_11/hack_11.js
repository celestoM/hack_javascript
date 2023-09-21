/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
result = result.concat(numberArray, stringArray);
result[0]="one";
result[2]="three";
result[4]="five";
result[5]=stringArray[0].replace("oo","00");
result[6]=stringArray[1].replace("b","B");
result[7]=stringArray[2].replace("az","@z");
result[8]=stringArray[3].replace("x","X");
result[9]=stringArray[4].replace("e","3").replace("o","0");
result.unshift("h@ck");
result.push("h@ck");
result.splice(6, 0, "h@ck");

console.log(result);


//export result
module.exports = result;