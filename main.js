import { Serie } from "./serie.js";

class Modelo {
    constructor() {
        this.Series = [];
    }
}

class Vista {
    constructor() {

    }

    $ (id) {
        return document.getElementById(id);
    }
}

class Control {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.URL = "https://api.tvmaze.com/shows";
        this.chargeData();
    }

    chargeData () {
        let inicio = 1;
        let fin = inicio + 6;
        const modificarUrl = this.URL + "/2"; 

        fetch(modificarUrl, {method: "GET"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log({ a: err.message });
                window.alert("Error al cargar los datos")
            })
            .finally(() => {
                console.log("Promesa finalizada");
            });
    }
}

const modelo = new Modelo();
const vista = new Vista();
const control = new Control(modelo, vista);