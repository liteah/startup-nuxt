<script lang="ts" setup>
const { t, locale: currentLocale, locales, setLocale } = useI18n()
const colorMode = useColorMode()
</script>

<template>
  <UDropdownMenuSeparator />
  <UDropdownMenuGroup>
    <UDropdownMenuSub>
      <UDropdownMenuSubTrigger class="flex items-center gap-2">
        <Icon name="mingcute:moon-line" class="hidden dark:block size-5" />
        <Icon name="mingcute:sun-line" class="block dark:hidden size-5" />
        {{ t('common.theme.title') }}
      </UDropdownMenuSubTrigger>
      <UDropdownMenuSubContent>
        <UDropdownMenuItem class="flex gap-2" @click="colorMode.preference = 'light'">
          <Icon name="mingcute:sun-line" class="size-[1.2rem]" />
          {{ t('common.theme.light') }}
        </UDropdownMenuItem>
        <UDropdownMenuItem class="flex gap-2" @click="colorMode.preference = 'dark'">
          <Icon name="mingcute:moon-line" class="size-[1.2rem]" />
          {{ t('common.theme.dark') }}
        </UDropdownMenuItem>
        <UDropdownMenuItem class="flex gap-2" @click="colorMode.preference = 'system'">
          <Icon name="mingcute:cellphone-line" class="size-[1.2rem] block md:hidden" />
          <Icon name="ri:tablet-line" class="size-[1.2rem] md:block hidden lg:hidden" />
          <Icon name="mingcute:computer-line" class="size-[1.2rem] lg:block hidden" />
          {{ t('common.theme.system') }}
        </UDropdownMenuItem>
      </UDropdownMenuSubContent>
    </UDropdownMenuSub>
    <UDropdownMenuSub>
      <UDropdownMenuSubTrigger class="flex items-center gap-2">
        <Icon name="mingcute:translate-2-line" class="size-5" />
        {{ t('common.language') }}
      </UDropdownMenuSubTrigger>
      <UDropdownMenuSubContent>
        <UDropdownMenuItem v-for="locale in locales" :key="locale.code" class="flex items-center justify-between" @click="setLocale(locale.code)">
          {{ locale.name }}
          <Icon v-if="locale.code === currentLocale" name="mingcute:check-fill" />
        </UDropdownMenuItem>
      </UDropdownMenuSubContent>
    </UDropdownMenuSub>
  </UDropdownMenuGroup>
  <UDropdownMenuSeparator />
</template>
