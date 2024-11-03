<template>
  <div class="container mx-auto relative flex flex-col gap-y-5 py-10 md:flex-row md:justify-between lg:h-[720px] lg:gap-10">
    <div class="absolute bottom-5 hidden lg:right-[410px] lg:block xl:right-[550px]">
      <LandingHeroArrow />
    </div>
    <div class="flex h-full items-center justify-center text-center md:w-1/2 md:text-left">
      <div>
        <h1 class="mb-4 text-4xl font-bold md:text-5xl lg:mb-6 lg:mt-5 xl:text-6xl">
          Super simplified
          <br>
          customer service
        </h1>
        <p class="text-lg text-muted-foreground lg:text-xl">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more.
        </p>
        <div class="mt-10 flex flex-col items-center gap-5 md:flex-row">
          <PageLandingHeroTestimonial />
        </div>
      </div>
    </div>
    <div class="flex shrink-0 items-center justify-center md:w-1/2 lg:h-full">
      <div
        class="w-full rounded-md bg-muted/50 px-4 py-10 ring-1 ring-muted/30 dark:bg-muted/5 md:px-10 lg:w-[440px] lg:px-10"
      />
    </div>
  </div>
</template>
