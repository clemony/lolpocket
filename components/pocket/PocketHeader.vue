<script setup lang="ts">
const props = defineProps<{
  pocket?: pocket
}>()

const pocket = ref(props.pocket)

const folder = computedAsync(() => {
  return pocket.value.inFolder
})

const name = computedAsync(() => {
  return pocket.value.name
})
</script>

<template>
  <header class="w-full !h-[var(--page-header-height)]  flex flex-nowrap shrink-0 flex-col px-1 gap-5 py-2 justify-end items-start">
    <div class="breadcrumbs text-2">
      <ul class="flex items-center ml-0.5">
        <li>
          <a>
            <span class="inline-flex items-center gap-2.5"> <icon name="formkit:folder" />Pocket Folders </span></a>
        </li>
        <li>
          <span class="inline-flex items-center !gap-2.5 capitalize">
            <icon name="teenyicons:folder-outline" />
            {{ folder }}
          </span>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-3">
      <!--  <PocketIcon
        :pocket="props.pocket"
        class="size-7.25 rounded-full overflow-hidden -ml-1" /> -->
      <h1 class="!text-8 drop-shadow-text w-full tracking-tight truncate">
        {{ name }}
      </h1>
    </div>
  </header>
</template>

<style scoped></style>
