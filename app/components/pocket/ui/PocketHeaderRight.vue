<script lang="ts" setup>
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
    class="group/pop after:text-xloverflow-hidden flex size-full place-items-end justify-end rounded-none pr-10 pb-4 **:text-nc! before:absolute before:right-0 before:bottom-0 before:z-0 before:size-full before:bg-linear-145 before:from-transparent before:from-30% before:to-black/70 before:transition-opacity before:duration-500 after:z-1 after:order-first after:mr-4 after:-mb-1 after:font-bold after:text-nc! after:transition-opacity after:duration-500 after:content-['Edit'] hover:before:opacity-100 hover:after:opacity-100"
    :class="{
      'before:opacity-0 after:opacity-0': !isOpen,
      'before:opacity-100! after:opacity-100!': isOpen,
    }"
    :pocket="pocket"
    align="end"
    aria-label="Edit Splash/Icon"
    :align-offset="-20"
    :side-offset="-18"
    popover-class="ml-6.5 mt-2 w-98">
    <!--
    @update:open="e => isOpen = e" -->
    <UButton class="z-200 size-10 border border-black">
      <icon
        name="images"
        :class="
          cn(
            'size-7 text-nc opacity-60 transition-opacity duration-500 group-hover/pop:opacity-100',
            { 'opacity-100': isOpen },
          )
        " />
      dfddfd
    </UButton>
    </LazyIconUPopover
    </template>
  </lazyiconpopover>
</template>