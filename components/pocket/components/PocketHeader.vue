<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
  class?: HTMLAttributes['class']
  bgClass?: HTMLAttributes['class']
  title?: string
}>()

const ts = useTempStore()

const pocket = ref(props.pocket)

/* const folder = computedAsync(() => {
  return pocket.value.folder
})
 */
const name = computedAsync(() => {
  return pocket.value.name
})

function handleDrawer() {
  ts.selectedPocket = pocket
  console.log('💠 - handleDrawer - pocket:', pocket)

  useDrawerToggle('editPocket')
}
</script>

<template>
  <header :class="cn('w-full pt-[6.4vh]  flex flex-nowrap shrink-0 flex-col justify-end items-start gap-3', props.bgClass)">
    <div class="breadcrumbs text-2 font-medium tracking-tight bread">
      <ul class="flex items-center **:[&_li]:before:!hidden">
        <li>
          <NuxtLink to="/pockets">
            <span class="inline-flex items-center gap-2.5 capitalize"> <icon name="formkit:folder" class="size-4 shrink-0" />{{ pocket.location.folder }} Folder </span>
          </NuxtLink>
        </li>
        <li class="before:!opacity-100 before:dst">
          <span class="inline-flex items-center !gap-2.5 capitalize">
            <icon name="teenyicons:folder-outline" class="shrink-0" />
            {{ name }}
          </span>
        </li>
      </ul>
    </div>
    <div :class="cn('flex w-full  items-center', props.class)">
      <h1 class="!text-8 text-start dst tracking-tight !leading-none truncate shrink-0 w-fit overflow-hidden capitalize  flex">
        {{ props.title }}
      </h1>
      <slot />
    </div>
  </header>
</template>

<style scoped></style>
