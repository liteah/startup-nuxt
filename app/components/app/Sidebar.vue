<script setup lang="ts">
import type { Workspace } from '#auth-utils'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const { user, clear } = useUserSession()
const { t } = useI18n()

const workspaces = computed(() => user.value?.workspace ? [user.value.workspace] : [])
const activeWorkspace = ref(workspaces.value[0])

function setActiveWorkspace(workspace: Workspace) {
  activeWorkspace.value = workspace
}

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1).max(30),
  avatar: z.string().url().optional(),
}))

async function onSubmit(values: any) {
  try {
    const { data, error } = await useFetch('/api/workspace/create', {
      method: 'POST',
      body: {
        name: values.name,
        avatar: values.avatar || null,
      },
    })
    if (error.value)
      throw error.value
    if (data.value)
      toast.success(t('workspace.created_success'))
  }
  catch (error: any) {
    toast.error(error)
  }
}
</script>

<template>
  <USidebarProvider>
    <USidebar collapsible="icon">
      <USidebarHeader>
        <USidebarMenu>
          <USidebarMenuItem>
            <UForm v-slot="{ submitForm }" :validation-schema="formSchema" @submit.prevent="onSubmit">
              <UDialog>
                <UDropdownMenu>
                  <UDropdownMenuTrigger as-child>
                    <USidebarMenuButton
                      size="lg"
                      class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div class="flex aspect-square size-8 items-center justify-center rounded-lg border bg-sidebar-primary text-sidebar-primary-foreground">
                        <UAvatar v-if="activeWorkspace?.avatar" class="size-8">
                          <UAvatarImage :src="activeWorkspace.avatar" />
                          <UAvatarFallback>{{ activeWorkspace.name.slice(0, 2) }}</UAvatarFallback>
                        </UAvatar>
                        <Icon v-else name="mingcute:building-1-line" class="size-4" />
                      </div>
                      <div class="grid flex-1 text-left text-sm leading-tight">
                        <span class="truncate font-semibold">{{ activeWorkspace?.name }}</span>
                        <span class="truncate text-xs capitalize">{{ activeWorkspace?.plan?.toLowerCase() }}</span>
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
                      v-for="workspace in workspaces"
                      :key="workspace.id"
                      class="gap-2 p-2"
                      @click="setActiveWorkspace(workspace)"
                    >
                      <div class="flex size-6 items-center justify-center rounded-sm border">
                        <UAvatar v-if="workspace.avatar" class="size-6">
                          <UAvatarImage :src="workspace.avatar" />
                          <UAvatarFallback>{{ workspace.name.slice(0, 2) }}</UAvatarFallback>
                        </UAvatar>
                        <Icon v-else name="mingcute:building-1-line" class="size-4 shrink-0" />
                      </div>
                      {{ workspace.name }}
                    </UDropdownMenuItem>
                    <UDropdownMenuSeparator />
                    <UDialogTrigger as-child>
                      <UDropdownMenuItem class="gap-2 p-2">
                        <div class="flex size-6 items-center justify-center rounded-md border bg-background">
                          <Icon name="mingcute:add-line" class="size-4" />
                        </div>
                        <div class="font-medium text-muted-foreground">
                          {{ t('workspace.create') }}
                        </div>
                      </UDropdownMenuItem>
                    </UDialogTrigger>
                  </UDropdownMenuContent>
                </UDropdownMenu>
                <AppModalWorkspaceCreate />
              </UDialog>
            </UForm>
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
                    <UAvatarFallback>{{ user.name?.slice(0, 2) || user.email.slice(0, 2) }}</UAvatarFallback>
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
