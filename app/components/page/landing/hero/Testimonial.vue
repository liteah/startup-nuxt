<template>
  <div class="flex items-center -space-x-1">
    <template v-for="n in 5" :key="n">
      <UAvatar class="bg-background ring-2 ring-ring/30 transition hover:ring-ring dark:ring-ring/20 dark:hover:ring-ring">
        <UAvatarFallback>
          {{ n }}
        </UAvatarFallback>
      </UAvatar>
    </template>
  </div>

  <div class="flex flex-col gap-1">
    <div>
      <template v-for="s in 5" :key="s">
        <Icon
          name="mingcute:star-fill"
          class="h-5 w-5 fill-yellow-400 text-yellow-400"
        />
      </template>
    </div>
    <p class="text-sm text-muted-foreground">
      from 1,000+ customers
    </p>
  </div>
</template>

<style>

</style>
