// registration.html
let mainForm = document.getElementById("user-form");

const fetchValues = () => {
  let values = localStorage.getItem("responses");
  if (values) {
    values = JSON.parse(values);
  } else {
    values = [];
  }
  return values;
};

let responses = fetchValues();

const saveForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    terms,
  };

  responses.push(entry);

  localStorage.setItem("responses", JSON.stringify(responses));
  printResponse();
};

const printResponse = () => {
  const responses = fetchValues();

  const tableEntries = responses
    .map((entry) => {
      const nametd = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailtd = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordtd = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobtd = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const termstd = `<td class='border px-4 py-2'>${entry.terms}</td>`;

      const entriestr = `<tr>${nametd} ${emailtd} ${passwordtd} ${dobtd} ${termstd}</tr>`;
      return entriestr;
    })
    .join("\n");

  const table = `<table><tr>
  
  <th class="px-4 py-2">Name</th>
  <th class="px-4 py-2">Email</th>
  <th class="px-4 py-2">Password</th>
  <th class="px-4 py-2">Dob</th>
  <th class="px-4 py-2">Accepted Terms?</th>

  </tr>${tableEntries}</table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};
mainForm.addEventListener("submit", saveForm);
printResponse();
