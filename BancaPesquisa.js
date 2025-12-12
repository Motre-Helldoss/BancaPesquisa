/*
barradepesquisa
tag
*/

// Estrutura de dados simples: edite/adicione objetos aqui
const cardsData = [
	{
		id: 1,
		titulo: "Banco do Brasil ",
		descricao: "O Banco do Brasil é uma instituição financeira tradicional que oferece serviços bancários, crédito e investimentos em todo o país.",
		tags: ["ServiçosBancários","CréditoEInvestimentos"],
        link: "index2.html",
		img: "https://logopng.com.br/logos/banco-do-brasil-5.png"
	},
	{
		id: 2,
		titulo: "EBAX",
		descricao: "Fintech brasileira que facilita pagamentos digitais e conecta empresas globais a consumidores da América Latina.",
		tags: ["PagamentosDigitais","TecnologiaFinanceira"],
        link: "index3.html",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZcPqTcUOtdUi3CRnrXg8LiNIjRNFG3ZxCQ&s" 
	},
	{
		id: 3,
		titulo: "ITAU",
		descricao: "Um dos maiores bancos do país, conhecido por serviços financeiros e forte presença digital.",
		tags: ["InteligênciaArtificiala","InovaçãoBancária"],
        link: "index4.html",
		img: "https://play-lh.googleusercontent.com/gRcutACE4XkEHmxcbUdOehxpTbp_LjmwJ6qIEbqfD34oh9feTNhTnlDgf97HEZ9eGKY"
	},
    {
        id: 4,
        titulo: "AMBEV",
        descricao: "Gigante de bebidas que produz marcas populares de cerveja, refrigerantes e energéticos",
        link: "index5.html",
        tags: ["PesquisaDeBebidas","InovaçãoEmBebidas"],
        img: "https://abir.org.br/abir2022/wp-content/uploads/2015/11/logo-ambev.jpg"
    },
	 {
        id: 6,
        titulo: "Caixa",
        descricao: "Banco público focado em habitação, benefícios sociais e serviços financeiros.",
        link: "index6.html",
        tags: ["HabitaçãoSocial","ServiçosFinanceiros"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwBZuV1uFeQBC7wlqt4Pdm47psaSW2LSFvA&s"
    },
	{
        id: 7,
        titulo: "FINEP",
        descricao: "Agência pública que financia inovação, pesquisa e desenvolvimento tecnológico no Brasil",
        link: "index7.html",
        tags: ["InovaçãoTecnológica","FinanciamentoPesquisa"],
        img: "https://imeve.com.br/uploads/pagina/pagina/2018/12/dKOYNBPlfIS0r6dW/finep-imeve-banner_400x400.png"
    }
];

// função que gera os cards a partir de um array (usa map)
function renderizarCards(dataArray) {
	const container = document.getElementById("cardContainer");
	if (!container) return;

	const html = dataArray.map(item => {
		const tagsHtml = item.tags.map(t => `<span type="button">${(t)}</span>`);
		return `
			<div class="card col-12 col-md-6 col-lg-4 oscards tag ${item.tags}">
				<img class="card-img-top" src="${(item.img)}" alt="${(item.title)}">
				<div class="infosdoscards card-body">
					<h4>${(item.titulo)}</h4>
					<p>${(item.descricao)}</p>
                    <a href="${(item.link)}" class="btn custom-btn" target="_blank">Acessar</a>
				</div>
				<div class="tags">
					${tagsHtml}
				</div>
			</div>
		`;
	}).join("");
	container.innerHTML = html;
}

function renderizarPaginaIndividual(id) {
    const empresa = cardsData.find(e => e.id == id);
    const container = document.getElementById("cardContainer");

    if (!empresa) {
        container.innerHTML = "<h2>Empresa não encontrada</h2>";
        return;
    }

    container.innerHTML = `
        <div class="col-12 text-center p-4">
            <img src="${empresa.img}" style="width:250px; border-radius:10px;">
            <h2 class="mt-3">${empresa.titulo}</h2>
            <p>${empresa.detalhes}</p>

            <a href="index.html" class="btn custom-btn mt-3">Voltar</a>
        </div>
    `;
}


// Pesquisa simples: filtra por título, descrição ou tags
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
// Inicialização
document.addEventListener("DOMContentLoaded", () => {
	// renderiza tudo inicialmente
	renderizarCards(cardsData);

	// liga o input ao filtro (event 'input' para resposta em tempo real)
	const input = document.getElementById("barradepesquisa");
	if (input) {
		input.addEventListener("input", Pesquisar);
	}
});

