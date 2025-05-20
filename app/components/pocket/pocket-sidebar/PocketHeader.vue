<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="items-center flex gap-2 ">
      <LazyPopover>
        <PopoverTrigger class="group/picon z-0 shrink-0 !cursor-pointer self-center  !size-14 border border-b3  rounded-full !pointer-events-auto  aspect-square  grid place-items-center relative  overflow-hidden  ">

          <PocketIcon v-if="pocket && pocket?.icon" :url="pocket?.icon" alt="pocket icon" bg-size="160%" class=" group-hover/picon:brightness-50 z-1 group-data-[state=open]/picon:brightness-50   tldr-30  " />
         

          <icon name="images" class="size-6 !text-nc absolute opacity-0  group-hover/picon:opacity-80 z-2 transition-all  duration-300 group-data-[state=open]/picon:opacity-100" />
        </PopoverTrigger>
        <LazyIconPopover :pocket="pocket" align="start" class="bg-neutral/85  backdrop-blur-md w-86" hydrate-on-interaction />
      </LazyPopover>

      <div class="w-full max-w-90 relative pr-1 ">
        <a class="hover:underline flex ml-2.75 -mb-px cursor-pointer tldr-20 underline-offset-2 items-center gap-1 text-1 font-medium tracking-tight ` " @click="navigateTo('/backpack')">
          <!--             <icon name="left-sm" class="size-3.5 stroke-[1.4] mb-0.5" /> -->
          Backpack</a>
        <EditablePocketHeader icons :pocket="pocket" class="text-nowrap  truncate **:truncate dst !text-6 font-semibold tracking-tight **:min-w-80" />
      </div>
    </div>
  </div>
</template>