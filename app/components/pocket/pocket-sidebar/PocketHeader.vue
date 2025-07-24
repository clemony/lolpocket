<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <header class="items-center flex gap-2  w-full">
    <LazyIconPopover
      :pocket="pocket"
      align="start"
      :align-offset="22"
      :side-offset="8"
      popover-class="ml-6.5 mt-2 w-98" />

    <div class="w-full max-w-90 relative pr-1 ">
      <a
        class="hover:underline flex ml-2.75 -mb-px cursor-pointer tldr-20 underline-offset-2 items-center gap-1 text-1 font-medium tracking-tight ` "
        @click="navigateTo('/backpack')">
        <!--             <icon name="left-sm" class="size-3.5 stroke-[1.4] mb-0.5" /> -->
        Backpack</a>

      <EditablePocketHeader
        icons
        :pocket="pocket"
        class="text-nowrap  truncate **:truncate dst !text-6 font-semibold tracking-tight **:min-w-80" />
    </div>
  </header>
</template>