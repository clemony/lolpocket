<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    champId: number
    size?: number
  }>(),
  {
    size: 17,
  },
)

onMounted (async () => {
  await props.champId
  nextTick()
})
</script>

<template>
  <div class="shadow-sm rounded-lg size-fit">
    <div v-tippy="{ content: props.champId, placement: 'top' }" class="overflow-hidden rounded-lg inset-shadow-rounded" :class="`size-${props.size}`">
      <img
        :src="`/img/champion/${props.champId}.webp`"
        class=" scale-116 rounded-lg" :class="`size-${props.size}`" />
    </div>
  </div>
</template>