<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
</script>

<template>
  <Btn
    :class="{
      'btn-active border-r-b2 [&_span]:border-b1 [&_span]:bg-b1/60 [&_span]:inset-shadow-black/16':
        route,
    }"
    @click="navigateTo(`/pocket/${pocket.key}/complete`)"
  >
    <slot />

    <span>
      <icon
        class="dst peer-checked:text-nc h-4.5 w-auto shrink-0"
        name="infinity"
      />
    </span>
    Summary
    <Grow />
  </Btn>
</template>
