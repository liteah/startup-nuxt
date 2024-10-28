<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <header className="flex items-center justify-between p-4 sm:p-6">
    <NuxtLink :to="localePath('/')">
      <UButton variant="outline" class="h-10">
        <Icon name="mingcute:left-fill" class="size-4 md:mr-2" />
        <span class="hidden md:inline">{{ t('common.home') }}</span>
      </UButton>
    </NuxtLink>
    <div class="flex items-center space-x-2">
      <LayoutCommonToggleLanguage />
      <LayoutCommonToggleTheme />
    </div>
  </header>
</template>
