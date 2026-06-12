<script setup lang="ts">
import { useAccountSettings } from "~/domain/user/composables/settings/useAccountSettings"

const { orientation = "horizontal" } = defineProps<{
  orientation?: "vertical" | "horizontal"
}>()

const items = useAccountSettings()
console.log("🥸 - items:", items)
</script>

<template>
  <FormWrapper save>
    <!-- username -->
    <SidebarFormField v-bind="toValue(items.fields).username">
      <SidebarInput v-bind="toValue(items.fields).username" />
    </SidebarFormField>
    <!-- email -->

    <SidebarFormField v-bind="toValue(items.fields).email">
      <SidebarInput v-bind="toValue(items.fields).email" />
    </SidebarFormField>
    <!-- connected accounts -->

    <SidebarFormField v-bind="items.fields.value.accounts">
      <div class="grid w-full">
        <ProviderCard
          v-for="(provider, i) in items.providers"
          :key="i"
          v-bind="provider" />
      </div>
    </SidebarFormField>
    <SidebarFormField v-bind="toValue(items.fields).block">
      <OptionsBlock />
    </SidebarFormField>
    <!-- block -->
    <UTheme
      :ui="{
        formField: {
          root: 'max-w-[calc(50%-var(--spacing)*4)]',
          help: 'px-3 text-center! text-pretty'
        },
        input: {
          root: 'w-full'
        }
      }">
    </UTheme>
  </FormWrapper>
</template>
