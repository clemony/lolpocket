<script setup lang="ts">
const {
  id,
  side = "top",
  class: className,
  k,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes["class"]
  k?: string
  id?: number
  side?: Side
  loadingType?: LoadingStyle
}>()
const emit = defineEmits(["loaded"])

const champId = computed(() => (k ? champIdByKey(k) : id))
const champName = computed(() =>
  champId.value ? champNameById(champId.value) : ""
)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit("loaded")
}
</script>

<template>
  <Tooltip
    trailing-icon="i"
    :label="champName"
    :avatar="champId ? `/img/champions/${champId}.webp` : undefined"
    :side>
    <UAvatar
      icon="lol:champ"
      role="button"
      :src="champId ? `/img/champions/${champId}.webp` : undefined"
      :ui="{
        root: cn(
          'size-14 overflow-hidden rounded-lg shadow-sm drop-shadow-sm',
          className
        ),
        icon: 'opacity-60 size-5 ',
      }"
      :alt="champName ? `${champName} icon` : 'champion icon'"
      @loaded="onLoad" />
  </Tooltip>
</template>
