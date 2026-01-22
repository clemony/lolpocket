<script setup lang="ts">
import type { Pocket } from '@types'

const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed(() => p).value
const isOpen = shallowRef<boolean>(false)
function handleSplash(e: string) {
  pocket.icon = e.replace('centered', 'tile')
  isOpen.value = false
}

onMounted(() => {
  if (!pocket.icon && pocket._champion)
    pocket.icon = getSplash(pocket._champion, 'tile')
})
pocket.icon = pocket.icon.replace('centered', 'tile')
</script>

<template>
  <GlassSplashBrowser
    v-model:open="isOpen"
    @update:splash="(e) => handleSplash(e)">
    <slot>
      <!-- TODO default splash -->
      <PocketIcon
        :src="pocket ? pocket?.icon : ''"
        alt="pocket icon"
        class="
          pointer-events-none z-1 size-22! rounded-full transition-all
          duration-500 ease-in-out group-hover/icon:brightness-50
          group-data-[state=open]/icon:brightness-50
        " />

      <icon
        name="images"
        class="
          text-nc! pointer-events-none absolute z-2 size-6 opacity-0
          transition-all duration-500 ease-in-out group-hover/icon:opacity-80
          group-data-[state=open]/icon:opacity-100
        " />
    </slot>
  </GlassSplashBrowser>
</template>
