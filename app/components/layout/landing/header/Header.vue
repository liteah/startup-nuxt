<template>
  <header class="bg-background/75 backdrop-blur border-b border-muted -mb-px sticky top-0 z-50">
    <div class="container flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/" aria-label="Home" class="flex-shrink-0 font-bold text-xl flex justify-center items-center gap-1.5">
          <NuxtImg v-if="config.app.logo.image" :src="config.app.logo.src" />
          <Icon v-if="config.app.logo.icon" :name="config.app.logo.name" class="size-8" />
          <span v-if="config.app.logo.text" class="text-xl">{{ config.app.name }}</span>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu>
          <UNavigationMenuList>
            <UNavigationMenuItem v-for="link in config.landing.header.links" :key="link.to">
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
        <LayoutLandingToggleTheme v-if="config.landing.header.theme" />
        <LayoutLandingHeaderAuth v-if="config.landing.header.auth" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const config = useAppConfig()
</script>
