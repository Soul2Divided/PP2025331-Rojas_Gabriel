export class Serie {
    constructor(id, url, name, lenguage, genres, image) {
        this.id = id;
        this.name = name;
        this.lenguage = lenguage;
        this.genres = genres;
        this.image = image;
    }

    toJsonString (objeto) {
        return JSON.stringify(objeto);
    }

    static createFromJsonString(json) {
        const dato = JSON.parse(json)
        const s = new Serie(dato.id, dato.name, dato.lenguage, dato.genres, dato.image);
        return s;
    }

    createHtmlElement() {
        const container = document.createElement("div");
        container.className.add("container");

        container.innerHTML = `
            <h2>${this.name}</h2>
            <p>Lenguaje: ${this.lenguage}</p>
            <p>Generos: ${this.genres}</p>
            <img src="${this.image}" alt="Imagen de ${this.name}" style="max-width: 200px;">
        `;
        return container;
    }

}