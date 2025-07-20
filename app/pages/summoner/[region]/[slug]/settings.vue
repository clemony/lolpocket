<script lang="ts" setup>
definePageMeta({
  middleware: 'check-if-user',
})
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

</script>

<template>
  <div :class="cn('max-w-[1040px] py-14 px-1 flex-col gap-14 scrollbar-hidden !justify-start !items-center ', className)">
<div class="grid grid-cols-[1fr_4fr] w-full">
<h2 class="col-span-full dst font-bold">
  Profile Settings
</h2>

  <menu class="col-start-1 grid w-full h-max pl-1 *:hover:underline *:underline-offset-2 *:font-medium mt-8 gap-3 *:cursor-pointer">
    <li>Profile Splash</li>
    <li>Display</li>
  </menu>

  <div class="w-full">
<SplashSelectPanel :summoner  />
  </div>
</div>
</div>
</template>