<script lang="ts" setup>
import { PopoverAnchor } from 'reka-ui'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
const isOpen = shallowRef(false)

watch(
  () => isOpen.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)
</script>

<template>
  <LazyIconPopover
    class="size-full rounded-none place-items-end pr-10 pb-4 before:bottom-0 before:right-0 before:absolute before:size-full before:bg-linear-145 before:from-transparent before:from-30% before:to-black/70 before:transition-opacity before:duration-500 hover:before:opacity-100 before:z-0 after:content-['Edit'] justify-end after:order-first after:font-bold group/pop **:!text-nc after:!text-nc after:-mb-1 flex after:mr-4 after:transition-opacity after:duration-500 hover:after:opacity-100 after:z-1 after:text-5overflow-hidden"
    :class="{
      'after:opacity-0  before:opacity-0': !isOpen,
      'after:!opacity-100 before:!opacity-100': isOpen,
    }"
    :pocket="pocket"
    align="end"
    aria-label="Edit Splash/Icon"
    :align-offset="-20"
    :side-offset="-18"
    popover-class="ml-6.5 mt-2 w-98">
    <!--
    @update:open="e => isOpen = e" -->
    <PopoverAnchor class="z-2">
      <icon
        name="images"
        :class="
          cn(
            'text-nc size-7 opacity-60 transition-opacity duration-500  group-hover/pop:opacity-100',
            { 'opacity-100': isOpen },
          )
        " />
    </PopoverAnchor>
  </LazyIconPopover>
</template>
