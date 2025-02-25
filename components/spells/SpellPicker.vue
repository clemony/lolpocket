<script setup lang="ts">
import { PopoverAnchor, PopoverArrow, PopoverClose, PopoverPortal, PopoverRoot } from 'reka-ui'

import Spells from 'shared/data/spells.json'

const props = defineProps<{
  model: number
  alignOffset?: number
  pocket?: pocket
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:model'])

const spellData = ref<Spell[]>([])

const pocket = ref(props.pocket)

const spells = ref(pocket.value.spells)

const model = ref()

function onChange(e, spell) {
  model.value = spell
  emit('update:model', model.value)
}

watch(
  () => props.model,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
    model.value = newVal
  },
)

onMounted(async () => {
  model.value = props.model
  await Spells
  spellData.value = Spells
})

const imgArr = ['/img/spells/heal.webp', '/img/spells/ignite.webp', '/img/spells/barrier.webp', '/img/spells/ghost.webp', '/img/spells/exhaust.webp', '/img/spells/smite.webp', '/img/spells/flash.webp', '/img/spells/teleport.webp']
</script>

<template>
  <Popover>
    <PopoverTrigger class="" :class="cn('p-0   btn shadow-sm inset-shadow-sm', props.class)">
      <div class="overflow-hidden size-full">
        <img
          v-if="!pocket.spells[props.model] || !pocket.spells[props.model].name || pocket.spells[props.model].name == 'empty' || pocket.spells[props.model].name == undefined"
          :src="getRandom(imgArr)"
          class="  overflow-hidden grayscale opacity-30 color-mix-screen  transition-all duration-500"
        />

        <img
          v-else-if="pocket.spells[props.model]"
          :src="`/img/spells/${pocket.spells[props.model].name}.webp`"

          class="  overflow-hidden grayscale-0 transition-all duration-500"
        />
      </div>
    </PopoverTrigger>

    <PopoverContent
      class=" rounded-xl size-fit"
      side="bottom"
      align="start"
    >
      <PopoverArrow />
      <div class="gap-3 place-content-evenly grid grid-cols-3 bg-b1 backdrop-blur-md">
        <PopoverClose
          v-for="spell in spellData"
          :key="spell.name"
          :disabled="spells[0] == spell || spells[1] == spell"
          class="disabled:grayscale transition-all duration-400 disabled:inset-shadow-sm disabled:opacity-70 disabled:scale-80 shadow-sm size-16 rounded-lg border border-b3 hover:border-neutral/80"
        >
          <label>
            <input
              id="spells"
              v-model="model"
              type="radio"
              :value="spell"
              class="hidden"
              :disabled="pocket.spells[0] == spell || pocket.spells[1] == spell"
              @change="onChange($event, spell)"
            />
            <img
              :src="`/img/spells/${spell.name.toLowerCase()}.webp`"
              class="size-full rounded-lg"
            />
          </label>
        </PopoverClose>
      </div>
    </PopoverContent>
  </Popover>
</template>
