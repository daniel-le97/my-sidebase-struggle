<template>
  <div class="container">

<ul class="flex flex-wrap gap-4 justify-center" v-if="pokemon" >
  <li class="  list-item  rounded-md  " v-for="p in pokemon" :key="p.name" v-if="pokemon">
      <nuxt-link :to="`/Search/${p.name}`">
<p class="text-center font-bold">  {{ p.name }}</p>
</nuxt-link>
<div class="">
  <img :src="p.image" alt="pokemon Image" width="100">
</div>
</li>
</ul>

  </div>
</template>


<script>
;

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
