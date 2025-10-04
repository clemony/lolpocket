<script setup lang="ts">
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const isOpen = shallowRef<boolean>(false)
function handleSplash(e: string) {
  pocket.icon = e.replace('centered', 'tile')
  isOpen.value = false
}

onMounted(() => {
  if (!pocket.icon && pocket.main.champion)
    pocket.icon = getSplash(pocket.main.champion, 'tile')
})
</script>

<template>
  <LazySplashSelectPanel
    v-model:open="isOpen"
    @update:splash="e => handleSplash(e)">
    <slot>
      <!-- TODO default splash -->
      <PocketIcon
        :img="pocket ? pocket?.icon : ''"
        alt="pocket icon"
        class="group-hover/icon:brightness-50 pointer-events-none z-1 group-data-[state=open]/icon:brightness-50 transition-all duration-500 ease-in-out  size-full rounded-full" />

      <icon
        name="images"
        class="size-6 !text-nc absolute opacity-0 group-hover/icon:opacity-80 z-2 transition-all pointer-events-none duration-500 ease-in-out group-data-[state=open]/icon:opacity-100" />
    </slot>
  </LazySplashSelectPanel>
</template>