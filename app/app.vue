<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: `%s | ${appConfig.name}`,
})
</script>
