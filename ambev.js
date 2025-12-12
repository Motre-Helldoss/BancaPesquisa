
let edit = [ "https://prosas.com.br/editais/16452-edital-ambev-brasilidades-2026", "https://prosas.com.br/editais/15161-ambev-brasilidades-2025?subdominio=prosas", "https://prosas.com.br/editais/13712-edital-bora-ambev"];
let list = document.getElementById("lista");
let escritura = ["ambev 2026", "ambev 2025", "ambev 2024"]

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

