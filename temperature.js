var five = require("johnny-five");

five.Board().on("ready", function(){
  console.log( "Hello" )

  var temp = new five.Sensor({
    pin:"A0",
    freq:250
  });

  temp.on("data", function(){
    console.log( this.value );
  });

});
