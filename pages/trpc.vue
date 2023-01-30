<script setup lang="ts">
const { $client } = useNuxtApp()
const hello = await $client.example.findMany.useQuery({})

</script>

<template>
  <div>
    <!-- As `superjson` is already pre-configured, we can use `time` as a `Date` object without further deserialization 🎉 -->

    <p>tRPC Data: "{{ hello.data.value }}" send at "{{ hello.data.value }}".</p>
  </div>
</template>
