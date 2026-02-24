<script setup lang="ts">
import ChampionTooltip from "#components"

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
const toast = useToast()
function showToast() {
  if (!champId.value) return
  if (!toast.toasts.value.find((t) => t.id === `champion-${id}`)) {
    toast.add({
      id: `champion-${id}`,
      description: h(ChampionTooltip, { id: champId.value }),
      duration: 0,
      ui: {
        root: "p-0!",
      },
    })
  }
}
</script>

<template>
  <Tooltip
    trailing-icon="i"
    :label="champName"
    :avatar="champId ? `/img/champions/${champId}.webp` : undefined"
    :side>
    <Img
      role="button"
      :src="champId ? `/img/champions/${champId}.webp` : undefined"
      :class="
        cn(
          'size-14 overflow-hidden rounded-lg shadow-sm drop-shadow-sm',
          className
        )
      "
      :alt="champName ? `${champName} icon` : 'champion icon'"
      @click.stop="showToast()"
      @loaded="onLoad">
      <Icon
        v-if="!champId"
        class="absolute size-5 place-self-center opacity-60"
        name="lol:champ" />
    </Img>
  </Tooltip>
</template>
