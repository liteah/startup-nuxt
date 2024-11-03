<script lang="ts" setup>
const { name } = useAppConfig()
</script>

<template>
  <div class="container mx-auto py flex flex-col items-center py-16 lg:flex-row lg:py-24">
    <div class="grow text-center lg:text-left">
      <h3 class="mb-4 text-3xl font-semibold lg:mb-5 lg:text-4xl">
        Start your free trial
      </h3>
      <p class="text-lg text-muted-foreground lg:text-xl">
        Join over 4,000+ startups already growing with {{ name }}.
      </p>
    </div>
    <div
      class="mt-8 flex w-full shrink-0 flex-col-reverse justify-center gap-3 md:w-auto md:flex-row lg:mt-0"
    >
      <UButton size="lg" class="w-full md:w-auto" variant="outline">
        Learn more
      </UButton>
      <UButton size="lg" class="w-full whitespace-nowrap md:w-auto">
        Get started
      </UButton>
    </div>
  </div>
</template>
