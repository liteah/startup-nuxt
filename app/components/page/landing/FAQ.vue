<script lang="ts" setup>
const items = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
  {
    value: 'item-4',
    title: 'Is there a free trial available?',
    content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
]
</script>

<template>
  <div class="container mx-auto pb-16">
    <div class="container mx-auto py-16 text-center lg:py-24">
      <h2 class="mb-4 mt-2 text-4xl font-bold lg:mb-6 lg:mt-3 lg:text-5xl">
        Frequently asked questions
      </h2>

      <p class="mx-auto max-w-[800px] text-lg text-muted-foreground lg:text-xl">
        Everything you need to know about the product and billing.
      </p>
    </div>
    <section class="mx-auto max-w-[768px]">
      <UAccordion :default-value="['item-4']" type="multiple">
        <template v-for="item in items" :key="item.value">
          <UAccordionItem :value="item.value">
            <UAccordionHeader>
              <UAccordionTrigger class="text-lg">
                {{ item.title }}
              </UAccordionTrigger>
            </UAccordionHeader>
            <UAccordionContent>
              <p class="text-base text-muted-foreground">
                {{ item.content }}
              </p>
            </UAccordionContent>
          </UAccordionItem>
        </template>
      </UAccordion>
    </section>
  </div>
</template>
