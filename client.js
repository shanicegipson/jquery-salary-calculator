const employees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log('in readyNow');

    render();

    $('.js-btn-employee').on('click', addEmployee);
    $('.js-btn-delete').on('click', deleteEmployee);
}


function addEmployee() {
    const newEmployeeSalary = {
        firstName: $('.js-input-first').val(),
        lastName: $('.js-input-last').val(),
        idNumber: $('.js-input-id').val(),
        titlePosition: $('.js-input-title').val(),
        salary: $('.js-input-salary').val(),
    }
    employees.push(newEmployeeSalary);
    
    render();

    $('.js-input-first').val(''),
    $('.js-input-last').val(''),
    $('.js-input-id').val(''),
    $('.js-input-title').val(''),
    $('.js-input-salary').val('')
}

function render() {
   
    const tableElement = $('.js-table-data');

    tableElement.empty();
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        tableElement.append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.titlePosition}</td>
            <td>${employee.salary}</td>
        </tr>`);
        addTotalSalary();
    }
}

function addTotalSalary() {

    let totalSalary = 0;

    for (let i=0; i<employees.length; i++){
        
        totalSalary += parseInt(employees[i].salary);
    }
    
    let total = $('#totalMonthlyBudget');
    total.empty();
    total.append ( totalSalary );
    
}

function deleteEmployee() {
    console.log ('bye');
}