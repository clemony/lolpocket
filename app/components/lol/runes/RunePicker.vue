<script setup lang="ts">
const { limit, path, runes, set } = defineProps<{
  set: number[]
  runes: Path | null
  path: string | undefined
  limit?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:runes', currentSet: number[]): void
}>()

const currentRunes = ref<number[]>([])
const slots = computed(() =>
  (runes?.slots ?? []).filter((r: { tier?: number }) => r.tier !== 0)
)

const currentSet = computed(() => [
  currentRunes.value[0],
  currentRunes.value[1],
  currentRunes.value[2],
])

function handleChange(slotTier: number, selectedKey: number) {
  currentRunes.value[slotTier] = selectedKey
  emit('update:runes', currentRunes.value)
}

onMounted(() => {
  currentRunes.value = set ?? [0, 0, 0]
})
// todo fix
function openInfo(rune: number) {}
</script>

<template>
  <div
    class="field-box relative flex w-full flex-col items-center justify-center gap-y-16 rounded-xl pt-12 pb-16 transition-all duration-500 **:select-none">
    <template v-if="runes">
      <div
        v-for="(slot, i) in slots"
        :key="i"
        class="flex h-16 w-full cursor-pointer justify-evenly gap-3">
        <Rune
          v-for="rune in slot.runes ?? []"
          :id="rune.id"
          :key="rune.id"
          :class="
            cn('cursor-pointer opacity-75 grayscale', {
              'scale-110 opacity-94 grayscale-0':
                currentSet.includes(rune.id),
            })
          ">
          <input
            :checked="currentRunes[i] === Number(rune.id)"
            class="peer hidden"
            :value="Number(rune.id)"
            type="radio"
            :name="`tier-${i}`"
            @change="handleChange(Number(i), Number(rune.id))">
        </Rune>
      </div>
    </template>
    <div
      v-else
      class="grid size-full grid-cols-3 gap-y-14">
      <Placeholder
        v-for="i in 9"
        :key="i"
        class="size-18 place-self-center rounded-full" />
    </div>
  </div>
</template>
