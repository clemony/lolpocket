<script setup lang="ts">
import { getSplash } from "~/domain/utils/img"

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes["class"]
  pocket: Pocket
}>()

const pocket = computed(() => p).value
const isOpen = shallowRef<boolean>(false)
function handleSplash(e: string) {
  pocket.icon = e.replace("centered", "tile")
  isOpen.value = false
}

onMounted(() => {
  if (!pocket.icon && pocket._champion)
    pocket.icon = getSplash(pocket._champion, "tile")
})
if (pocket.icon) {
  pocket.icon = pocket.icon.replace("centered", "tile")
} /*
    v-model:open="isOpen"
    @update:splash="(e) => handleSplash(e)" */

// todo uimodal
</script>

<template>
  <div>
    <slot>
      <!-- TODO todo  default splash -->
      <PocketIcon
        class="pointer-events-none z-1 size-22! rounded-full transition-all duration-500 ease-in-out group-hover/icon:brightness-50 group-data-[state=open]/icon:brightness-50"
        :src="pocket ? pocket?.icon : ''"
        alt="pocket icon" />

      <icon
        class="pointer-events-none absolute z-2 size-6 text-nc! opacity-0 transition-all duration-500 ease-in-out group-hover/icon:opacity-80 group-data-[state=open]/icon:opacity-100"
        name="images" />
    </slot>
  </div>
</template>
