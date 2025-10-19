<script setup lang="ts">
import { motion } from 'motion-v'

definePageMeta({
  name: 'pocket-champions',
  title: 'champions',
  order: 1,
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const containerRef = ref<HTMLElement>()
const { height } = useElementSize(containerRef)
const baseHeight = ref<number | null>(null)

const searchQuery = ref<string>('')
const { results } = useSimpleSearch(
  ix().champions, // array or ref
  searchQuery
)
watchEffect(() => {
  if (!baseHeight.value && results.value.length === ix().champions.length) {
    baseHeight.value = height.value
  }
})
</script>

<template>
  <div class="inset-0 z-auto">
    <div class="w-full py-10 px-1 sticky z-2 bg-b1/98 backdrop-blur items-center  -top-56 ">
      <div class=" flex items-center">
        <h1 class="capitalize w-85">
          Champions
        </h1>
        <div class="flex gap-3 items-center grow ">
          <Input
            v-model="cs().filters.query"
            size="lg"
            aria-label="Search champions"
            placeholder="Search champions..."
            class=" border-b4/60 grow "
            type="text"
            @clear:input="cs().filters.query = ''">
            <icon
              name="search" />
          </Input>

          <BadgePositionSelect
            v-model:model-value="cs().filters.position"
            @update:select="e => cs().filters.position = e" />

          <ToggleGroup
            type="single"
            class="gap-0"
            as-child>
            <ButtonGroup>
              <ToggleGroupItem
                class="bg-b1"
                size="lg"
                value="az"
                variant="outline"
                shape="square">
                <icon
                  name="qlementine-icons:sort-alpha-asc-16"
                  class="size-5 " />
              </ToggleGroupItem>
              <ToggleGroupItem
                class="bg-b1"
                size="lg"
                value="za"
                variant="outline"
                shape="square">
                <icon
                  name="qlementine-icons:sort-alpha-desc-16"
                  class="size-5" />
              </ToggleGroupItem>
            </ButtonGroup>
          </ToggleGroup>
        </div>
      </div>
    </div>
    <div class="size-full flex gap-8  z-auto   mx-auto">
      <motion.div
        layout
        class="h-fit justify-between grid grid-flow-row auto-cols-auto p-1 grid-cols-[repeat(auto-fill,minmax(70px,1fr))] w-full inset-0 pb-44  gap-4">
        <AnimatePresence>
          <motion.div
            v-for="champion in cs().filtered.filter(r => !pocket.champions.includes(r.key))"
            :key="champion.id">
            <PocketChampion
              :align-offset="-9"
              :champion
              :pocket />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  </div>
</template>

<!--       <ChampionQuote
        v-once
        class="italic text-2 font-normal absolute top-6 right-16" /> -->
