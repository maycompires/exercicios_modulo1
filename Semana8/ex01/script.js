// const estiloH1 = document.getElementById('title');
// estiloH1.style.backgroundColor = 'red';

// const estiloClasse = document.querySelector('.minhaClasse');
// estiloClasse.innerHTML = "Alterando texto de um elemento classe";
// estiloClasse.style.color = 'blue';

// const elementoCriado = document.createElement('p');
// elementoCriado.appendChild(document.createTextNode('texto de p criado.'));
// container.appendChild(elementoCriado);

// const container = document.querySelector("#container");
// const p = document.querySelector("#container p");
// container.removeChild(p);

// let meuElemento = document.getElementById("meuElemento");
// meuElemento.classList.add("novaClasse");
// console.log(meuElemento)


// var elementos = document.getElementsByClassName("Classe-paragrafo");
//         for (var i = 0; i < elementos.length; i++) {
//             elementos[i].style.color = "blue";
//             elementos[i].style.fontWeight = "normal";
//         }

// const meuElemento = document.getElementById('meuId');
//     meuElemento.classList.remove('classe-a-remover');

//     console.log(meuElemento)

// const meuElemento = document.getElementById('meuId');

// meuElemento.setAttribute('id', 'novoAtributo');

// console.log(meuElemento)

const removeElemento = document.querySelector('#meuId');
console.log(removeElemento);

removeElemento.removeAttribute('id');

