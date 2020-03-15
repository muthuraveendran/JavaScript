var selectedRow = null;

function onFormSubmit(){
   var formValue = readValue();
//    if( selectedRow = null)
    writeValue(formValue);
    // else
    updateRecord(formValue)
    reset();
}



function readValue(){
    let formValue={};
    formValue.firstName =   document.getElementById("fullName").value;
    formValue.empCode =   document.getElementById("empCode").value;
    formValue.salary =   document.getElementById("salary").value;
    formValue.city =   document.getElementById("city").value;
    return formValue;
}

function writeValue(data){
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML= data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`
}

function reset(){
    document.getElementById("fullName").value ="";
    document.getElementById("empCode").value ="";
    document.getElementById("salary").value ="";
    document.getElementById("city").value ="";
    // selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.empCode;
    selectedRow.cells[2].innerHTML=formData.salary;
    selectedRow.cells[3].innerHTML=formData.city;
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);

}