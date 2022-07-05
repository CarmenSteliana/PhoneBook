let agenda = [];

function adaugacontact() {
  let nume = document.querySelector("#nume").value;
  let telefon = document.querySelector("#telefon").value;
  let modifiedid = document.querySelector("#modifiedId").value;
  console.log(modifiedid)


  let contact = {
    nume: nume,
    telefon: telefon
  };

  if (contact.nume != "" && contact.telefon != "") {
    if (modifiedid !== "") {
      agenda[modifiedid] = contact
    } else {
      agenda.push(contact)
    }
  }

  document.querySelector("#nume").value = "";
  document.querySelector("#telefon").value = "";
  document.querySelector("#modifiedId").value = "";

  afiseazaAgenda()
}



function afiseazaAgenda() {
  let html = `<table>
  <tr>
    <th>Nume</th>
    <th>Telefon</th>
  </tr>`

  for (let i = 0; i < agenda.length; i++) {
    let nume = agenda[i].nume;
    let telefon = agenda[i].telefon;


    html = html + `<tr>
<td>${nume}</td>
<td>${telefon}</td>
<td><a href="javascript:modify(${i})">Modifica</a></td>
<td><a href="javascript:remove(${i})">Sterge</a></td>
</tr>`
  }

  html = html + `</table>`;


  if (agenda.length != 0) {
    document.querySelector("#agenda").innerHTML = html;
  } else {
    document.querySelector("#agenda").innerHTML = "";
  }

}

function remove(pos) {
  agenda.splice(pos, 1);
  afiseazaAgenda();
}

function modify(pos) {
  document.querySelector("#nume").value = agenda[pos].nume
  document.querySelector("#telefon").value = agenda[pos].telefon
  document.getElementById("modifiedId").value = pos;





}





