<script setup lang="ts">
import type { Pocket } from '~~/shared/schema'

const { class: className, row } = defineProps<{
  class?: HTMLAttributes['class']
  row?: Pocket[]
}>()
const route = useRoute()
</script>

<template>
  <button
    v-for="pocket in row"
    :key="pocket.key"
    theme="base"
    tag="div"
    :class="
      cn('group/p relative flex h-full max-h-22 min-h-22 flex-1 cursor-pointer items-center overflow-hidden rounded-lg shadow-sm shadow-black/8 drop-shadow-sm transition-all delay-50 duration-500 ease-in-out *:pointer-events-none hover:flex-[3]',

         //hover
         `
          *:transition-scale *:duration-500 *:ease-in-out
          group-has-hover/wrap:*:scale-170 hover:*:scale-100
        `,
         { 'btn-active': route.params?.pocket_key === pocket.key },
      )
    ">
    <!--
    @click="closeAndNav(`/pocket/${pocket.key}`)" -->
    <AspectRatio
      :ratio="1 / 1"
      class="
        relative flex grow items-center justify-center overflow-hidden
        object-cover
      ">
      <PocketIcon
        :src="pocket.icon"
        class="absolute h-full grow object-cover" />
    </AspectRatio>
    <div
      class="
        absolute z-1 flex size-full items-end justify-start bg-neutral/70 p-1
        text-start font-bold text-nc opacity-0 transition-opacity duration-300
        group-hover/p:opacity-100
      ">
      <icon
        name="open"
        class="absolute top-1.5 right-1.5 text-nc" />
      <span class="absolute w-full truncate px-1">
        {{ pocket.name }}
      </span>
    </div>
  </button>
</template>
