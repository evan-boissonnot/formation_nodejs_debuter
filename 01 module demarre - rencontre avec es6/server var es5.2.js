function testVariable() {
    uneVariableGlobale = 1;

    console.log("uneVariableGlobale = " + uneVariableGlobale);
}

testVariable();

uneVariableGlobale = 2;
console.log("uneVariableGlobale = " + uneVariableGlobale);

function testVariable2() {
    var uneVariableGlobale  = 3;
    console.log("uneVariableGlobale = " + uneVariableGlobale);
}

testVariable2();

console.log("uneVariableGlobale = " + uneVariableGlobale);

