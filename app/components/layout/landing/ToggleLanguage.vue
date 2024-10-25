<template>
  <UDropdownMenu>
    <UDropdownMenuTrigger>
      <UButton variant="outline" size="icon">
        <Icon name="mingcute:translate-2-line" class="size-[1.5rem]" />
      </UButton>
    </UDropdownMenuTrigger>
    <UDropdownMenuContent>
      <NuxtLink v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)">
        <UDropdownMenuItem class="flex items-center justify-between">
          {{ locale.name }}
          <Icon v-if="locale.code === currentLocale" name="mingcute:check-fill" />
        </UDropdownMenuItem>
      </NuxtLink>
    </UDropdownMenuContent>
  </UDropdownMenu>
</template>

<script lang="ts" setup>
const { locale: currentLocale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
