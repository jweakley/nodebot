var five = require("johnny-five"),
    board, photoresistor,

board = new five.Board();

board.on("ready", function() {
  console.log("Hello")

  // Create a new `photoresistor` hardware instance.
  photoresistor = new five.Sensor({
    pin: "A1",
    freq: 250
  });

  photoresistor.on("data", function() {

    console.log( this.value ); // 0 is max , 100 is max dark
  });
});
