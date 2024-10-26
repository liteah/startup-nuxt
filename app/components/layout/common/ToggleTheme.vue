<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
</script>

<template>
  <UDropdownMenu>
    <UDropdownMenuTrigger as-child>
      <UButton variant="outline" size="icon">
        <Icon name="ri:sun-fill" class="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="ri:moon-fill" class="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </UButton>
    </UDropdownMenuTrigger>
    <UDropdownMenuContent>
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
    </UDropdownMenuContent>
  </UDropdownMenu>
</template>
