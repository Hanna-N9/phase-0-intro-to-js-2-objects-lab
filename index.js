// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

// it does not modify the original employee (new object), but rather returns a clone with the new data
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
/* //Longer way, the previous one is more concise compared to this code
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee };
  newObj[key] = value;
  return newObj;
} */

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

//returns employee without the deleted key/value pair
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
