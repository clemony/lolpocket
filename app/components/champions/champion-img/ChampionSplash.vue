<script setup lang="ts">
const { url, text, bgSize = '250%', class: className, name, top = '-25%', objectPosition = 'center',
}
  = defineProps<{
    url: string
    class?: HTMLAttributes['class']
    name?: string
    text?: boolean
    bgSize?: string
    top?: string
    objectPosition?: string
  }>()
</script>

<template>
  <div
    class="" :class="cn('grid place-items-center  bg-b2 overflow-hidden  relative cursor-pointer  rounded-lg  size-full **:select-none inset-shadow-[0px_0px_10px_4px_#00000040] group relative', className)">
    <div class="size-full rounded-lg overflow-hidden">
      <NuxtImg
        :src="url"
        class="absolute  object-cover rounded-lg object-center"
        :style="{
          width: bgSize,
          height: bgSize,
          top,
          objectPosition,
        }" />
      <slot />
      <div
        v-if="text"
        class="absolute inset-0 rounded-lg hover:ring-offset-2  text-left hover:ring-offset-b1/95 hover:ring-neutral/60 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bg-neutral/50 text-nc transition-all duration-300 p-4 text-12 break-all hyphens-manual tracking-tighter font-bold flex flex-wrap leading-none text-balanced items-end whitespace-break-spaces">
        {{
          name
            .replace('Ambessa', 'Am-\nbessa')
            .replace('Blitzcrank', 'Blitz-\ncrank')
            .replace('Cassiopeia', 'Cass-\niopeia')
            .replace('Dr. Mundo', 'Dr.\nMundo')
            .replace('Fiddlesticks', 'Fiddle-\nsticks')
            .replace('Gangplank', 'Gang-\nplank')
            .replace('Heimerdinger', 'Heimer-\ndinger')
            .replace('Jarvan IV', 'Jarvan\nIV')
            .replace('Kassadin', 'Kass-\nadin')
            .replace('Lissandra', 'Liss-\nandra')
            .replace('Mordekaiser', 'Morde-\nkaiser')
            .replace('Malzahar', 'Mal-\nzahar')
            .replace('Miss Fortune', 'Miss\nFortune')
            .replace('Master Yi', 'Master\nYi')
            .replace('Nocturne', 'Noc-\nturne')
            .replace('Pantheon', 'Pan-\ntheon')
            .replace('Renata Glasc', 'Renata\nGlasc')
            .replace('Renekton', 'Ren-\nekton')
            .replace('Seraphine', 'Sera-\nphine')
            .replace('Tahm Kench', 'Tahm\nkench')
            .replace('Tryndamere', 'Tryn-\ndamere')
        }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
