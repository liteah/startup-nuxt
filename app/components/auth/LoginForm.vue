<script lang="ts" setup>
function handleOAuthLogin(provider: string) {
  window.location.href = `/auth/${provider}`
}
</script>

<template>
  <UCard class-name="w-[350px] sm:w-[400px] md:w-[450px]">
    <UCardHeader>
      <CommonLogo />
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
        <UButton
          block
          variant="outline"
          class="flex items-center gap-2 w-full"
          @click="handleOAuthLogin('google')"
        >
          <Icon name="mingcute:google-line" class="size-5" />
          {{ $t('pages.auth.login.google') }}
        </UButton>
        <UButton
          block
          variant="outline"
          class="flex items-center gap-2 w-full"
          @click="handleOAuthLogin('github')"
        >
          <Icon name="mingcute:github-line" class="size-5" />
          {{ $t('pages.auth.login.github') }}
        </UButton>
      </div>
    </UCardContent>
  </UCard>
</template>
