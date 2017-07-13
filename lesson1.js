
console.log(__dirname);
console.log(__filename);

var time=0;

setTimeout(function(){
  console.log('3 seconds have passed');
}, 3000);

var timer= setInterval(function(){
  time+=2;
  console.log(time + 'seconds have passed');
  console.log('Variable time = ' + time);
  if (time>5){
    clearInterval(timer);
  }
}, 2000);
