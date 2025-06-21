<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
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
      title: 'Automatic Archiving',
      description: 'Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update.',
      // model: sidebar.value,
      // text: as.defaultSidebarOpen == false ? 'Collapsed' : 'Expanded',
    },
  ],
}

// TODO save button
</script>

<template>
  <div :class="cn(' w-full flex-col pt-8 pb-3 px-3 flex border-t-b3 border-t gap-8 *:size-full', props.class)">
    <div
      v-for="item in settingsData.general"
      :key="item.title"
      class="  flex flex-col gap-4  max-h-70">
      <div class="dst">
        <h4 class=" mb-2">
          {{ item.title }}
        </h4>

        <p class=" opacity-80 text-balance tracking-tight">
          {{ item.description }}
        </p>
      </div>

      <label
        class="flex w-full cursor-pointer items-end gap-4"
        @click="toggleSetting(item.model)">
        <Switch v-model:checked="item.model" class="drop-shadow-xs" />

        <span class="label-text w-full text-left">
          {{ item.text }}
        </span>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
