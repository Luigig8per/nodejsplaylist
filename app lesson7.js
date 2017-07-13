var events = require('events');

var myEmitter= new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(msg);
});

myEmitter.emit('someEvent','the event was emitted');

// element.on('click',function(){})
