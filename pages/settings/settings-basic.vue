<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

definePageMeta({
  name: 'basic',
  alias: '/settings/basic',
  path: '/settings',
})
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

//TODO save button
</script>

<template>
<div class="size-full !overflow-auto px-16  !pb-40">
    <div :class="cn(' max-w-180  min-w-64 mx-auto flex-col flex gap-10 *:size-full', props.class)">
      <div
        v-for="item in settingsData.general"
        :key="item.title"
        class=" shadow-warm-2 shadow-black/7 pt-9 grid grid-rows-2 gap-4 pb-10 px-10 rounded-box border-b3/60 border max-h-70">
        <div class="dst">
          <h2 class=" mb-4">
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

    </div>
</div>
      <div  class="w-full left-0 justify-items-end flex-col pb-12 bg-b1/92 backdrop-blur-md px-18  absolute bottom-0">
      <Separator class="bg-b3/60 mb-8"  />
         <button class="btn btn-lg min-w-24 max-w-44">
          Save
        </button>
        </div>
</template>

<style scoped></style>
