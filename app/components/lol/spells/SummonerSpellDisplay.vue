<script setup lang="ts">
const props = defineProps<{
  pocket?: Pocket
  isOpen?: boolean
}>()

const emit = defineEmits(["update:selected"])

const pocket = toRef(props, "pocket")
const primarySet = computed(() => pocket.value?.spells?.[0])
const spellIds = computed(() => [
  primarySet.value?.d ?? null,
  primarySet.value?.f ?? null
])

function update(event: number, i: number) {
  if (!primarySet.value) return
  if (i === 0) primarySet.value.d = event
  if (i === 1) primarySet.value.f = event
}

const imgArr = [
  "/img/spell/heal.webp",
  "/img/spell/ignite.webp",
  "/img/spell/barrier.webp",
  "/img/spell/ghost.webp",
  "/img/spell/exhaust.webp",
  "/img/spell/smite.webp",
  "/img/spell/flash.webp",
  "/img/spell/teleport.webp"
]
</script>

<template>
  <div class="l flex h-auto items-center gap-2 border-p3 bg-p2 p-2 shadow-sm">
    <UPopover>
      <UButton class="">
        <!--       <img
        v-if="!pocket.spells[0] || !pocket.spells[0].name || pocket.spells[0].name==='empty' || pocket.spells[0].name===undefined"
        :src="getRandom(imgArr)"
        class=" rounded-full overflow-hidden grayscale opacity-30 color-mix-screen  transition-all duration-500"
      />

      <img
        v-else-if="pocket.spells[0]"
        :src="`/img/spell/pocket/${pocket.spells[0].name}.webp`"
 -->
        class=" rounded-full overflow-hidden grayscale-0 transition-all
        duration-500" />
      </UButton>

      <SpellPicker
        :current-value="spellIds[0] ?? undefined"
        @update:spell="update($event, 0)" />
    </UPopover>

    <UPopover>
      <UButton class="">
        <!--  <img
        v-if="!pocket.spells[1] || !pocket.spells[1].name || pocket.spells[1].name==='empty' || pocket.spells[1].name===undefined"
        :src="getRandom(imgArr)"
        class=" rounded-full overflow-hidden grayscale opacity-30 color-mix-screen  transition-all duration-500"
      />

      <img
        v-else-if="pocket.spells[1]"
        :src="`/img/spell/pocket/${pocket.spells[1].name}.webp`"

        class=" rounded-full overflow-hidden grayscale-0 transition-all duration-500"
      /> -->
      </UButton>

      <SpellPicker
        :current-value="spellIds[1] ?? undefined"
        @update:spell="update($event, 1)" />
    </UPopover>
  </div>
</template>
