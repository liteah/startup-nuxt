<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'landing',
})

useHead({
  title: t('pages.landing.metadata.title.home'),
  meta: [
    { name: 'description', content: t('pages.landing.metadata.description') },
  ],
})
</script>

<template>
  <div>
    <PageLandingHeroQuickUse />
    <PageLandingFAQ />
    <PageLandingCTA />
  </div>
</template>
