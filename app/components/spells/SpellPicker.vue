<script setup lang="ts">
import { summonerSpells } from 'data/spells'

import { PopoverClose } from 'reka-ui'

const props = defineProps<{
  model?: number
  alignOffset?: number
  pocket?: pocket
  spell?: Spell
  class?: HTMLAttributes['class']
  selectedSpell?: Spell
}>()

const emit = defineEmits(['update:spell'])

const pocket = ref(props.pocket)

const selectedSpell = computed (() => {
  return props.selectedSpell
})

const imgArr = ['/img/spells/heal.webp', '/img/spells/ignite.webp', '/img/spells/barrier.webp', '/img/spells/ghost.webp', '/img/spells/exhaust.webp', '/img/spells/smite.webp', '/img/spells/flash.webp', '/img/spells/teleport.webp']
</script>

<template>
  <Popover>
    <PopoverTrigger class="" :class="cn('p-0 group/trig  btn shadow-sm inset-shadow-sm hover:ring  hover:ring-neutral/40 ', props.class)">
      <div class="overflow-hidden size-full">
        <Placeholder
          v-if="selectedSpell.name == null"
          :src="getRandom(imgArr)"
          class="size-full !shadow-none opacity-40 group-hover/trig:opacity-80 inset-shadow-xs bg-b2 border-b2">
          <i-tft-attach class="size-4.5 opacity-40" />
        </Placeholder>

        <img
          v-else
          :src="`/img/spells/${selectedSpell.name}.webp`"

          class="overflow-hidden" />
      </div>
    </PopoverTrigger>

    <CustomPopoverContent
      class=" !rounded-xl size-fit "
      side="bottom"
      :side-offset="5"
      align="center">
      <div class="gap-3 place-content-evenly grid grid-cols-3  ">
        <CustomPopoverArrow />
        <PopoverClose
          v-for="ss in summonerSpells"
          :key="ss.name"
          :disabled="selectedSpell == ss"
          class="disabled:grayscale transition-all duration-400 disabled:inset-shadow-sm disabled:opacity-70 disabled:scale-80 shadow-sm size-16 rounded-lg border border-b3/30 hover:border-neutral hover:ring-2 hover:ring-b3/60 !cursor-pointer ring-offset-1 ring-offset-neutral">
          <label class=" !cursor-pointer ">
            <input
              id="spells"
              type="radio"
              :value="ss"
              class="hidden"
              :disabled="selectedSpell == ss"
              @change="emit('update:spell', ss)" />
            <img
              :src="`/img/spells/${ss.name.toLowerCase()}.webp`"
              class="size-full rounded-lg" />
          </label>
        </PopoverClose>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>
