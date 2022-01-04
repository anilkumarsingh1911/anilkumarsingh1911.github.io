function emp() {
  let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" } ' +
    ']}';

  const obj = JSON.parse(text);

  let data = "";
  for (let i = 0; i < 3; i++) {
    data += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>";
  }

  document.getElementById("demo").innerHTML = data;

}