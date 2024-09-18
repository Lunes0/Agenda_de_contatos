const formCad = document.getElementById('form-cadastrar');
const inputNome = document.getElementById('input-nome');
const inputTelefone = document.getElementById('input-telefone');
const nomes = [];
const numeros = [];
let linhas = '';

formCad.addEventListener('submit', function(e) {
	e.preventDefault();
	cadastraContato();
	atualizarTabela();
});

function cadastraContato() {
	if (nomes.includes(document.getElementById('input-nome').value) || numeros.includes(document.getElementById('input-telefone').value)) {
		alert('Contato já cadastrado!');
	} else {

		nomes.push(inputNome.value);
		numeros.push(parseInt(inputTelefone.value));

		let linha = '<tr>';
		linha += `<td>${inputNome.value}</td>`;
		linha += `<td>${inputTelefone.value}</td`;
		linha += '</tr>';

		linhas += linha;

		inputNome.value = '';
		inputTelefone.value = ''; 
	}
}

function atualizarTabela() {
	const tabela = document.querySelector('tbody');
	tabela.innerHTML = linhas;
}