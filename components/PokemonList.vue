<template>
  <div class="container">

<ul class="flex flex-wrap gap-4" >
  <li class="  list-item  rounded-md  " v-for="p in pokemon">
<p class="text-center font-bold">  {{ p.name }}</p>
<div class="">
  <img :src="p.image" alt="pokemon Image" width="100">
</div>
</li>
</ul>

  </div>
</template>


<script>
import { pokemonService } from "~~/composables/Services/PokemonService.js";

export default {
  setup(){
  const {data:res} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
 let pokemon = []
if(res.value){
   pokemon= res.value.results.map((result, index) => {
      const paddingIndex = ("00" + (index + 1)).slice(-3);
      const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;
      return {
        ...result,
        image,
      };
    });
}
  //  const paddingIndex = ("00" + (index + 1)).slice(-3);
  //    const image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddingIndex}.png`;

    return {
      pokemon,

    }
  }
}
</script>


<style lang="scss" scoped>

</style>
