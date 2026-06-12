<script setup lang="ts">
import { useAccountSettings } from "~/domain/user/composables/settings/useAccountSettings"

const items = useAccountSettings()
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
      <div class="grid w-full grid-cols-2 gap-3">
        <ProviderLabel
          v-for="(provider, i) in items.providers"
          :key="i"
          :index="i"
          v-bind="provider" />
      </div>
    </SidebarFormField>
    <!-- block -->
    <SidebarFormField v-bind="toValue(items.fields).block">
      <OptionsBlock />
    </SidebarFormField>
  </FormWrapper>
</template>
