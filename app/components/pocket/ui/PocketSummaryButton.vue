<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
</script>

<template>
  <Btn
    :class="{
      'btn-active border-r-p2 [&_span]:border-p0 [&_span]:bg-p0/60 [&_span]:inset-shadow-black/16':
        route,
    }"
    @click="navigateTo(`/pocket/${pocket.key}/complete`)">
    <slot />

    <span>
      <icon
        class="h-4.5 w-auto shrink-0 dst peer-checked:text-nc"
        name="infinity" />
    </span>
    Summary
    <Grow />
  </Btn>
</template>
