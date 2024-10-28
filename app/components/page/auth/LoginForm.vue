<template>
  <UCard class-name="w-[350px] sm:w-[400px] md:w-[450px]">
    <UCardHeader>
      <LayoutCommonLogo />
      <UCardTitle class="text-left text-2xl font-semibold">
        {{ $t('pages.auth.login.title') }}
      </UCardTitle>
      <UCardDescription>
        {{ $t('pages.auth.login.description') }}
      </UCardDescription>
    </UCardHeader>
    <UCardContent>
      <USeparator class="my-4" label="OR" />
      <div class="flex flex-col gap-2.5 w-full">
        <NuxtLink to="/auth/google" target="_blank">
          <UButton
            block
            variant="outline"
            class="flex items-center gap-2 w-full"
          >
            <Icon name="mingcute:google-line" class="size-5" />
            {{ $t('pages.auth.login.google') }}
          </UButton>
        </NuxtLink>
        <NuxtLink to="/auth/github" target="_blank">
          <UButton
            block
            variant="outline"
            class="flex items-center gap-2 w-full"
          >
            <Icon name="mingcute:github-line" class="size-5" />
            {{ $t('pages.auth.login.github') }}
          </UButton>
        </NuxtLink>
      </div>
    </UCardContent>
  </UCard>
</template>
