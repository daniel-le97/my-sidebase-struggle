 class PokemonService{


  async getPokemon(){
     const {data:pokemon} = useFetch("https://pokeapi.co/api/v2/pokemon");
     console.log(pokemon?.value?.results);
  }
 }
 export const pokemonService = new PokemonService()
