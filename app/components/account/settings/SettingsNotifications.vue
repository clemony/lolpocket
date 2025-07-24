<script lang="ts" setup>
const as = useAccountStore()
</script>

<template>
  <div class="gap-9 pb-8 grid pl-2">
    <MotionHoverLabel>
      <p class="font-medium text-4">
        New Pocket Creation
      </p>

      <Grow />

      <MotionArrowSlide />

      <Switch
        v-model:model-value="as.settings.alertNewPocket as boolean"
        class="scale-90 -mt-0.25 dst" />
    </MotionHoverLabel>

    <MotionHoverLabel>
      <p class="font-medium text-4">
        Pocket Deletion
      </p>

      <Grow />

      <MotionArrowSlide />

      <Switch
        v-model:model-value="as.settings.alertDeletePocket as boolean"
        class="scale-90 -mt-0.25 dst" />
    </MotionHoverLabel>
  </div>
</template>
