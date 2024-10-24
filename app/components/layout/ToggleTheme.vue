<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const colorMode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Icon name="mingcute:sun-fill" class="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="mingcute:moon-fill" class="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'" class="flex gap-2">
        <Icon name="mingcute:sun-fill" class="size-[1.2rem]" />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'" class="flex gap-2">
        <Icon name="mingcute:moon-fill" class="size-[1.2rem]" />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'" class="flex gap-2">
        <Icon name="mingcute:cellphone-fill" class="size-[1.2rem] block md:hidden" />
        <Icon name="ri:tablet-fill" class="size-[1.2rem] md:block hidden lg:hidden" />
        <Icon name="mingcute:computer-fill" class="size-[1.2rem] lg:block hidden" />
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>