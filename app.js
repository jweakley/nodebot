var five = require("johnny-five"),
    keypress = require('keypress');

(new five.Board()).on("ready", function() {

  var claw = new five.Servo({ pin: 9 }),
      arm =  new five.Servo({ pin: 10 }),
      wrist =  new five.Servo({ pin: 11 }),
      claw_degrees = 90,
      claw_incrementer = 1,
      arm_degrees = 90,
      arm_incrementer = 1,
      wrist_degrees = 90,
      wrist_incrementer = 1;

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  keypress(process.stdin);

  function ctrl_mod(base_inc, mod, key) {
    if (key.shift) {
      return base_inc;
    } else {
      return base_inc * mod;
    }
  }
  function servo_joint(servo, position, incrementer, mod, key, positve_key, negative_key) {

    if (key && key.name == positve_key) {
      position += ctrl_mod(incrementer, mod, key);
      servo.move( position );
    }

    if (key && key.name == negative_key) {
      position -= ctrl_mod(incrementer, mod, key);
      servo.move( position );
    }

    return position;
  }

  process.stdin.on("keypress", function(ch, key) {
    claw_degrees = servo_joint(claw, claw_degrees, claw_incrementer, 5, key, "a", "d");
    arm_degrees = servo_joint(arm, arm_degrees, arm_incrementer, 10, key, "w", "s");
    wrist_degrees = servo_joint(wrist, wrist_degrees, wrist_incrementer, 25, key, "e", "q");
  });
});
