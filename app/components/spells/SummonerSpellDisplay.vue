<script setup lang="ts">
const props = defineProps<{
  pocket?: Pocket
  isOpen?: boolean
}>()

const emit = defineEmits(['update:selected'])

const pocket = ref(props.pocket)

function update(event, i) {
  console.log(event)
  pocket.value.spells[i] = event
}

const imgArr = ['/img/spells/heal.webp', '/img/spells/ignite.webp', '/img/spells/barrier.webp', '/img/spells/ghost.webp', '/img/spells/exhaust.webp', '/img/spells/smite.webp', '/img/spells/flash.webp', '/img/spells/teleport.webp']
</script>

<template>
  <div class=" gap-2 flex h-auto items-center l  py-2 px-2  bg-b2 border-b3 shadow-sm">

      <Popover>
    <PopoverTrigger class="">
      <img
        v-if="!pocket.spells[0] || !pocket.spells[0].name || pocket.spells[0].name == 'empty' || pocket.spells[0].name == undefined"
        :src="getRandom(imgArr)"
        class=" rounded-full overflow-hidden grayscale opacity-30 color-mix-screen  transition-all duration-500"
      />

      <img
        v-else-if="pocket.spells[0]"
        :src="`/img/spells/${pocket.spells[0].name}.webp`"

        class=" rounded-full overflow-hidden grayscale-0 transition-all duration-500"
      />
    </PopoverTrigger>
    <SpellPicker
      :model="0"
      :pocket="pocket"
      :is-menu-open="isOpen"
      @update:model="update($event, 0)"
    />
      </Popover>

        <Popover>
    <PopoverTrigger class="">
      <img
        v-if="!pocket.spells[1] || !pocket.spells[1].name || pocket.spells[1].name == 'empty' || pocket.spells[1].name == undefined"
        :src="getRandom(imgArr)"
        class=" rounded-full overflow-hidden grayscale opacity-30 color-mix-screen  transition-all duration-500"
      />

      <img
        v-else-if="pocket.spells[1]"
        :src="`/img/spells/${pocket.spells[1].name}.webp`"

        class=" rounded-full overflow-hidden grayscale-0 transition-all duration-500"
      />
    </PopoverTrigger>
    <SpellPicker
      :model="1"
      :pocket="pocket"
      :is-menu-open="isOpen"
      @update:model="update($event, 1)"
    />
        </Popover>
  </div>
</template>

<style></style>
