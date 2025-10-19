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
      :class="cn('p-0 group/trig w-full ', props.class)"
      @click.stop.prevent>
      <Button
        variant="secondary"
        class="overflow-hidden relative size-16 p-0 hover:ring grid place-items-center hover:ring-b4"
        :class="{ ' shadow-sm drop-shadow-sm': selected !== '' }">
        <icon
          v-if="selected === ''"
          name="tabler:flame"
          alt="no summoner spell chosen"
          class="size-6.5 opacity-20" />

        <Img
          v-else
          :alt="selected"
          :img="`/img/spells/${selected}.webp`"
          class="size-16" />
      </Button>
    </PopoverTrigger>

    <PopPopoverContent
      class="size-fit"
      side="bottom"
      arrow-class=""
      :side-offset="5"
      align="center">
      <div class="gap-3 place-content-evenly grid grid-cols-3">
        <label
          v-for="ss in ix().spells"
          :key="ss.name"
          as="label"
          :title="ss.name.toString()"
          :disabled="selected === ss.name"
          class="disabled:grayscale transition-[colors,opacity] duration-400 disabled:inset-shadow-sm disabled:opacity-70 shadow-sm size-16 rounded-lg hover:ring-2 hover:ring-bc/60 !cursor-pointer">
          <input
            id="spells"
            v-model="selected"
            type="radio"
            :value="ss.name"
            class="hidden"
            :disabled="selected === ss.name"
            @change="emit('update:spell', ss.name)" />

          <Img
            :img="`/img/spells/${ss.name}.webp`"
            :alt="ss.name.toString()"
            class="size-full rounded-lg" />
        </label>
      </div>
    </PopPopoverContent>
  </Popover>
</template>
