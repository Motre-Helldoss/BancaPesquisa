
document.addEventListener("DOMContentLoaded", () => {
let edit = [ "https://www.bb.com.br/site/compras-contratacao-e-venda-de-imoveis/compras-e-contratacoes/avisos-e-editais/", "https://www.bb.com.br/site/compras-contratacao-e-venda-de-imoveis/compras-e-contratacoes/avisos-e-editais/","https://www.bb.com.br/site/compras-contratacao-e-venda-de-imoveis/compras-e-contratacoes/avisos-e-editais/"];
let list = document.getElementById("lista");
if (list) {
let escritura = ["BB 2026", "BB 2025", "BB 2024"]

for(i=0; i<edit.length ; i++){

let item = document.createElement("a");
let escrito = document.createElement("li")
escrito.classList.add("editais");
item.href = edit[i];
item.textContent = escritura[i];
escrito.textContent ="Edital numero" + (i+1) + ":";
item.classList.add("text-purple");
list.appendChild(escrito);
escrito.appendChild(item);

}
}
let list2 = document.getElementById("lista2");
if (list2) {

let edit2 = [ "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZseyD47aRAxUYJLkGHcZxLuMQFnoECBkQAQ&url=https%3A%2F%2Fwww.ebanx.com%2Fpt-br%2Fedital%2F&usg=AOvVaw2CNPa7pskkxOYzyx1Rdr-_&opi=89978449",
 "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZseyD47aRAxUYJLkGHcZxLuMQFnoECCYQAQ&url=https%3A%2F%2Fwww.ebanx.com%2Fpt-br%2Fedital-de-captacao-24-25%2F&usg=AOvVaw3oXcxCjgBLcoFC0uMHAVJE&opi=89978449",];

let escritura2 = ["EBAX 25/26", "EBAX 24/25"]

for( let j=0; j<edit2.length; j++){
let item2 = document.createElement("a");
let escrito2 = document.createElement("li")
escrito2.classList.add("editais");
item2.href = edit2[j];
item2.classList.add("text-purple");
item2.textContent = escritura2[j];
escrito2.textContent ="Edital numero" + (j+1) + ":";
list2.appendChild(escrito2);
escrito2.appendChild(item2);
}
}
let list3 = document.getElementById("lista3");
let edit3 = [ "https://www.itausocial.org.br/editais/", "https://www.itausocial.org.br/editais/", "https://www.itausocial.org.br/editais/"];

let escritura3 = ["ITAU 2026", "ITAU 2025", "ITAU 2024"]
if(list3) {
for(i=0; i<edit3.length ; i++){
let item3 = document.createElement("a");
let escrito3 = document.createElement("li")
escrito3.classList.add("editais");
item3.classList.add("text-purple");
item3.href = edit3[i];
item3.textContent = escritura3[i];
escrito3.textContent ="Edital numero" + (i+1) + ":";
list3.appendChild(escrito3);
escrito3.appendChild(item3);
}
}
let list4 = document.getElementById("lista4");
if(list4){
let edit4 = [ "https://prosas.com.br/editais/16452-edital-ambev-brasilidades-2026", "https://prosas.com.br/editais/15161-ambev-brasilidades-2025?subdominio=prosas", "https://prosas.com.br/editais/13712-edital-bora-ambev"];

let escritura4 = ["ambev 2026", "ambev 2025", "ambev 2024"]

for(i=0; i<edit4.length ; i++){
let item4 = document.createElement("a");
let escrito4 = document.createElement("li")
escrito4.classList.add("editais");
item4.classList.add("text-purple");
item4.href = edit4[i];
item4.textContent = escritura4[i];
escrito4.textContent ="Edital numero" + (i+1) + ":";
list4.appendChild(escrito4);
escrito4.appendChild(item4);
}
}

let list5= document.getElementById("lista5");
if (list5) {
    let edit5 = [ "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf", "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf", "https://www.caixa.gov.br/sustentabilidade/fundo-socioambiental-caixa/chamadas-encerradas/Documents/Edital-001-2025-Agricultura-Regenerativa.pdf"];

let escritura5 = ["CAIXA 2026", "CAIXA 2025", "CAIXA 2024"]

for(i=0; i<edit5.length ; i++){
let item5 = document.createElement("a");
let escrito5 = document.createElement("li")
item5.classList.add("text-purple");
escrito5.classList.add("editais");
item5.href = edit5[i];
item5.textContent = escritura5[i];
escrito5.textContent ="Edital numero" + (i+1) + ":";
list5.appendChild(escrito5);
escrito5.appendChild(item5);
}

}
let list6 = document.getElementById("lista6");
if (list6) {

    
let edit6 = [ "http://www.finep.gov.br/chamadas-publicas/chamadaspublicas?situacao=aberta"];

let escritura6 = ["finep site oficial"]

for(i=0; i<edit6.length ; i++){
let item6 = document.createElement("a");
let escrito6 = document.createElement("li")
item6.classList.add("text-purple");
escrito6.classList.add("editais");
item6.href = edit6[i];
item6.textContent = escritura6[i];
escrito6.textContent ="O FINEP tem seu proprio site dedicado a pesquisa de editais, confira:";
list6.appendChild(escrito6);
escrito6.appendChild(item6);
}
}
});