<template>
  <header class="bg-background/75 backdrop-blur border-b border-muted -mb-px sticky top-0 z-50">
    <div class="container flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/" aria-label="Home" class="flex-shrink-0 font-bold text-xl flex justify-center items-center gap-1.5">
          <NuxtImg v-if="appConfig.logo.image" :src="appConfig.logo.src" />
          <Icon v-if="appConfig.logo.icon" :name="appConfig.logo.name" class="size-8" />
          <span v-if="appConfig.logo.text" class="text-xl">{{ appConfig.name }}</span>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu>
          <UNavigationMenuList>
            <UNavigationMenuItem v-for="link in links" :key="link.to">
              <UNavigationMenuLink :class="navigationMenuTriggerStyle()">
                <NuxtLink :to="link.to">
                  {{ link.label }}
                </NuxtLink>
              </UNavigationMenuLink>
            </UNavigationMenuItem>
          </UNavigationMenuList>
        </UNavigationMenu>
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <LayoutLandingToggleTheme v-if="config.theme" />
        <LayoutLandingToggleLanguage v-if="config.language" />
        <LayoutLandingHeaderAuth v-if="config.auth" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const { t } = useI18n()
const appConfig = useAppConfig()

const config = {
  theme: true,
  language: true,
  auth: true,
}

const links = computed(() => [
  {
    label: t('layout.landing.header.links.pricing'),
    to: '/pricing',
  },
  {
    label: t('layout.landing.header.links.blog'),
    to: '/blog',
  },
])
</script>
