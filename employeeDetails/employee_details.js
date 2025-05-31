const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

 // Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//function for total salaries
function calculateTotalSalaries() {
    const emplos = employees;
    const totalSalaries = emplos.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
    document.getElementById('employeesDetails').innerHTML =`<p>${ totalSalaries}</p>`;
}

//function for hr

function displayHREmployees(){
    const hremployee = employees.filter(employee =>employee.department=='HR');
    let HRDATA='';
    for(let i=0;i<hremployee.length;i++){
        HRDATA +=  `<p>${hremployee[i].id}: ${hremployee[i].name}: ${hremployee[i].name} - ${hremployee[i].department} - $${hremployee[i].salary}</p>` ;
    }
    document.getElementById('employeesDetails').innerHTML = HRDATA;
}


// to find employee

function TakeINPT(){
    document.getElementById('employeesDetails').innerHTML='';
    document.getElementById("inputEID").style.display="Block";
}

document.getElementById('EIDfind').addEventListener('keydown',function (event) {
    if(event.key==='Enter'){
        document.getElementById("inputEID").style.display="none";
        findEmployeeById(document.getElementById('EIDfind').value);
    }
});
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id == employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = '<p>no employee has been found with this ID</p>';
      alert('no employee has been found with this ID');
    }
 }