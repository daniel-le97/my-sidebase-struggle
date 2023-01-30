<script setup lang="ts">
const { data: examples } = useFetch('/api/examples')
</script>

<template>
  <div>
    <p>Prisma ORM Data from the database, received {{ examples|| 0 }} records: <pre>{{ examples }}</pre></p>
  </div>
</template>
