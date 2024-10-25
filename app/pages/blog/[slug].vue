<template>
  <main class="max-w-4xl mx-auto px-4 py-8" v-if="post">
    <article>
      <img v-if="post.cover" :src="post.cover" :alt="post.title" class="w-full h-64 object-cover rounded-lg mb-6">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-muted-foreground">
          <div class="flex items-center gap-1">
            <Icon name="mingcute:calendar-line" class="size-4" />
            <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString() }}</time>
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

      <div class="prose prose-lg max-w-none">
        <ContentDoc />
      </div>
    </article>
  </main>
</template>

<script lang="ts" setup>
const { path } = useRoute()

definePageMeta({
  layout: 'landing'
})

const { data: post } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
if (!post.value)
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })

useHead({
  title: `${post.value.title}`,
  meta: [
    { name: 'description', content: post.value.description },
    { name: 'author', content: post.value.author },
    // Open Graph
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description },
    { property: 'og:image', content: post.value.cover },
    { property: 'og:type', content: 'article' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.title },
    { name: 'twitter:description', content: post.value.description },
    { name: 'twitter:image', content: post.value.cover },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        image: post.value.cover,
        datePublished: post.value.date,
        author: {
          '@type': 'Person',
          name: post.value.author
        }
      })
    }
  ]
})
</script>

<style>

</style>
