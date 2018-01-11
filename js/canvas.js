//requestAnimationFrame for Smart Animating
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback, 1000 / 60);
    };
})();

//Wartosci
var c;
var $;
var w;
var h;

//Mysz
var ms = {
  x: 75,
  y: 75
};

//wartosci myszy
function msmv(e) {
  ms.x = e.clientX;
  ms.y = e.clientY;
}


//Wyswietlane wartosci
var bin1 = "0101010101010101010101010101010101010101010";
var bin2 = "0101010101010101010101010101010101010101010";
var bin3 = "0101010101010101010101010101010101010101010";

//canvas
window.onload = function() {
  c = document.getElementById("canvas");
  $ = c.getContext("2d");
  //myszka
  window.addEventListener("mousemove", msmv, false);
  run();
}

function run() {
  go();
  window.requestAnimFrame(run, 120);
}

function go() {
  //wartosci wysokosci i dlugosci
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  //okreslenie wartosci czasu
  var t = Date.now();
  //zielonawa figura
  for (var i = 0; i < bin1.length; i++) {
    //cieniowanie
    $.shadowColor = "hsla(0,0%,0%,.70)";
    $.shadowOffsetX = 20;
    $.shadowOffsetY = 20;
    $.shadowBlur = 30;
    $.globalCompositeOperation = 'lighter';
    $.font = "bold 35px 'Arial'";
    $.fillStyle = "rgba(33,224,163,1)";

    var x1 = 100 * Math.cos(t / 100 + i / bin1.length * 20) + 100 * Math.cos(t / 300 + i / bin1.length * 20);
    var y1 = 100 * Math.cos(t / 100 + i / bin1.length * 20) + 100 * Math.sin(t / 100 + i / bin1.length * 20);

    $.fillText(bin1.charAt(i), ms.x + x1, ms.y + y1);
    $.fillText(bin1.charAt(i), ms.x + y1, ms.y + x1);
  }
  //czerwona figura
  for (var i = 0; i < bin2.length; i++) {
    $.fillStyle = "red";

    var x2 = Math.cos(t / 500 + i / bin2.length) * 200 * Math.cos(t / 500 * i / bin2.length);
    var y2 = Math.cos(t / 500 + i / bin2.length) * 200 * Math.sin(t / 500 * i / bin2.length);

    $.fillText(bin2.charAt(i), ms.x + x2, ms.y + y2);
    $.fillText(bin2.charAt(i), ms.x + y2, ms.y + x2);
  }
  //niebieska figura
  for (var i = 0; i < bin3.length; i++) {
    $.fillStyle = "blue";

    var x3 = Math.cos(t / 1000 + i / bin3.length) * 200 * Math.cos(t / 1000 * i / bin3.length);
    var y3 = Math.cos(t / 1000 + i / bin3.length) * 200 * Math.sin(t / 1000 * i / bin3.length);

    $.fillText(bin3.charAt(i), ms.x + x3, ms.y + y3);
    $.fillText(bin3.charAt(i), ms.x + y3, ms.y + x3);
  }
}


