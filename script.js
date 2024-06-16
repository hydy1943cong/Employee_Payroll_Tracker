// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
let addAnother=true;
let employeesArray=[];

const addAnotherQuestion = function (){
  addAnother=confirm ("Would you like to add another employee?")
}
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while (addAnother) {
    let firstNameInput= prompt ("Please enter the first name of the employee.");
    let lastNameInput = prompt("Please enter the last name of the employee.");
    let salaryInput = prompt ("Please enter the salary of the employee.");
    if (isNaN(salaryInput)) {
      salaryInput=0;
    } else {
      salaryInput=salaryInput}
    const employeeInput = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: salaryInput
    };
    employeesArray.push(employeeInput);
    addAnotherQuestion(); 
}

return(employeesArray);
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
    for(let i = 0; i < employeesArray.length; i++) {
      sum += parseFloat(employeesArray[i].salary);
}
const average = sum / employeesArray.length;
console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${average.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomChoice = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randomChoice].firstName} ${employeesArray[randomChoice].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
