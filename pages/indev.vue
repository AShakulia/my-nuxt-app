<script lang="ts" setup>
  const router = useRouter()
  const goBack = () => router.back()
</script>

<template>
  <div>
    <h1>indev</h1>
    <ButtonVue
     label="Назад"
     color="danger" 
     @click="goBack"/>

  </div>
</template>

<style lang="scss" scoped></style>