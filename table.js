let student = [
  {
    rollNo: '7743',
    examination: 'annual 2019',
    name: 'muhammad inshal khan',
    fatherName: 'faiz muhammad',
    dateOfBirth: '05-06-2003 ( fifth june two thousand three )',
  },
  {
    rollNo: '7744',
    examination: 'annual 2019',
    name: 'muhammad raheel khan',
    fatherName: 'raheel rehan khan',
    dateOfBirth: '05-12-2003 ( fifth december two thousand three )',
  },
];

tableExist = false;

function rowCreate() {
  let body = document.body,
    table = document.createElement('table'),
    tbody = document.createElement('tbody'),
    topSection = document.createElement('div'),
    markSection = document.createElement('div'),
    field = document.querySelector('#inputField').value;
  for (s = 0; s < student.length; s++) {
    function create(no) {
      let headings = [
        'Roll Number',
        'Examination',
        'Name',
        'Father Name',
        'Date Of Birth',
      ];
      let info = [
        student[no].rollNo,
        student[no].examination,
        student[no].name,
        student[no].fatherName,
        student[no].dateOfBirth,
      ];

      for (r = 0; r < headings.length; r++) {
        let tr = document.createElement('tr');
        tr.id = 'tr' + r;
        for (d = 0; d < 1; d++) {
          let th = document.createElement('th');
          th.appendChild(document.createTextNode(headings[r].toUpperCase()));
          th.id = r + 'tr' + d;

          let td = document.createElement('td');
          td.appendChild(document.createTextNode(info[r].toUpperCase()));
          td.id = r + 'tr' + d;

          tr.appendChild(th);
          tr.appendChild(td);
        }

        tbody.appendChild(tr);
      }
    }

    if (field == student[s].rollNo) {
      create(s);
    }
    table.appendChild(tbody);
    table.className = 'table table-bordered';
    body.appendChild(table);

    tableExist = true;
  }
}

function rowFunction() {
  if (tableExist == false) {
    rowCreate();
  } else if (tableExist == true) {
    let tbl = document.querySelector('table');
    tbl.parentNode.removeChild(tbl);

    rowCreate();
  }
}
document.querySelector('button').addEventListener('click', rowFunction);
