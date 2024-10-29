<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { slug } = useRuntimeConfig().public;
console.log(slug)
</script>
