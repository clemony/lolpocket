<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
</script>

<template>
  <NavBtn :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'complete' }" @click="navigateTo(`/pocket/${pocket.key}/complete`)">
    <slot />
    <span>
      <icon
        name="infinity"
        class="h-4.5 w-auto dst shrink-0 peer-checked:text-nc" />
    </span>
    Summary
    <Grow />
  </NavBtn>
</template>