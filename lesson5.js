//normal function satetement

function sayHi()
{
  console.log('hi');
}

sayHi();

// function expression
var sayBye = function()
{
  console.log('bye');
};

sayBye();


function callFunction(fun){
  fun();
}

callFunction(sayBye);
