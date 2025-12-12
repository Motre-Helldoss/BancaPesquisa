
let edit = [ "https://www.itausocial.org.br/editais/", "https://www.itausocial.org.br/editais/", "https://www.itausocial.org.br/editais/"];
let list = document.getElementById("lista");
let escritura = ["ITAU 2026", "ITAU 2025", "ITAU 2024"]

for(i=0; i<edit.length ; i++){
let item = document.createElement("a");
let escrito = document.createElement("li")
escrito.classList.add("editais");
item.href = edit[i];
item.textContent = escritura[i];
escrito.textContent ="Edital numero" + (i+1) + ":";
list.appendChild(escrito);
escrito.appendChild(item);
}

