const URL = "https://pokeapi.co/api/v2";

// premiere fonction qui est appelee losrque le doc est chargé
// async va de paire avec await (obligatoire)
const main = async () => {
  console.log("test");

  // recuperation de la liste des 10 pokemons
  // getRequest est async, donc on doit ajouter await devant
  // si on utilise await dans main, alors main doit etre async
  const response = await getRequest("pokemon?limit=10");
  const results = response.data.results;
  console.log(results);

  // compilation de plusieurs promise afin de toutes les lancer
  // en une seule grace a Promise.all
  const pokemonsPromises = results.map((pokemon) => {
    const url = pokemon.url;
    const startIndex = url.indexOf("pokemon");
    // decoupage de l'url pour obtenir uniquement ce qui nous interesse
    const finalUrl = url.slice(startIndex);

    const promise = getRequest(`pokemon/${pokemon.name}`);

    return promise; // equivalent a un .push sur un nouveau tableau
  });

  // Promise.all permet de "fusionner" toutes les promises d'un tableau
  // le resultat de Promise.all etant lui meme une Promise
  // afin d'attendre le resultat on utilise await
  const resultOfAllPromises = await Promise.all(pokemonsPromises);

  for (let res of resultOfAllPromises) {
    const pokemonName = res.data.name;

    let pokemonType = "";

    res.data.types.forEach((t, index) => {
      const type = t.type.name;
      pokemonType += index === 0 ? type : `, ${type}`;
    });

    buildCard(pokemonName, pokemonType);
  }
};

const buildCard = (pokemonName, pokemonType) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const pName = document.createElement("p");
  pName.innerHTML = `Nom: ${pokemonName}`;

  const pType = document.createElement("p");
  pType.innerHTML = `Type(s): ${pokemonType}`;

  div.append(pName);
  div.append(pType);

  document.body.append(div);
};

const getRequest = async (route) => {
  let data = null;
  let error = null;

  try {
    // la fonction fetch return une Promise
    // on peut traiter une Promise de 2 maniere differentes
    // soit avec .then soit avec la paire await-async
    // ici on utilise await, donc la fonction getRequest doit etre async
    const fetchResponse = await fetch(`${URL}/${route}`);
    data = await fetchResponse.json();
  } catch (err) {
    console.log(err.message);
  } finally {
    const response = {
      data,
      error,
    };
    return response;
  }
};

window.addEventListener("load", () => main());
