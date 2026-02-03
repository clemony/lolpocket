<script setup lang="ts">
const { limit, path, runes, set } = defineProps<{
  set: number[]
  runes: any // Path
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
// @todo fix
function openInfo(rune: number) {}
</script>

<template>
  <div
    class="field-box relative flex w-full flex-col items-center justify-center gap-y-16 rounded-xl pt-12 pb-16 transition-all duration-500 **:select-none"
  >
    <template v-if="runes">
      <div
        v-for="(slot, i) in runes.slots.filter((r) => r.tier !== 0)"
        :key="i"
        class="flex h-16 w-full cursor-pointer justify-evenly gap-3"
      >
        v-for="rune in slot"
        :key="rune.id"
        class="rune-hover size-fit items-center justify-stretch rounded-full"
        theme="basic"
        :arrow="false"
        placement="bottom"
        :interactive="true"
        >

        <!--  <Rune
          :id="rune.id"
          :class="
            cn('cursor-pointer opacity-75 grayscale', {
              'scale-110 opacity-94 grayscale-0':
                currentSet.includes(rune.id),
            })
          "
        >      <input
              v-model="currentSet[i]"
              class="peer hidden"
              :value="rune.id"
              type="radio"
              :name="`tier-${i}`"
              @change="handleChange(i, rune.id)"
            >
        </Rune>

        <template #content>
          <Button
            class="flex items-center"
            variant="link"
            size="sm"
            @click="openInfo(rune.id)"
          >
            {{ rune.name }}
            <span class="relative grid size-4 place-items-center">
              <icon
                class="absolute mb-0.75 size-4.5 shrink-0"
                name="streamline:information-circle"
              />
            </span>
          </Button>
        </template>
      </div> -->
      </div>
    </template>
    <div v-else class="grid size-full grid-cols-3 gap-y-14">
      <Placeholder
        v-for="i in 9"
        :key="i"
        class="size-18 place-self-center rounded-full"
      />
    </div>
  </div>
</template>
