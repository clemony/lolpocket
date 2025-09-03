<script lang="ts" setup>
const route = useRoute('pocket-pocketKey-champions')
const pocket = computed(() => ps().getPocket(route.params.pocketKey)).value
</script>

<template>
  <LazyIconPopover
    v-memo="pocket.icon"
    class="size-full rounded-none place-items-end pr-10 pb-4 before:bottom-0 before:right-0 before:absolute before:size-full before:bg-linear-145 before:from-transparent before:from-30% before:to-black/70 before:transition-opacity before:duration-500 hover:before:opacity-100 before:opacity-0 before:z-0 after:content-['Edit'] justify-end after:order-first after:font-bold  **:!text-nc after:!text-nc after:-mb-1  flex after:mr-4 after:transition-opacity after:duration-500 hover:after:opacity-100 after:z-1 after:opacity-0  after:text-5 overflow-hidden"
    :pocket="pocket"
    align="end"
    aria-label="Edit Splash/Icon"
    :align-offset="22"
    :side-offset="-16"
    popover-class="ml-6.5 mt-2 w-98">
    <icon
      name="images"
      class="text-nc size-7 z-1" />
  </LazyIconPopover>
</template>