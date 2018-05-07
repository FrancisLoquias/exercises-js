function myFunction() {
    var table = document.getElementById('output'),
        row = table.insertRow(0),
        cell1 = row.insertCell(0),
        cell2 = row.insertCell(1);

    cell1.innerHTML = 'NEW CELL1';
    cell2.innerHTML = 'NEW CELL2';
}