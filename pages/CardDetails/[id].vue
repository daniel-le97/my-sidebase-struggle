<template>
  <div class="container text-center my-4 mt-10" v-if="pokemonCard">
<div class="flex  ">
  <div class="w-full md:w-1/3">
     <div class=" hover:shadow-xl shadow-slate-300 transition-all shadow-md" >

<img :src="pokemonCard?.data?.images?.large" alt="card image" class="pokemon-image" >
     </div>
  </div>
  <div class="w-full md:w-1/2">
 {{ pokemonCard.data.name }}
  </div>
</div>
<ul class="flex flex-wrap justify-center gap-4">

</ul>
  </div>
</template>


<script>
export default {
  setup(){
const route = useRoute()
 const {data:pokemonCard} = useFetch(`https://api.pokemontcg.io/v2/cards/${route.params.id}`,{
  headers:{
    X_Api_Key: "6476f2dd-cd72-4480-b053-ab724a28980a"
  },

 });

    return {
      route,
      pokemonCard
    }
  }
}
</script>


<style lang="scss" scoped>
.pokemon-image{
  width: 100% ;
  object-fit: cover;
}
</style>
