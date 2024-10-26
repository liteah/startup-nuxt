<script lang="ts" setup>
const { name } = useAppConfig()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutAuthHeader />
    <main class="flex flex-grow items-center justify-center p-4">
      <slot />
    </main>
    <footer className="p-4 text-center text-xs text-muted-foreground">
      <div class="mb-2">
        © {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
      </div>
    </footer>
  </div>
</template>
