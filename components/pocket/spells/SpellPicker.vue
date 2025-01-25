<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { PopoverClose } from 'radix-vue'

const props = defineProps<{
  model: Spell | undefined
  alignOffset?: number
  pocket?: pocket
}>()

const emit = defineEmits(['update:model'])

const ts = useTempStore()

const pocket = ref(props.pocket)

const spells = ref(pocket.value.spells)
const { state, asyncStatus } = useQuery({
  key: ['spells'],
  query: () => fetch('/api/spells.json').then(res => res.json()),
})

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

onMounted(() => {
  model.value = props.model
})
</script>

<template>
  <div v-if="state.data">
    <Popover>
      <PopoverTrigger class="p-0 w-full">
        <Button
          v-if="!model || model.name == ''"
          variant="ghost"
          size="md"
          class="flex w-full gap-3.5 !tracking-normal !font-normal text-3 items-center justify-start pl-2 pr-3 mt-1"
        >
          <icon
            name="add-sm"
            class="size-8 shadow-sm border p-0.5 border-b3 rounded-[5px] bg-neutral text-nc/90"
          />
          Spell
        </Button>

        <Button
          v-else-if="model"
          variant="ghost"
          size="md"
          class="flex gap-4 items-center w-full justify-start pl-2.5 pr-3 mt-1"
        >
          <img
            :src="`/img/spells/${model.name.toLowerCase()}.webp`"
            class="size-7 rounded-md"
          />
          {{ model.name }}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        class="overflow-hidden rounded-xl size-fit"
        side="bottom"
      >
        <div class="gap-3 place-content-evenly grid grid-cols-3 bg-b1 backdrop-blur-md">
          <PopoverClose
            v-for="spell in state.data"
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
  </div>
</template>
