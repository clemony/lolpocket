<script lang="ts" setup>
const props = defineProps<{
  params: any
}>()
</script>

<template>
  <Popover>
    <div class="items-center size-full flex" :class="{ '**:pointer-events-none ': props.params.location == 'trash' }">
      <PopoverTrigger :disabled="props.params.location == 'trash'" class="ti-container pointer-events-auto group cursor-pointer bg-gradient-to-br from-neutral/60 to-neutral grid place-items-center relative">
        <div
          class="ti-wrapper group-hover:opacity-0 transition-all  duration-400 "
          :style="{
            backgroundImage: `url(${props.params.value})`,
            backgroundSize: props.params.value == '/img/champion/centered/1.webp' ? '100%' : '450%',
            backgroundPosition: 'center 20%' }">
        </div>
        <icon name="ph:gear-six-fill" class="size-7 text-nc absolute opacity-0  group-hover:opacity-85  transition-all  duration-400" />
      </PopoverTrigger>
      <LazyIconPopover :pocket-key="props.params.data.key" />
    </div>
  </Popover>
</template>

<style scoped>

</style>