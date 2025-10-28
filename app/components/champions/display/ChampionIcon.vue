<script setup lang="ts">
const {
  id,
  title,
  alt,
  class: className,
  k,
  params,
} = defineProps<{
  id?: number
  k?: string
  params?: any
  alt?: string
  class?: HTMLAttributes['class']
  title?: string
}>()

const emit = defineEmits(['loaded'])

const champId = computed (() => params ? params.value : k ? ix().champIdByKey(k) : id)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}
</script>

<template>
  <StaticImg
    :img="`/img/champions/${champId}.webp`"
    :alt="title || alt || `Champion ${champId} icon`"
    :class="
      cn(
        '',
        className,
      )
    "
    @loaded="onLoad" />
</template>
