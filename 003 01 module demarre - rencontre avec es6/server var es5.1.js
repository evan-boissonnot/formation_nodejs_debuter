"use strict";

function testVariable() {
    uneVariableGlobale = 1;

    console.log("uneVariableGlobale = " + uneVariableGlobale);
}

testVariable();

uneVariableGlobale = 2;

console.log("uneVariableGlobale = " + uneVariableGlobale);