<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: `%s | ${appConfig.name}`,
})
</script>
