<script lang="ts" setup>
const { t } = useI18n()
const { name } = useAppConfig()
const localePath = useLocalePath()

const links = computed(() => [
  {
    label: t('layout.landing.footer.links.product.label'),
    links: [
      {
        label: t('layout.landing.footer.links.product.features'),
        to: '/features',
      },
    ],
  },
  {
    label: t('layout.landing.footer.links.resources.label'),
    links: [
      {
        label: t('layout.landing.footer.links.resources.docs'),
        to: '/docs',
      },
    ],
  },
  {
    label: t('layout.landing.footer.links.company.label'),
    links: [
      {
        label: t('layout.landing.footer.links.company.about'),
        to: '/about',
      },
      {
        label: t('layout.landing.footer.links.company.contact'),
        to: '/contact',
      },
    ],
  },
  {
    label: t('layout.landing.footer.links.legal.label'),
    links: [
      {
        label: t('layout.landing.footer.links.legal.terms'),
        to: '/legal/terms',
      },
      {
        label: t('layout.landing.footer.links.legal.privacy'),
        to: '/legal/privacy',
      },
    ],
  },
])
</script>

<template>
  <footer class="container mx-auto py-16 lg:py-24">
    <section class="grid grid-cols-2 gap-8 lg:grid-cols-6">
      <div class="col-span-full pb-10 lg:col-span-2">
        <CommonLogo class="flex justify-start items-start" />
        <p class="mt-5 text-muted-foreground">
          {{ t('layout.landing.footer.description') }}
        </p>
      </div>
      <template v-for="link in links" :key="link.label">
        <div>
          <p class="mb-4 text-sm text-muted-foreground">
            {{ link.label }}
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="item in link.links" :key="item.label">
              <NuxtLink class="font-semibold hover:text-primary" :to="localePath(item.to)">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </section>

    <section class="mt-12 flex flex-col justify-between gap-5 border-t pt-8 lg:mt-16 lg:flex-row">
      <p class="text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
      </p>
      <div class="flex items-center gap-2">
        <!-- <Icon name="mingcute:twitter-fill" class="h-7 w-7" /> -->
      </div>
    </section>
  </footer>
</template>
