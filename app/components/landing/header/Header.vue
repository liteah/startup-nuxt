<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const { t, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const { loggedIn } = useUserSession()
const { header: config } = useAppConfig()

const links = computed(() => [
  {
    label: t('header.links.pricing'),
    to: '/pricing',
  },
  {
    label: t('header.links.blog'),
    to: '/blog',
  },
])
</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b border-muted -mb-px sticky top-0 z-50">
    <div class="container flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <CommonLogo />
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
        <div v-if="!loggedIn || !config.dropdown" class="hidden lg:flex gap-1.5">
          <CommonToggleTheme v-if="config.theme" />
          <CommonToggleLanguage v-if="config.language" />
        </div>
        <LandingHeaderAuth v-if="config.auth" :show-dropdown="config.dropdown" />
        <div class="lg:hidden">
          <USheet>
            <USheetTrigger as-child>
              <UButton variant="outline" size="icon">
                <Icon name="mingcute:menu-fill" class="h-5 w-5" />
              </UButton>
              <USheetContent class="p-0">
                <div class="container flex flex-col gap-5 mx-auto mt-10">
                  <ul class="flex flex-col gap-5">
                    <li v-for="link in links" :key="link.to">
                      <NuxtLink class="py-2" :to="localePath(link.to)">
                        {{ link.label }}
                      </NuxtLink>
                    </li>
                    <li v-for="locale in locales" :key="locale.code" @click="setLocale(locale.code)">
                      {{ locale.name }}
                    </li>
                  </ul>
                </div>
              </USheetContent>
            </USheetTrigger>
          </USheet>
        </div>
      </div>
    </div>
  </header>
</template>
