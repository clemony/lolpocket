<script lang="ts" setup>
const props = defineProps<{
  routeName?: string
}>()

const route = useRoute()
</script>

<template>
  <div class="btn btn-square btn-lg join-item relative *:absolute group-disabled/trig:!opacity-60 items-center  btn-ghost btn-lg group/btn cursor-pointer " :class="{ 'btn-active border-l-none hover:bg-b2': route.name == props.routeName }">
    <icon name="up-sm" class="group-data-[state=open]/btn:rotate-180 size-4.5 tldr-20 group-disabled/trig:opacity-0" />
    <icon name="radix-icons:lock-closed" class="size-4 group-disabled:opacity-100 tldr-20 dst opacity-0" />
  </div>
</template>