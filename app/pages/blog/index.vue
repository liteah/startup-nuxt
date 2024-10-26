<template>
  <main class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">
        {{ t('pages.landing.metadata.title.blog') }}
      </h1>
      <h2 class="text-xl text-muted-foreground mb-4">
        {{ t('pages.landing.metadata.description.blog') }}
      </h2>

      <div class="relative">
        <Icon name="mingcute:search-line" class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
        <UInput
          v-model="searchQuery"
          type="search"
          placeholder="Search Posts..."
          class="pl-7"
        />
      </div>
    </div>

    <div class="space-y-6">
      <article
        v-for="post in filteredPosts"
        :key="post._path"
        class="flex gap-6 p-4 border border-muted-foreground/20 rounded-lg"
      >
        <div class="shrink-0" v-if="post.cover">
          <img :src="post.cover" :alt="post.title" class="w-48 h-32 object-cover rounded-lg shadow-sm">
        </div>

        <div class="flex-1 min-w-0">
          <NuxtLink :to="localePath(`/blog/${post._file.split('/').pop().split('.')[0]}`)" class="block group">
            <h3 class="text-xl font-semibold mb-2 line-clamp-1">
              {{ post.title }}
            </h3>
            <p class="text-muted-foreground text-sm mb-3 line-clamp-2">{{ post.description }}</p>

            <div class="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <time :datetime="post.date" class="flex items-center gap-1">
                <Icon name="mingcute:calendar-line" class="size-4" />
                {{ new Date(post.date).toLocaleDateString() }}
              </time>
              <span class="flex items-center gap-1">
                <Icon name="mingcute:user-3-line" class="size-4" />
                {{ post.author }}
              </span>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tag in post.tags" :key="tag" variant="outline">
                {{ tag }}
              </UBadge>
            </div>
          </NuxtLink>
        </div>
      </article>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { locale, t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
  layout: 'landing',
})

const searchQuery = ref('')

const { data: posts } = await useAsyncData('posts', async () => {
  const allPosts = await queryContent('blog').find()

  const filteredPosts = allPosts.reduce((acc: any[], post: any) => {
    const fileName = post._file.split('/').pop()
    const baseSlug = fileName.replace(/\.(en|zh)\.md$/, '')

    const existingPost = acc.find(p => {
      const existingFile = p._file.split('/').pop()
      return existingFile.startsWith(baseSlug)
    })

    if (existingPost) {
      if (fileName.includes(`.${locale.value}.`)) {
        const index = acc.indexOf(existingPost)
        acc[index] = post
      }
    } else {
      acc.push(post)
    }

    return acc
  }, [])

  return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

useHead({
  title: t('pages.landing.metadata.title.blog'),
  meta: [
    { name: 'description', content: t('pages.landing.metadata.description') },
    { name: 'og:title', content: t('pages.landing.metadata.title.blog') },
    { name: 'og:description', content: t('pages.landing.metadata.description') },
  ]
})

const filteredPosts = computed(() => {
  if (!searchQuery.value || !posts.value) return posts.value

  const query = searchQuery.value.toLowerCase()
  return posts.value.filter(post =>
    post.title?.toLowerCase().includes(query) ||
    post.description?.toLowerCase().includes(query) ||
    post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
  )
})

</script>

