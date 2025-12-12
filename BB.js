
let edit = [ "https://www.bb.com.br/site/compras-contratacao-e-venda-de-imoveis/compras-e-contratacoes/avisos-e-editais/", "https://www.bb.com.br/site/compras-contratacao-e-venda-de-imoveis/compras-e-contratacoes/avisos-e-editais/"];
let list = document.getElementById("lista");
let escritura = ["BB 2026", "BB 2025", "BB 2024"]

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

