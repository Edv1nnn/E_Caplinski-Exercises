"use strict";

const student = {
    firstName: "Edvin",
    lastName: "Čaplinski",
    age: 18,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(student.fullName());
