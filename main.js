
class Modelo {
    constructor() {
        this.array = [];
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
    }
}

const modelo = new Modelo();
const vista = new Vista();
const control = new Control(modelo, vista);