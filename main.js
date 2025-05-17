import { Serie } from "./serie.js";

class Modelo {
    constructor() {
        this.Series = [];
    }
}

class Vista {
    constructor() {
        this.seriesPrincipal = this.$("series");
        this.btnSiguiente = this.$("siguiente");
        this.btnAnterior = this.$("anterior");
        this.principal = this.$("principal");
    }

    $ (id) {
        return document.getElementById(id);
    }

    addSerie () {
        this.seriesPrincipal.innerHTML = '';

        this.modelo.Series.forEach((dato, index) => {
            const serie = Serie.createFromJsonString(dato);
            const elemento = serie.createHtmlElement(index, false);
            this.seriesPrincipal.appendChild(elemento);
        });
    }
}

class Control {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.modelo = modelo;
        this.URL = "https://api.tvmaze.com/shows";
        this.lastId = 0;
        this.chargeData(0);
        this.vista.btnSiguiente.addEventListener("click", (e) => {
            e.preventDefault();
            this.paginaSiguiente();
        });
        this.vista.btnAnterior.addEventListener("click", (e) => {
            e.preventDefault();
            this.paginaAnterior();
        });
        this.vista.principal.addEventListener("click", (e) => {
            e.preventDefault();
            this.imageURL(e);
        })
        this.vista.seriesPrincipal.addEventListener("click", (e) => {
            e.preventDefault();
            if(e.target.id === "guardar") {
                // this.testing();
                const index = e.target.getAttribute("data-index");
                const serieGuardar = this.modelo.Series[index];
                Serie.guardarSerie(serieGuardar);
            }
        })
    }

    chargeData (ini) {
        let inicio = ini;
        let fin = inicio + 6;

        fetch(this.URL, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            const arraySeries = [];
            for(let i=inicio; i < fin; i++) {
                const s = Serie.createFromJsonString(data[i])
                arraySeries.push(s);
            }
            
            this.modelo.Series = arraySeries;

            console.log(this.modelo.Series);

            this.vista.addSerie();
        })
        .catch(err => {
            console.log({ a: err.message });
            window.alert("Error al cargar los datos")
        })
        .finally(() => {
            console.log("Promesa finalizada");
        });
    }

    paginaSiguiente() {
        this.modelo.Series.forEach(s => {
            this.lastId = s.id;
        });

        this.chargeData(this.lastId);
    }

    paginaAnterior() {
        let n = this.modelo.Series[0].id;

        if (n > 0) {
            this.lastId = n - 7;
            this.chargeData(this.lastId);
        }
    }

    imageURL(e) {
        const target = e.target;

        if (target.id === "screenImage") {
            const idClick = target.getAttribute("data-index");
            const urlClick = this.modelo.Series[idClick].url;
            
            window.open(urlClick);
        }
    }

    testing () {
        //localStorage.removeItem("arrayLocal");
    }
}

const modelo = new Modelo();
const vista = new Vista();
const control = new Control(modelo, vista);