<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = ref(props.pocket)
</script>

<template>
  <div class="h-full overflow-y-hidden    !overflow-x-visible flex-col   **:select-none items-start flex flex-nowrap pt-[7vh]  gap-6">
    <slot />
    <Field
      title="Sets"
      class="max-h-204   w-full relative  ">
      <div class="contents overflow-y-auto !overflow-x-visible">
        <transition-slide :offset="[0, -16]" group class="h-fit py-3 gap-8   flex flex-col items-center">
          <div
            v-for="set in pocket.runes.sets" :key="set.key"
            class="px-4"
            :class="set.primary">
            <RuneSetButton :pocket="pocket" :set="set" />
          </div>
        </transition-slide>
      </div>
    </Field>
  </div>
</template>

<style scoped>

</style>