const employees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log('in readyNow');

    render();

    $('.js-btn-employee').on('click', addEmployee);
}


function addEmployee() {
    const newEmployeeSalary = {
        firstName: $('.js-input-first').val(),
        lastName: $('.js-input-last').val(),
        idNumber: $('.js-input-id').val(),
        titlePosition: ($('.js-input-title').val()),
        salary: $('.js-input-salary').val(),
    }
    console.log(newEmployeeSalary);

    employees.push(newEmployeeSalary);

    render();

}

function render() {
    console.log('render');
    const tableElement = $('.js-table');

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
    }
}