export class Serie {
    constructor(id, url, name, language, genres, image) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.language = language;
        this.genres = genres;
        this.image = image;
    }

    toJsonString (objeto) {
        return JSON.stringify(objeto);
    }

    static createFromJsonString (dato) {
        return new Serie(
            dato.id,
            dato.url,
            dato.name,
            dato.language,
            dato.genres,
            dato.image?.medium || ""
        );
    }

    createHtmlElement () {
        const container = document.createElement("div");
        container.classList.add("container");

        container.innerHTML = `
            <h2>${this.name}</h2>
            <p>Lenguaje: ${this.language}</p>
            <p>Generos: ${this.genres}</p>
            <img src="${this.image}" alt="Imagen de ${this.name}" style="max-width: 200px;">
        `;
        return container;
    }

    guardarSerie (s) {
        localStorage.setItem("serieGuardada", JSON.stringify(s));
    }

}