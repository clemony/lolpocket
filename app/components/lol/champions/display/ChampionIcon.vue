<script setup lang="ts">
const {
  id,
  title,
  alt,
  as,
  class: className,
  k,
  params,
} = defineProps<{
  id?: number
  k?: string
  params?: any
  alt?: string
  as?: string
  class?: HTMLAttributes['class']
  title?: string
}>()

const emit = defineEmits(['loaded'])

const champId = computed(() =>
  params ? params.value : k ? ix().champIdByKey(k) : id,
)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}
</script>

<template>
  <Element
    :as
    :class="
      cn(
        `
          grid aspect-square shrink-0 place-items-center overflow-hidden
          rounded-lg shadow-sm drop-shadow-sm
        `,
        className,
      )
    ">
    <StaticImg
      :img="`/img/champions/${champId}.webp`"
      :alt="title || alt || `Champion ${champId} icon`"
      @loaded="onLoad" />
  </Element>
</template>
