<script setup lang="ts">
const props = defineProps<{
  alignOffset?: number
  class?: HTMLAttributes['class']
  currentValue?: string
}>()
const emit = defineEmits(['update:spell'])

const selected = ref('')

onMounted(() => (selected.value = props.currentValue))
</script>

<template>
  <Popover>
    <PopoverTrigger
      :class="cn('group/trig w-full p-0', props.class)"
      @click.stop.prevent>
      <Button
        variant="secondary"
        class="
          hover:ring-b4 relative grid size-16 place-items-center overflow-hidden
          p-0 hover:ring
        "
        :class="{ 'shadow-sm drop-shadow-sm': selected !== '' }">
        <icon
          v-if="selected === ''"
          name="tabler:flame"
          alt="no summoner spell chosen"
          class="size-6.5 opacity-20" />

        <Img
          v-else
          :alt="selected"
          :src="`/img/spells/${selected}.webp`"
          class="size-16" />
      </Button>
    </PopoverTrigger>

    <PopPopoverContent
      class="size-fit"
      side="bottom"
      arrow-class=""
      :side-offset="5"
      align="center">
      <div class="grid grid-cols-3 place-content-evenly gap-3">
        <label
          v-for="ss in spells"
          :key="ss.name"
          as="label"
          :title="ss.name.toString()"
          :disabled="selected === ss.name"
          class="
            hover:ring-bc/60 size-16 cursor-pointer! rounded-lg
            shadow-sm transition-[colors,opacity] duration-400
            hover:ring-2 disabled:opacity-70 disabled:inset-shadow-sm
            disabled:grayscale
          ">
          <input
            id="spells"
            v-model="selected"
            type="radio"
            :value="ss.name"
            class="hidden"
            :disabled="selected === ss.name"
            @change="emit('update:spell', ss.name)" />

          <Img
            :src="`/img/spells/${ss.name}.webp`"
            :alt="ss.name.toString()"
            class="size-full rounded-lg" />
        </label>
      </div>
    </PopPopoverContent>
  </Popover>
</template>
