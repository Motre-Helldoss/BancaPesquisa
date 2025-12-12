let edit = [ "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf", "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf", "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf"];
let list = document.getElementById("lista");
let escritura = ["CAIXA 2026", "CAIXA 2025", "CAIXA 2024"]

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

