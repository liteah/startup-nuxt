<script lang="ts" setup>
const localePath = useLocalePath()
const { logo, name } = useAppConfig()
</script>

<template>
  <NuxtLink :to="localePath('/')" aria-label="Home" class="flex-shrink-0 font-bold text-xl flex justify-center items-center gap-1.5">
    <NuxtImg v-if="logo.image" :src="logo.src" />
    <Icon v-if="logo.icon" :name="logo.name" class="size-8" />
    <span v-if="logo.text" class="text-xl">{{ name }}</span>
  </NuxtLink>
</template>

<style>

</style>
