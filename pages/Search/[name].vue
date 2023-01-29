<template>
  <div class="container text-center my-4">

<ul class="flex flex-wrap justify-center gap-4">
  <li class="list-item hover:shadow-xl shadow-slate-300 transition-all shadow-md " v-for="p in pokemonCards?.data">

<nuxt-link  :to="`/CardDetails/${p.id}`">
  <img :src="p?.images?.large" alt="card image" width="200">
</nuxt-link>
  </li>
</ul>
  </div>
</template>


<script>
export default {
  setup(){
const route = useRoute()
 const {data:pokemonCards} = useFetch("https://api.pokemontcg.io/v2/cards",{
  headers:{
    X_Api_Key: "6476f2dd-cd72-4480-b053-ab724a28980a"
  },
params:{
  q:`name:${route.params.name}`
}
 });

    return {
      route,
      pokemonCards
    }
  }
}
</script>


<style lang="scss" scoped>
.list-item:hover img{
  transform: scale(1.5);
  transition: all 0.5 ease;
}
</style>
