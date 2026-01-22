<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()

const p = ref(props.params)
const route = useRoute()
</script>

<template>
  <Button
    v-tooltip="'View extended champion data'"
    variant="ghost"
    data-placement="bottom"
    data-theme="mini-tip neutral no-arrow"
    class="group/btn my-auto flex h-14 w-full cursor-pointer items-center justify-start gap-3 self-center bg-transparent py-0"
    @click=" navigateTo(
      `/summoner/${route.params.region}/${route.params.slug}/${champKeyById(params.data.championId)}`,
    )">
    <img
      :src="`/img/champions/${params.data.championId}.webp`"
      class="size-13 rounded-full shadow-sm drop-shadow-sm"
      :alt="`${champNameById(params.data.championId)}-icon`" />
    <h4 class="text-start leading-none font-semibold dst">
      {{ champNameById(params.data.championId) }}
    </h4>
    <Icon
      name="open"
      class="size-3.5 opacity-40 group-hover/btn:opacity-100" />
  </Button>
</template>

<style scoped></style>
