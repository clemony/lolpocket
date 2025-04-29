<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const route = useRoute()

const title = computed (() =>{
 let t
   if (route.params.puuid ){
  const ss = useSummonerStore()
  t = `${ss.getSummoner(route.params.puuid.toString()).name}'s Profile`
   } else {
    t = route.meta.title || route.name
   }
   return t
})
</script>

<template>
  <div :class="cn('flex items-center z-5 shrink-0  w-44  relative ', props.class)">
    <h3 v-if="route.meta.section != 'pocket'" class="z-6 text-3 font-medium grow capitalize dst pointer-events-none">
      {{ title  }}
    </h3>

    <slot />
  </div>
</template>