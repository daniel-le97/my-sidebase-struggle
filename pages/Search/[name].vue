<template>
  <div v-if="pokemonCards" class="container text-center my-4">
    <ul class="flex  flex-wrap justify-center gap-4">
      <li v-for="p in pokemonCards?.data"  :key="p.id" class="">
        <nuxt-link :to="`/CardDetails/${p.id}`">
          <img :src="p?.images?.large" alt="card image" width="200" class="image">
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup () {
    const route = useRoute()
    const { data: pokemonCards } = useFetch('https://api.pokemontcg.io/v2/cards', {
      headers: {
        X_Api_Key: '6476f2dd-cd72-4480-b053-ab724a28980a'
      },
      params: {
        q: `name:${route.params.name}`
      }
    })

    return {
      route,
      pokemonCards
    }
  }
}
</script>

<style lang="scss" scoped>
.image{
    transition: all 0.5 ease ;
}
.image:hover{
  transform: scale(1.14);
  transition: transform 0.5 ease ;
}

</style>
