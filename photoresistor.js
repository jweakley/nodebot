var five = require("johnny-five"),
    board, photoresistor,

board = new five.Board();

board.on("ready", function() {
  console.log("Hello")

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  photoresistor.scale([0,100]).on("data", function() {
    console.log( this.value ); // 0 is max light, 100 is max dark
  });
});


// References
//
// http://nakkaya.com/2009/10/29/connecting-a-photoresistor-to-an-arduino/
