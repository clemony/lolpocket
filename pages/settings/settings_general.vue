<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  alias: '/settings',
  path: '/settings',
  name: 'general',

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
  <div class="size-full ">
    <div :class="cn('grid w-full grid-cols-3 gap-10 px-2 *:size-full', props.class)">
      <div
        v-for="item in settingsData.general"
        :key="item.title"
        class=" shadow-sm pt-7 grid grid-rows-2 pb-8 px-8 rounded-box border-b3/60 border max-h-50">
        <div class="">
          <h2 class="dst mb-3">
            {{ item.title }}
          </h2>
          <p>{{ item.description }}</p>
        </div>
        <label
          class="flex w-full cursor-pointer items-end gap-4"
          @click="toggleSetting(item.model)">
          <Switch v-model:checked="item.model" />
          <span class="label-text w-full text-left">
            {{ item.text }}
          </span>
        </label>
      </div>
      <div class="border-t-b2 mt-12 flex border-t pt-10 px-2">
        <button class="btn">
          Save
        </button>
        <Grow />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
