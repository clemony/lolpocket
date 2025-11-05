<script setup lang="ts">
const { champKey, class: className } = defineProps<{
  class?: HTMLAttributes['class']
  champKey?: string
}>()
const emit = defineEmits(['loaded'])

const loaded = ref(false)
const img = computed(() => getSplash(champKey, 'load'))

watchEffect(() => {
  if (loaded.value)
    emit('loaded', loaded.value)
})
</script>

<template>
  <div
    as="div"
    :class="
      cn(
        'grid place-items-center parallax relative cursor-pointer  rounded-xl size-full **:select-none  group relative',
        { '': loaded },
        className,
      )
    ">
    <div
      class="size-full"
      :class="
        cn(
          'grid justify-center  overflow-hidden  relative cursor-pointer bg-no-repeat rounded-lg  size-full **:select-none  group ',
          className,
        )
      "
      :style="{
        objectPosition: '50% -1.8rem',
      }">
      <Img
        :img="img"
        :quality="60"
        class="object-cover absolute -top-8 !rounded-xl *:rounded-xl bg-size-[190%]"
        :class="{
          'inset-shadow-[0px_0px_10px_4px_#00000040] animate-in fade-in zoom-in duration-500 ':
            loaded,
        }"
        :alt="`${champKey}-Splash`"
        @loaded="loaded = true">
        <slot />
      </Img>
    </div>

    <div
      v-show="champKey"
      class="absolute inset-0 rounded-xl hover:ring-offset-2 text-left hover:ring-offset-b1/95 hover:ringneutral/60 overflow-hidden opacity-0 pointer-events-none group-hover:opacity-100 bgneutral/50 text-nc transition-all duration-300 py-4 px-3.5 grid justify-start text-12 break-all hyphens-manual tracking-tighter font-bold leading-none text-wrap items-end whitespace-break-spaces">
      {{ hyphenateChampionName(ix().champNameByKey(champKey)) }}
    </div>

    <div
      v-show="loaded"
      class="size-full absolute top-0 left-0 !shadow-sm drop-shadow-sm border-b4 border rounded-xl" />
  </div>
</template>

<style scoped></style>
