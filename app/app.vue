<script lang="ts" setup>
const appConfig = useAppConfig()

useHead({
  titleTemplate: `%s | ${appConfig.name}`,
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UToaster rich-colors colse-button />
</template>
