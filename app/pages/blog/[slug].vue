<script lang="ts" setup>
const { locale } = useI18n()
const route = useRoute()

const baseSlug = computed(() => {
  const slug = route.params.slug as string
  return slug.replace(/\.(en|zh)$/, '')
})

const { data: post } = await useAsyncData(`content-${route.path}`, async () => {
  const posts = await queryContent('blog')
    .where({
      _file: { $regex: new RegExp(`${baseSlug.value}(\\.${locale.value})?\\.md$`) },
    })
    .find()

  const localizedPost = posts.find(p => p._file?.includes(`.${locale.value}.`))
  return localizedPost || posts[0]
})

definePageMeta({
  layout: 'landing',
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description },
    { name: 'author', content: post.value.author },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:image', content: post.value.cover },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.title },
    { name: 'twitter:description', content: post.value.description },
    { name: 'twitter:image', content: post.value.cover },
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': post.value.title,
      'image': post.value.cover,
      'datePublished': post.value.date,
      'author': {
        '@type': 'Person',
        'name': post.value.author,
      },
    }),
  }],
})
</script>

<template>
  <main v-if="post" class="max-w-4xl mx-auto px-4 py-8">
    <article>
      <img v-if="post.cover" :src="post.cover" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-6">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">
          {{ post.title }}
        </h1>
        <div class="flex items-center gap-4 text-muted-foreground">
          <div class="flex items-center gap-1">
            <Icon name="mingcute:calendar-line" class="size-4" />
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="mingcute:user-3-line" class="size-4" />
            <span>{{ post.author }}</span>
          </div>
        </div>
        <div class="flex gap-2 mt-4">
          <UBadge v-for="tag in post.tags" :key="tag" variant="outline">
            {{ tag }}
          </UBadge>
        </div>
      </header>

      <div class="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600">
        <ContentRenderer :value="post" />
      </div>
    </article>
  </main>
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
