<script setup lang="ts">
const { $trpcApi } = useNuxtApp()

const hello = await $trpcApi.hello.useQuery({ text: 'client' })
const res = await $trpcApi.hi.useQuery({ text: 'client' }).then((data) => {
  return data.data.value
})

// const hi = await $trpcApi.hi.useQuery({ text: 'client' })
</script>

<template>
  <div>
    <!-- As `superjson` is already pre-configured, we can use `time` as a `Date` object without further deserialization 🎉 -->
    <p>tRPC Data: "{{ res?.greeting }}".</p>
    <p>tRPC Data: "{{ hello.data.value?.greeting }}" send at "{{ hello.data.value?.time.toLocaleDateString() }}".</p>
  </div>
</template>
