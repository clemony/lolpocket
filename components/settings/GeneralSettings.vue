<script setup lang="ts">
definePageMeta({
  alias: '/settings',
  path: '/settings',

})
const as = useAccountStore()
// const sidebar = ref(as.defaultSidebarOpen)
function toggleSetting(model) {
  useToggle(model)
}

const settingsData = {
  general: [
    {
      title: 'Reduce Motion',
      description: 'Reduce the wobblies.',
      model: as.reducedMotion,
      text: as.reducedMotion == false ? 'Wigglies On' : 'Less Wobblies',
    },
    {
      title: 'Suppress Pocket Preview',
      description: 'The little pocket that slides down in the sidebar and is annoying sometimes.',
      model: as.pocketPreview,
      text: as.pocketPreview == false ? 'Previews Visible' : 'Previews Hidden',
    },
    {
      title: 'Colorblind Mode',
      description: 'Changes many of the green shades to blue.',
      model: as.colorBlindMode,
      text: as.colorBlindMode == false ? 'Colorblind Off' : 'Colorblind On',
    },
    {
      title: 'Automatic Archiving',
      description: 'Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update.',
      // model: sidebar.value,
      // text: as.defaultSidebarOpen == false ? 'Collapsed' : 'Expanded',
    },
  ],
}
</script>

<template>
  <NuxtLayout name="setting-section-layout">
    <SettingCard
      v-for="item in settingsData.general"
      :key="item.title"
      :title="item.title"
      :description="item.description"
      class="h-28"
    >
      <label
        class="flex w-full cursor-pointer items-end gap-4"
        @click="toggleSetting(item.model)"
      >
        <Switch v-model:checked="item.model" />
        <span class="label-text w-full text-left">
          {{ item.text }}
        </span>
      </label>
    </SettingCard>
  </NuxtLayout>
</template>

<style scoped></style>
