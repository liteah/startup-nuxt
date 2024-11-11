<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const { t } = useI18n()

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
  <UDialogContent>
    <UDialogHeader>
      <UDialogTitle>{{ t('workspace.create') }}</UDialogTitle>
      <UDialogDescription>{{ t('workspace.description') }}</UDialogDescription>
    </UDialogHeader>
    <!-- <UForm v-slot="{ submitForm }" :validation-schema="formSchema" @submit.prevent="onSubmit"> -->
      <form class="space-y-4" @submit="submitForm">
        <UFormField v-slot="{ componentField }" name="name">
          <UFormItem>
            <UFormLabel>{{ t('workspace.name') }}</UFormLabel>
            <UFormControl>
              <UInput placeholder="Lark Acme Ltd." v-bind="componentField" />
            </UFormControl>
            <UFormMessage />
          </UFormItem>
        </UFormField>
        <UFormField v-slot="{ componentField }" name="avatar">
          <UFormItem>
            <UFormLabel>
              {{ t('workspace.avatar') }}
              <span class="text-muted-foreground">
                {{ t('common.optional_tip') }}
              </span>
            </UFormLabel>
            <UFormControl>
              <UInput placeholder="https://example.com/avatar.png" v-bind="componentField" />
            </UFormControl>
            <UFormMessage />
          </UFormItem>
        </UFormField>
        <UDialogFooter>
          <UButton type="submit">
            {{ t('common.confirm') }}
          </UButton>
        </UDialogFooter>
      </form>
    <!-- </UForm> -->
  </UDialogContent>
</template>
