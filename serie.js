export class Serie {
    id;
    url;
    name;
    lenguage;
    genres;
    image;
    constructor(id, url, name, lenguage, genres, image) {
        this.id = id;
        this.name = name;
        this.lenguage = lenguage;
        this.genres = genres;
        this.image = image;
    }

}