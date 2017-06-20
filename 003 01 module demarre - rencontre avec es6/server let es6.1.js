// Promise avec setTimeout

for(var i=0; i<10; i++) {
    setTimeout(function () {
        console.log(i); // output '5' 5 times
  }, 100);
}

for(let i=0; i<10; i++) {
    setTimeout(function () {
        console.log(i);
  }, 100);
}

