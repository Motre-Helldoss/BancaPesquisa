let edit = [ "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZseyD47aRAxUYJLkGHcZxLuMQFnoECBkQAQ&url=https%3A%2F%2Fwww.ebanx.com%2Fpt-br%2Fedital%2F&usg=AOvVaw2CNPa7pskkxOYzyx1Rdr-_&opi=89978449",
 "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZseyD47aRAxUYJLkGHcZxLuMQFnoECCYQAQ&url=https%3A%2F%2Fwww.ebanx.com%2Fpt-br%2Fedital-de-captacao-24-25%2F&usg=AOvVaw3oXcxCjgBLcoFC0uMHAVJE&opi=89978449"];
let list = document.getElementById("lista");
let escritura = ["EBAX 25/26", "EBAX 24/25"]

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

