<script setup lang="ts">
const { class: className, pocket: p } = defineProps<{
  class?: HTMLAttributes['class']
  pocket: Pocket
}>()

const pocket = computed (() => p).value
const isOpen = shallowRef<boolean>(false)
function handleSplash(e: string) {
  pocket.icon = e.replace('centered', 'tile')
  isOpen.value = false
}

onMounted(() => {
  if (!pocket.icon && pocket.main.champion)
    pocket.icon = getSplash(pocket.main.champion, 'tile')
})
pocket.icon = pocket.icon.replace('centered', 'tile')
</script>

<template>
  <GlassSplashBrowser
    v-model:open="isOpen"
    @update:splash="e => handleSplash(e)">
    <slot>
      <!-- TODO default splash -->
      <PocketIcon
        :img="pocket ? pocket?.icon : ''"
        alt="pocket icon"
        class="group-hover/icon:brightness-50 pointer-events-none z-1 group-data-[state=open]/icon:brightness-50 transition-all duration-500 ease-in-out  !size-22 rounded-full" />

      <icon
        name="images"
        class="size-6 !text-nc absolute opacity-0 group-hover/icon:opacity-80 z-2 transition-all pointer-events-none duration-500 ease-in-out group-data-[state=open]/icon:opacity-100" />
    </slot>
  </GlassSplashBrowser>
</template>