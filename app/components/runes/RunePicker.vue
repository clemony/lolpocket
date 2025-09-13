<script setup lang="ts">
const { set, path, runes, limit } = defineProps<{
  set: number[]
  runes: RunePath
  path: string | undefined
  limit?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:runes', currentSet: number[]): void
}>()

const currentRunes = ref<number[]>([])

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

function openInfo(rune: number) {}
</script>

<template>
  <div
    class="items-center field-box justify-center gap-y-16 flex flex-col relative  w-full rounded-xl transition-all duration-500 **:select-none pb-16 pt-12">
    <template v-if="runes">
      <div
        v-for="(slot, i) in runes.slots.filter(r => r.tier != 0)"
        :key="i"
        class="cursor-pointer flex h-16 justify-evenly w-full gap-3 ">
        <tippy
          v-for="rune in slot.runes"
          :key="rune.id"

          theme="basic"
          :arrow="false"
          placement="bottom"
          :interactive="true"

          class="size-fit rounded-full items-center justify-stretch rune-hover ">
          <Rune
            :id="rune.id"
            :class="cn('grayscale  cursor-pointer opacity-75 ', {
              'opacity-100 scale-110 grayscale-0 opacity-94': currentSet.includes(rune.id) })">
            <input
              v-model="currentSet[i]"
              :value="rune.id"
              type="radio"
              :name="`tier-${i}`"
              class="peer hidden"
              @change="handleChange(i, rune.id)" />
          </Rune>

          <template #content>
            <Button
              variant="link"
              size="xs"
              class="flex items-center"
              @click="openInfo(rune.id)">
              {{ rune.name }}
              <span class="size-4 grid place-items-center relative">
                <icon
                  name="streamline:information-circle"
                  class="size-4.5 absolute mb-0.75 shrink-0" />
              </span>
            </Button>
          </template>
        </tippy>
      </div>
    </template>
    <div
      v-else
      class="size-full grid grid-cols-3 gap-y-14">
      <Placeholder
        v-for="i in 9"
        :key="i"
        class="size-18 rounded-full place-self-center" />
    </div>
  </div>
</template>