<script setup lang="ts">
const props = defineProps<{
  alignOffset?: number
  class?: HTMLAttributes['class']
  currentValue?: number
}>()
const emit = defineEmits(['update:spell'])

const selected = ref<number | null>(null)

onMounted(() => {
  if (props.currentValue != null) selected.value = props.currentValue
})
</script>

<template>
  <UPopover>
    <UButton
      :class="cn('group/trig w-full p-0', props.class)"
      @click.stop.prevent>
      <UButton
        class="hover:ring-b4 relative grid size-16 place-items-center overflow-hidden p-0 hover:ring"
        color="p2"
        :class="{ 'shadow-sm drop-shadow-sm': selected !== null }">
        <icon
          v-if="selected == null"
          class="size-6.5 opacity-20"
          name="tabler:flame"
          alt="no summoner spell chosen" />

        <Img
          v-else
          class="size-16"
          :alt="String(selected)"
          :src="`/img/spells/${selected}.webp`" />
      </UButton>
    </UButton>

    <PopPopoverContent
      class="size-fit"
      side="bottom"
      arrow-class=""
      :side-offset="5"
      align="center">
      <div class="grid grid-cols-3 place-content-evenly gap-3">
        <label
          v-for="ss in spells"
          :key="ss.id"
          class="size-16 cursor-pointer! rounded-lg shadow-sm transition-[colors,opacity] duration-400 hover:ring-2 hover:ring-pc/60 disabled:opacity-70 disabled:inset-shadow-sm disabled:grayscale"
          as="label"
          :title="ss.name.toString()"
          :disabled="selected === ss.id">
          <input
            id="spells"
            v-model="selected"
            class="hidden"
            type="radio"
            :value="ss.id"
            :disabled="selected === ss.id"
            @change="emit('update:spell', ss.id)">

          <Img
            class="size-full rounded-lg"
            :src="`/img/spells/${ss.id}.webp`"
            :alt="ss.name.toString()" />
        </label>
      </div>
    </PopPopoverContent>
  </UPopover>
</template>
