<script setup lang=ts>
const { user, clear } = useUserSession()
const { t } = useI18n()

const teams = [{
  name: 'Acme Inc',
  logo: 'mingcute:user-1-fill',
  plan: 'Enterprise',
}, {
  name: 'Acme Corp.',
  logo: 'mingcute:user-2-fill',
  plan: 'Startup',
}, {
  name: 'Evil Corp.',
  logo: 'mingcute:user-3-fill',
  plan: 'Free',
}]
const activeTeam = ref(teams[0])

function setActiveTeam(team: typeof teams[number]) {
  activeTeam.value = team
}
</script>

<template>
  <USidebarProvider>
    <USidebar collapsible="icon">
      <USidebarHeader>
        <USidebarMenu>
          <USidebarMenuItem>
            <UDropdownMenu>
              <UDropdownMenuTrigger as-child>
                <USidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <!-- <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Icon :name="activeTeam.logo" class="size-4" />
                  </div> -->
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ activeTeam?.name }}</span>
                    <span class="truncate text-xs">{{ activeTeam?.plan }}</span>
                  </div>
                </USidebarMenuButton>
              </UDropdownMenuTrigger>
              <UDropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                :side-offset="4"
              >
                <UDropdownMenuItem
                  v-for="(team) in teams"
                  :key="team.name"
                  class="gap-2 p-2"
                  @click="setActiveTeam(team)"
                >
                  <div class="flex size-6 items-center justify-center rounded-sm border">
                    <Icon :name="team.logo" class="size-4 shrink-0" />
                  </div>
                  {{ team.name }}
                </UDropdownMenuItem>
                <UDropdownMenuSeparator />
                <UDropdownMenuItem class="gap-2 p-2">
                  <div class="flex size-6 items-center justify-center rounded-md border bg-background">
                    <Icon name="mingcute:add-line" class="size-4" />
                  </div>
                  <div class="font-medium text-muted-foreground">
                    Add team
                  </div>
                </UDropdownMenuItem>
              </UDropdownMenuContent>
            </UDropdownMenu>
          </USidebarMenuItem>
        </USidebarMenu>
      </USidebarHeader>
      <USidebarContent />
      <USidebarFooter>
        <USidebarMenu v-if="user">
          <USidebarMenuItem>
            <UDropdownMenu>
              <UDropdownMenuTrigger as-child>
                <USidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <UAvatar class="h-8 w-8 rounded-lg">
                    <UAvatarImage :src="user.avatar" />
                    <UAvatarFallback>{{ user.name.slice(0, 2) || user.email.slice(0, 2) }}</UAvatarFallback>
                  </UAvatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ user.name || user.email.split('@')[0] }}</span>
                    <span class="truncate text-xs">{{ user.email }}</span>
                  </div>
                  <Icon name="mingcute:selector-vertical-line" class="ml-auto size-6" />
                </USidebarMenuButton>
              </UDropdownMenuTrigger>
              <UDropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" :side-offset="4">
                <UDropdownMenuGroup>
                  <UDropdownMenuItem class="flex items-center gap-2">
                    <Icon name="mingcute:user-3-line" class="size-5" />
                    {{ t('auth.user.account') }}
                  </UDropdownMenuItem>
                </UDropdownMenuGroup>
                <CommonDropdownPreference />
                <UDropdownMenuItem class="flex items-center gap-2" @select="clear">
                  <Icon name="mingcute:exit-line" class="size-5" />
                  {{ t('auth.signout') }}
                </UDropdownMenuItem>
              </UDropdownMenuContent>
            </UDropdownMenu>
          </USidebarMenuItem>
        </USidebarMenu>
      </USidebarFooter>
      <USidebarRail />
    </USidebar>
    <USidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <USidebarTrigger class="-ml-1" />
        </div>
      </header>
      <slot />
    </USidebarInset>
  </USidebarProvider>
</template>
