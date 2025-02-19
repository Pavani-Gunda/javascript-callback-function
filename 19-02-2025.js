function processNumbers(num1,num2, callback){
  return callback(num1,num2);

  
}
var result=processNumbers (3, 4, function(x,y){
  return x+y;
});
console.log("sum: ", result);



function greet(callBack){
 return callBack('Alice');
}
var a = greet(function(name){
    return name;

});
console.log("Hello", "", a + "!");


function calculate(num1, num2, anonymous){
   return anonymous(num1, num2);
}
var result= calculate(10,5,function(x,y){
  return x-y;

});
console.log( "difference:", result)