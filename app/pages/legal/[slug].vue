<script lang="ts" setup>
const { locale } = useI18n()
const route = useRoute()

const baseSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.replace(/\.(en|zh)$/, '')
})

const { data: doc } = await useAsyncData(`content-${route.path}`, async () => {
  const docs = await queryContent('legal')
    .where({
      _file: { $regex: new RegExp(`${baseSlug.value}(\\.${locale.value})?\\.md$`) },
    })
    .find()

  const localizedDoc = docs.find(d => d._file?.includes(`.${locale.value}.`))
  return localizedDoc || docs[0]
})

definePageMeta({
  layout: 'landing',
})

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Document not found', fatal: true })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useHead({
  title: `${doc.value.title} | Legal`,
  meta: [
    { name: 'description', content: doc.value.description },
    { property: 'og:title', content: doc.value.title },
    { property: 'og:description', content: doc.value.description },
    { property: 'og:type', content: 'article' },
  ],
})
</script>

<template>
  <div v-if="doc" class="max-w-4xl mx-auto px-4 py-8">
    <article>
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">
          {{ doc.title }}
        </h1>
        <div class="flex items-center gap-4 text-muted-foreground">
          <div class="flex items-center gap-1">
            <Icon name="mingcute:calendar-line" class="size-4" />
            <time :datetime="doc.lastUpdated">
              {{ formatDate(doc.lastUpdated) }}
            </time>
          </div>
        </div>
      </header>

      <div class="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold">
        <ContentRenderer :value="doc" />
      </div>
    </article>
  </div>
</template>

<style>
.prose h1 a,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  @apply no-underline text-foreground hover:no-underline;
}
</style>
