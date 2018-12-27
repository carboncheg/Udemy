// let timerId = setInterval(printNumberInterval, 100);
// let i = 1;
// function printNumberInterval() {
//         console.log(i);
//         if (i == 20)
//         clearInterval(timerId);
//         i++;
// }



function printNumbersTimeout20_100() {
    var i = 1;
    var timerId = setTimeout(function go() {
      console.log(i);
      if (i < 20) setTimeout(go, 100);
      i++;
    }, 100);
  }
  printNumbersTimeout20_100();


  var runner1 = new Runner();
  var runner2 = new Runner();
  
  setInterval(function() {
    runner1.step();
  }, 15);
  
  // или второй?
  setTimeout(function go() {
    runner2.step();
    setTimeout(go, 15);
  }, 15);
  
  setTimeout(function() {
    alert( runner1.steps );
    alert( runner2.steps );
  }, 5000);