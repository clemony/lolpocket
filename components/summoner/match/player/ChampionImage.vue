<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    champName: string
    size?: number
  }>(),
  {
    size: 17,
  },
)

onMounted (async () => {
  await props.champName
  nextTick()
})
</script>

<template>
  <div class="shadow-sm rounded-lg size-fit">
    <div v-tippy="{ content: props.champName, placement: 'top' }" class="overflow-hidden rounded-lg inset-shadow-rounded" :class="`size-${props.size}`">
      <img
        :src="`/img/champion/${props.champName}.webp`"
        class=" scale-116 rounded-lg" :class="`size-${props.size}`" />
    </div>
  </div>
</template>