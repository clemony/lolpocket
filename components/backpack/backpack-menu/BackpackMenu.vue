<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
  menuOpen: boolean
}>()
const menuOpen = computed(() => props.menuOpen)
const pocket = computed (() => props.pocket)

const container = {
  visible: {
    opacity: 1,
    translate: ['-50% 0', '0 0'],
  },

  leave: {
    opacity: [1, 0],
  },

}

const items = {
  visible: {
    opacity: [0, 0.5, 1],
    duration: 0.7,
  },
  leave: {
    opacity: [1, 0.5, 0],
    duration: 0.2,
  },
  transition: {
    duration: 0.5,
    type: 'ease-in-out',
  },
}

const classObject = 'font-normal text-4 justify-start gap-3  w-full btn btn-ghost cursor-pointer !text-[#000000]'
</script>

<template>
  <AnimatePresence as="div" class="size-full absolute top-0 left-0">
    <Motion
      key="container-menu" as="div"
      class="absolute top-0 left-0  flex flex-col  z-3  size-full relative py-4.5 px-6 *:text-start"
      :variants="container"
      :initial="{ opacity: 0 }"
      animate="visible"
      exit="leave">

      <AnimatePresence
        multiple as="div" :transition="{ duration: 0.3 }" :animate="{ opacity: [0, 1] }" :exit="[1, 0.2, 0]" class="absolute">
        <Motion
          v-if="menuOpen"
          key="pocket-header"
          :variants="items"
          as="div"
          class="h-10  relative w-fit">
          <EditablePocketHeader :pocket="pocket" wrapper-class="w-64 h-full justify-start h-10 rounded-lg **:!text-[#000000] justify-items-start **:pr-6 pr-6 focus-within:!bg-[#00000000] font-medium flex flex-col focus-within:!border-[#000000] **:text-left **:justify-start flex-nowrap text-nowrap px-3 hover:!bg-[#00000000] !border-[#00000060]" class=" text-left justify-start text-4 tracking-tight " button-class="right-0 **:opacity-100" />
        </Motion>
      </AnimatePresence>
      <AnimatePresence
        multiple as="div" :transition="{ duration: 0.3 }" :animate="{ opacity: [0, 1] }" :exit="[1, 0.2, 0]" class="absolute right-0 bottom-6 justify-end **:justify-items-end **:justify-end **:text-right max-w-32">
        <Motion
          v-if="menuOpen"
          key="open-pocket"
          as="div"
          :variants="items"
          class=" mt-4">
          <NuxtLink
            :to="`/pocket/${pocket.key}`"
            :class="classObject"><!--
            <icon name="radix-icons:external-link" /> -->
            Open
          </NuxtLink>
        </Motion>

        <Motion
          v-if="menuOpen"
          key="edit-splash"
          as="button"
          :variants="items"
          :class="classObject"><!--
          <icon name="radix-icons:image" /> -->
          Edit Splash
        </Motion>

        <Motion
          v-if="menuOpen"
          key="card-it"
          as="button"
          :variants="items"
          :class="classObject"><!--
          <icon name="radix-icons:card-stack" /> -->
          Card
        </Motion>

        <Motion
          v-if="menuOpen"
          key="double-it"
          as="button"
          :variants="items"
          :class="classObject"
          @click="duplicatePocket(pocket)"><!--
          <icon name="copy" /> -->
          Duplicate
        </Motion>

        <Motion
          v-if="menuOpen"
          key="export-it"
          as="button"
          :variants="items"
          :class="classObject"><!--
          <icon name="export" /> -->
          Export
        </Motion>

        <Motion
          v-if="menuOpen"
          key="trash-it"
          as="button"
          :variants="items"
          :class="classObject"
          @click="deletePocket(pocket)"><!--
          <icon name="trash" /> -->
          Trash
        </Motion>
      </AnimatePresence>
    </Motion>
  </AnimatePresence>
</template>