<template>
  <UDropdownMenu>
    <UDropdownMenuTrigger>
      <UButton variant="outline" size="icon">
        <Icon name="mingcute:translate-2-line" class="size-[1.5rem]" />
      </UButton>
    </UDropdownMenuTrigger>
    <UDropdownMenuContent>
      <UDropdownMenuGroup>
        <UDropdownMenuItem v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)" class="flex items-center justify-between">
          {{ locale.name }}
          <Icon v-if="locale.code === currentLocale" name="mingcute:check-fill" />
        </UDropdownMenuItem>
      </UDropdownMenuGroup>
    </UDropdownMenuContent>
  </UDropdownMenu>
</template>

<script lang="ts" setup>
const { locale: currentLocale, locales, setLocale } = useI18n()
</script>
