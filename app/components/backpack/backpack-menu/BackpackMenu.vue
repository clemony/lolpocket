<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => props.pocket)


const classObject = 'font-normal text-4 justify-start gap-3  w-full btn btn-ghost cursor-pointer !text-[#000000]'
</script>

<template>

    <div
      class=" flex flex-col  z-3 bg-white  size-full relative py-4.5 px-6 *:text-start">


        <div
          class="h-10  relative w-fit">
        <EditablePocketHeader :pocket="pocket" wrapper-class="w-64 h-full justify-start h-10 rounded-lg **:!text-[#000000] justify-items-start **:pr-6 pr-6 focus-within:!bg-[#00000000] font-medium flex flex-col focus-within:!border-[#000000] **:text-left **:justify-start flex-nowrap text-nowrap px-3 hover:!bg-[#00000000] !border-[#00000060]" class=" text-left justify-start text-4 tracking-tight " button-class="right-0 **:opacity-100" />
        </div>

      <div class="absolute right-0 bottom-6 justify-end **:justify-items-end **:font-medium **:text-[#000000] **:tracking-tight **:justify-end **:text-right max-w-32">

          <NuxtLink
            :to="`/pocket/${pocket.key}`"
            :class="classObject"><!--
            <icon name="radix-icons:external-link" /> -->
            Open
          </NuxtLink>
     
          <div>
          <icon name="radix-icons:image" />
          Edit Splash
       </div>
        <button><!--
          <icon name="radix-icons:card-stack" /> -->
          Card
        </button>

        <button
          @click="duplicatePocket(pocket)"><!--
          <icon name="copy" /> -->
          Duplicate
        </button>

        <button><!--
          <icon name="export" /> -->
          Export
        </button>

        <button
          @click="deletePocket(pocket)"><!--
          <icon name="trash" /> -->
          Trash
        </button>
      </div>
    </div>

</template>