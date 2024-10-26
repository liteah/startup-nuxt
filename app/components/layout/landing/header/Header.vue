<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const { t } = useI18n()
const localePath = useLocalePath()

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

<template>
  <header class="bg-background/75 backdrop-blur border-b border-muted -mb-px sticky top-0 z-50">
    <div class="container flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <LayoutCommonLogo />
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu>
          <UNavigationMenuList>
            <UNavigationMenuItem v-for="link in links" :key="link.to">
              <UNavigationMenuLink :class="navigationMenuTriggerStyle()">
                <NuxtLink :to="localePath(link.to)">
                  {{ link.label }}
                </NuxtLink>
              </UNavigationMenuLink>
            </UNavigationMenuItem>
          </UNavigationMenuList>
        </UNavigationMenu>
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <LayoutCommonToggleTheme v-if="config.theme" />
        <LayoutCommonToggleLanguage v-if="config.language" />
        <LayoutLandingHeaderAuth v-if="config.auth" />
      </div>
    </div>
  </header>
</template>
