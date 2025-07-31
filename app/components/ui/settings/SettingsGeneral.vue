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
    },
    {
      title: 'Automatic Archiving',
      description: 'Upon new patch, current pockets will be archived until updated. A notificaton will remind you to update.',
    },
  ],
}

// TODO save button
</script>

<template>
  <div :class="cn(' w-full flex-col py-8 flex  gap-8 *:size-full', props.class)">
    <MotionHoverLabel
      v-for="item in settingsData.general"
      :key="item.title"
      class="  flex  items-start max-h-70">
      <div class="dst  flex-col grow">
        <h4 class=" mb-2">
          {{ item.title }}
        </h4>

        <p class=" opacity-80 text-pretty  grow leading-5">
          {{ item.description }}
        </p>
      </div>

      <MotionArrowSlide />

      <Switch
        :checked="true"
        class=" scale-90 -mt-0.25 dst" />
    </MotionHoverLabel>
  </div>
</template>

<style scoped></style>
