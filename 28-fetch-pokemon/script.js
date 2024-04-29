// Recuperer dans un premier temps la liste des 10 premiers pokemons. 
// Cette liste contient des objets avec l'url pour obtenir le detail de chacun des pokemons.
// Pour chaque url, faire un fetch afin d'obtenir le name et le/les types
// Finir par afficher 10 cards dans le html


const section = document.createElement('section');
const URL = 'https://pokeapi.co/api/v2/';

const main = async() => {
    // Fetch list of the first 10 pokemons
    const responsePokemons = await getRequest("pokemon?limit=10");
    const dataPokemons = responsePokemons.data;
    console.log(dataPokemons)

    let pokemonsList = '';
    dataPokemons.results.forEach(async value => {
        // Get route to fetch
        const startIndex = value.url.indexOf('pokemon');
        pokemonsList = value.url.slice(startIndex);

        // Fetch on each pokemon
        const responseEachPokemon = await getRequest(pokemonsList);
        const dataEachPokemon = responseEachPokemon.data;
        console.log(dataEachPokemon)

        // -- Get data for each card
        // Name
        const eachName = dataEachPokemon.species.name;
        // Type
        let eachTypes = '';
        dataEachPokemon.types.forEach((value, index) => {
            eachTypes += index === 0 ? capitalize(value.type.name) : ` - ${capitalize(value.type.name)}`;
        });
        // console.log(eachTypes)
        // Img
        const eachImg = dataEachPokemon.sprites.front_default;
        // Id
        const eachId = dataEachPokemon.id;
        // Weight
        const eachWeight = dataEachPokemon.weight;
        // Height
        const eachHeight = dataEachPokemon.height;

        // Create card for each of the 10 Pokemons;
        createCard(eachName, eachTypes, eachImg, eachId, eachWeight, eachHeight);
    });

    // Create section that will include all cards
    document.body.append(section);
    section.classList.add('card-wrapper');
}

const getRequest = async(route) => {
    let data = null;
    let error = null;

    try {
        const fetchResponse = await fetch(`${URL}${route}`);
        data = await fetchResponse.json();
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        const response = { error, data };
        return { error, data };
    }
}

const createCard = (name, type, imgUrl, id, weight, height) => {
    const article = document.createElement('article');
    article.innerHTML += `
        <div>
            <h2>${capitalize(name)}</h2>
            <h4>${type}</h4>
            <img src="${imgUrl}" alt="${name}">
            <ul>
                <li>ID : ${id}</li>
                <li>Poids : ${weight / 10} kg</li>
                <li>Taille : ${height * 10} cm</li>
            </ul>
        </div>
    `;

    // Add class .card on each article
    article.classList.add('card');
    // Add class depending on element type to change background color
    if (type.includes('Fire')) {
        article.classList.add('fire');
    }
    else if (type.includes('Grass')) {
        article.classList.add('grass');
    }
    else if (type.includes('Water')) {
        article.classList.add('water');
    }
    else if (type.includes('Bug')) {
        article.classList.add('bug');
    }

    section.append(article);
}

const capitalize = (name) => {
    // to store first letter of the string
    let firstLetterCapitalized = name.slice(0, 1).toUpperCase();
    // to store rest of the string
    let restOfString = name.slice(1);

    // Capitalize first letter and return it
    let nameCapitalized = `${firstLetterCapitalized}${restOfString}`;
    return nameCapitalized;
}

window.addEventListener('load', main);
// document.addEventListener('DOMContentLoaded', main);
