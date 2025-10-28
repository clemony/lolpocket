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

<<<<<<< HEAD
const emit = defineEmits(['loaded'])

const champId = computed (() => params ? params.value : k ? ix().champIdByKey(k) : id)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}
=======
const champId = computed (() => params ? params.value : k ? ix().champIdByKey(k) : id)
>>>>>>> refs/remotes/origin/main
</script>

<template>
  <StaticImg
    :img="`/img/champions/${champId}.webp`"
    :alt="title || alt || `Champion ${champId} icon`"
    :class="
      cn(
<<<<<<< HEAD
        '',
        className,
      )
    "
    @loaded="onLoad" />
=======
        'object-center overflow-hidden shrink-0 shadow-sm size-full rounded-lg  bg-b2/40 drop-shadow-sm grid place-items-center ',
        className,
      )
    ">
    <slot />
  </StaticImg>
>>>>>>> refs/remotes/origin/main
</template>
