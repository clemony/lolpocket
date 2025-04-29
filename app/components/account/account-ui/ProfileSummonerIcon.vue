<script lang="ts" setup>
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

// wtf


const icon = ref()
const name = ref()
const loaded = ref(false)

onMounted (async() => {
const si = computed (() => summoner.profileIcon)
const sn = computed (() => summoner.name)
await {si, sn}
icon.value = si.value
name.value = sn.value
})
</script>

<template>
  <div        :class="cn({'inset-shadow-sm inset-shadow-black/90 avatar': loaded}, className)">
  <NuxtImg
      v-if="name && icon"
      :src="icon"
      :alt="`${name}'s icon`"
       :class="{'inset-shadow-sm inset-shadow-black/90 avatar': loaded}"
       @load="loaded = true"
      class="size-full  rounded-full  " />

    <div
      v-else
      class="rounded-full avatar bg-neutral grid place-items-center text-nc text-2 size-full font-semibold">
      LP
    </div>
</div>
</template>