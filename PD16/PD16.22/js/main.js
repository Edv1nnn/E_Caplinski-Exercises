"use strict";

function functionName() {
    return arguments.callee.name || 'Hidden';
}

function newFunctionName() {
    console.log('calling:', functionName());
}

newFunctionName();