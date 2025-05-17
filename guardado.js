import { Serie } from "./serie.js";

mostrarGuardados(getLocalArray());
ordenar();

function getLocalArray () {
    let localStorageArray = localStorage.getItem('arrayLocal');

    localStorageArray = JSON.parse(localStorageArray);

    return localStorageArray;
}

function mostrarGuardados (arr) {
    const seriesGuardadas = document.getElementById('seriesGuardadas');

    seriesGuardadas.innerHTML = '';

    arr.forEach((dato, index) => {
        const serie = Serie.createFromJsonString(dato);
        const elemento = serie.createHtmlElement(index, true);
        seriesGuardadas.appendChild(elemento);
    });
}

function ordenar () {
    const btnOrdenarNombre = document.getElementById('s_nombre');
    const btnOrdenarId = document.getElementById('s_id');
    let arr = getLocalArray();

    btnOrdenarNombre.addEventListener("click", (e) => {
        arr.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        mostrarGuardados(arr);
    });

    btnOrdenarId.addEventListener("click", (e) => {
        arr.sort((a, b) => a.id - b.id);
        mostrarGuardados(arr);
    });
}