<script lang="ts" setup>

const { pocket } = defineProps<{
pocket: Pocket
}>()
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="items-center  h-22  flex gap-2 ">
      <LazyPopover>
        <PopoverTrigger class="group/picon z-0 shrink-0 !cursor-pointer self-center  !size-14 border border-b3  rounded-full !pointer-events-auto  aspect-square  grid place-items-center relative  overflow-hidden  shadow-sm drop-shadow-sm">
            <Image v-if="pocket.icon != '/img/lp/192.webp'" :image="pocket.icon" alt="pocket icon" class=" pointer-events-none group-hover/picon:brightness-50 z-1 group-data-[state=open]/picon:brightness-50 scale-280  tldr-30 object-cover rounded-xl absolute top-6   " />
            <div v-else class="size-full bg-gradient-to-br from-neutral/80 to-neutral grid place-items-center text-nc font-semibold text-6 dst">
              LP
            </div>
          
          <icon name="images" class="size-6 !text-nc absolute opacity-0  group-hover/picon:opacity-80 z-2 transition-all  duration-300 group-data-[state=open]/picon:opacity-100" />
        </PopoverTrigger>
        <LazyIconPopover :pocket="pocket" align="center" class="bg-neutral/85  backdrop-blur-md w-86" :b2="true" />
      </LazyPopover>

      <div class="w-full max-w-90 relative pr-1 ">
  <div class="flex gap-1 text-1 font-medium tracking-tight items-center ml-2.75 -mb-1">
 <a @click="navigateTo('/backpack')" class="hover:underline cursor-pointer hover:font-semibold tldr-20 underline-offset-2 ">Backpack</a>
  </div>
        <EditablePocketHeader icons :pocket="pocket" class="text-nowrap max-w-50 truncate **:truncate dst !text-6 font-semibold tracking-tight" />
      </div>
    </div>
  </div>
</template>