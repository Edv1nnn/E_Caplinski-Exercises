"use strict";

const minSalary = 1000;

const employees = [
    { name: 'Edvin', surname: 'Caplinski', salary: 2500 },
    { name: 'Erin', surname: 'Dunn', salary: 2000 },
    { name: 'Sylvie', surname: 'Mack', salary: 1500 },
    { name: 'Bob', surname: 'Brown', salary: 1000 }
];

function filterEmployees(employees, minSalary) {
    return employees.filter(employee => employee.salary > minSalary);
}

const filteredEmployees = filterEmployees(employees, minSalary);
console.log(filteredEmployees);