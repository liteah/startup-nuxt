<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()
const { loggedIn, user, clear } = useUserSession()
</script>

<template>
  <template v-if="loggedIn">
    <UDropdownMenu v-if="user">
      <UDropdownMenuTrigger>
        <UAvatar>
          <UAvatarImage :src="user.avatar" />
          <UAvatarFallback>{{ user.name.slice(0, 2) || user.email.slice(0, 2) }}</UAvatarFallback>
        </UAvatar>
      </UDropdownMenuTrigger>
      <UDropdownMenuContent>
        <UDropdownMenuLabel class="flex flex-col gap-2">
          <div class="flex items-center gap-2 font-regular">
            <Icon name="mingcute:currency-dollar-2-line" class="size-5" />
            {{ t('layout.landing.header.auth.credit') }}
            {{ user.credit }}
          </div>
        </UDropdownMenuLabel>
        <CommonDropdownPreference />
        <UDropdownMenuItem class="flex items-center gap-2" @select="clear">
          <Icon name="mingcute:exit-line" class="size-5" />
          {{ t('layout.landing.header.auth.signout') }}
        </UDropdownMenuItem>
      </UDropdownMenuContent>
    </UDropdownMenu>
  </template>
  <template v-else>
    <NuxtLink :to="localePath('/login')">
      <UButton>
        {{ t('layout.landing.header.auth.no_login') }}
      </UButton>
    </NuxtLink>
  </template>
</template>
