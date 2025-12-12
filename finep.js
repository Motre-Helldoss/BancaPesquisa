
let edit = [ "http://www.finep.gov.br/chamadas-publicas/chamadaspublicas?situacao=aberta"];
let list = document.getElementById("lista");
let escritura = ["finep site oficial"]

for(i=0; i<edit.length ; i++){
let item = document.createElement("a");
let escrito = document.createElement("li")
escrito.classList.add("editais");
item.href = edit[i];
item.textContent = escritura[i];
escrito.textContent ="O FINEP tem seu proprio site dedicado a pesquisa de editais, confira:";
list.appendChild(escrito);
escrito.appendChild(item);
}
