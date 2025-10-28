<script setup lang="ts">
<<<<<<< HEAD
import { closeAndNav } from '@app/layout/sidebar/utils.sidebar'

=======
>>>>>>> refs/remotes/origin/main
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
      cn(
        'relative group/p  flex max-h-22 min-h-22 h-full rounded-lg flex-1 items-center cursor-pointer *:pointer-events-none shadow-sm drop-shadow-sm shadow-black/8 overflow-hidden transition-all duration-500 delay-50 ease-in-out hover:flex-[3]',

        //hover
        '*:transition-scale *:ease-in-out hover:*:scale-100 *:duration-500  group-has-hover/wrap:*:scale-170 ',
        { 'btn-active': route.params?.pocket_key === pocket.key },
      )
    "
    @click="closeAndNav(`/pocket/${pocket.key}`)">
    <AspectRatio
      :ratio="1 / 1"
<<<<<<< HEAD
      class=" relative  flex grow items-center  justify-center overflow-hidden object-cover">
      <PocketIcon
        :img="pocket.icon"
        class=" absolute h-full grow object-cover" />
    </AspectRatio>
    <div class="bg-neutral/70 text-nc absolute z-1 flex size-full items-end justify-start p-1 text-start font-bold opacity-0 transition-opacity duration-300 group-hover/p:opacity-100">
      <icon
        name="open"
        class="text-nc absolute top-1.5 right-1.5" />
=======
      class=" relative  grid place-items-center overflow-hidden  grow flex object-cover">
      <PocketIcon
        :img="pocket.icon"
        class=" h-full absolute grow object-cover" />
    </AspectRatio>
    <div class="absolute z-1 size-full text-start flex justify-start items-end bg-neutral/70 text-nc opacity-0 p-1 font-bold text-nc group-hover/p:opacity-100 transition-opacity duration-300">
      <icon
        name="open"
        class="absolute top-1.5 right-1.5 text-nc" />
>>>>>>> refs/remotes/origin/main
      <span class="absolute w-full truncate px-1">
        {{ pocket.name }}
      </span>
    </div>
  </button>
</template>