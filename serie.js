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
            dato.image
        );
    }

    createHtmlElement (index, guardados) {
        const container = document.createElement("div");
        container.classList.add("container");

        if (guardados) {
            container.innerHTML = `
            <h2>${this.name}</h2>
            <p>Lenguaje: ${this.language}</p>
            <p>Generos: ${this.genres}</p>
            <button class="button-38" id="quitar" data-index="${index}">Quitar</button>
            <img id="screenImage" data-index="${index}" src="${this.image.medium}" alt="" max-size="10px">
        `;
        } else {
            container.innerHTML = `
            <h2>${this.name}</h2>
            <p>Lenguaje: ${this.language}</p>
            <p>Generos: ${this.genres}</p>
            <button class="button-38" id="guardar" data-index="${index}">Guardar</button>
            <img id="screenImage" data-index="${index}" src="${this.image.medium}" alt="" max-size="10px">
            `;
        }

        return container;
    }

    static guardarSerie (s) {
        let arrayLocal = localStorage.getItem('arrayLocal');
        let flag = false;

        arrayLocal = JSON.parse(arrayLocal);
        
        if (arrayLocal === null) {
            arrayLocal = [];
        }

        arrayLocal.forEach(serie => {
            if (s.id === serie.id) {
                flag = true;
            }
        });

        if (!flag) {
            arrayLocal.push(s);
        }

        localStorage.setItem('arrayLocal', JSON.stringify(arrayLocal));
    }

    static quitarSerie (index) {
        let arrayLocal = localStorage.getItem('arrayLocal');

        arrayLocal = JSON.parse(arrayLocal);

        arrayLocal.splice(index, 1);

        localStorage.setItem('arrayLocal', JSON.stringify(arrayLocal));
    }
}