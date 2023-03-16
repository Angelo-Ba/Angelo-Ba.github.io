var aggiungiPiatti = document.querySelector(".aggiungi-piatto");
var remPiatti = document.querySelector(".rimuovi-piatti");
var piatti = document.querySelector(".piatti");
var listaOrdini = JSON.parse(localStorage.getItem('ordini')) || [];
aggiungiPiatti.addEventListener("submit", aggiungiPiatto);
remPiatti.addEventListener("click", rimuoviPiatti);
function aggiungiPiatto(event) {
    event.preventDefault();
    var nome = (this.querySelector('[name="piatto"]')).value;
    var piatto = {
        nome: nome,
        portato: false
    };
    listaOrdini.push(piatto);
    popolaLista();
    localStorage.setItem("ordini", JSON.stringify(listaOrdini));
    this.reset();
}
/*
function rimuoviPiatto(this: any,event: Event){
    event.preventDefault();
    const nome = (this.querySelector('[name="piatto"]')).value;
    const piatto = {
        nome,
        portato: false
    }
    listaOrdini.(piatto);
    popolaLista();
    localStorage.removeItem("ordini");
    this.reset();
}*/
function rimuoviPiatti() {
    localStorage.removeItem("ordini");
    listaOrdini.length = 0;
    popolaLista();
}
function popolaLista() {
    piatti.innerHTML = listaOrdini.map(function (ordine, index) {
        return "\n        <li>\n        <input type= \"checkbox\" data-index=\"".concat(index, "\" id=\"item").concat(index, "\" ").concat(ordine.portato ? 'checked' : '', " />\n        <label for=\"item").concat(index, "\">").concat(ordine.nome, " </label>    \n        </li>\n        ");
    }).join('');
}
piatti.addEventListener("click", togglePortato);
function togglePortato(event) {
    var el = event.target;
    if (el.matches('input')) {
        var index = Number(el.dataset.index);
        listaOrdini[index].portato = !listaOrdini[index].portato;
        localStorage.setItem('ordini', JSON.stringify(listaOrdini));
        popolaLista();
    }
}
popolaLista();
