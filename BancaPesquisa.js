


/*
barradepesquisa
tag
*/


var input = document.getElementById("barradepesquisa");
input.addEventListener("keydown", Pesquisar());

function Pesquisar(){

    var pesquisa = document.getElementById("barradepesquisa").value;
    pesquisa = pesquisa.toLowerCase();
    pesquisa = pesquisa.trim(); /*ignora espaços*/

    var tags = document.getElementsByClassName("tag");

    var i;

    for(i=0; i<tags.length;i++){
        if(!tags[i].textContent.toLowerCase().includes(pesquisa)){
            tags[i].style.display="none";
        }
        else{
            tags[i].style.display="flex";
        }
    }

}
