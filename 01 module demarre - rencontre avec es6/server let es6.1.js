console.log("let");

for(let i = 1; i < 10; i++) {
    console.log(i);
}

console.log("var");

for(var i = 1; i < 10; i++) {
    console.log(i);
}

console.log("var");

function control(callback) {
   
    callback();
}

for(var i = 1; i < 10; i++) {
    control()
}
