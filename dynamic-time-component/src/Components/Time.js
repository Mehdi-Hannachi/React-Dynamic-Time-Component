import React from "react";

const duration = 360000;
var  seconds = Math.floor((duration / 1000) % 60);
 var minutes = Math.floor((duration / (1000 * 60)) % 60)
  var hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

function Time() {
  return (
    <div className="time">
      <div className="bloc">
        <span>{hours}</span>
        <span className="txt">Hours</span>
      </div>
      :
      <div className="bloc">
        <span>{minutes}</span>
        <span className="txt">Minutes</span>
      </div>
      :
      <div className="bloc">
        <span>{seconds}</span>
        <span className="txt">Seconds</span>
      </div>
    </div>
  );
}
export default Time;
