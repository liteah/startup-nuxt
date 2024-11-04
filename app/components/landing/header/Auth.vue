<script lang="ts" setup>
defineProps<{
  showDropdown?: boolean
}>()
const { t } = useI18n()
const localePath = useLocalePath()
const { loggedIn, user, clear } = useUserSession()
</script>

<template>
  <template v-if="loggedIn">
    <UDropdownMenu v-if="user && showDropdown">
      <UDropdownMenuTrigger>
        <UAvatar>
          <UAvatarImage :src="user.avatar" />
          <UAvatarFallback>{{ user.name.slice(0, 2) || user.email.slice(0, 2) }}</UAvatarFallback>
        </UAvatar>
      </UDropdownMenuTrigger>
      <UDropdownMenuContent>
        <CommonDropdownPreference />
        <UDropdownMenuItem class="flex items-center gap-2" @select="clear">
          <Icon name="mingcute:exit-line" class="size-5" />
          {{ t('auth.signout') }}
        </UDropdownMenuItem>
      </UDropdownMenuContent>
    </UDropdownMenu>
    <NuxtLink v-else :to="localePath('/dashboard')">
      <UButton>
        {{ t('auth.dashboard') }}
      </UButton>
    </NuxtLink>
  </template>
  <template v-else>
    <NuxtLink :to="localePath('/login')">
      <UButton>
        {{ t('auth.no_login') }}
      </UButton>
    </NuxtLink>
  </template>
</template>
