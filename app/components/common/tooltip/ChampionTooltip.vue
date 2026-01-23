<script setup lang="ts">
const { id } = defineProps<{
  id: number
}>()

const item = ref<Champion>(null)

watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(
      `#shared/records/champions/${ix().champKeyById(id)}.ts`
    )
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})

const position = computed(() =>
  championPositions.find(p => p.name === String(item.value?.positions[0])),
)
</script>

<template>
  <div
    v-if="item"
    class="flex w-full flex-col justify-self-center pt-4 pb-3">
    <div class="flex h-fit w-full gap-4 px-4">
      <!-- IMG -->

      <ChampionIcon
        v-if="item"
        :id="item.id"
        :alt="`${item.name} Image`"
        class="size-13" />

      <div class="flex w-full flex-col text-lg">
        <div
          :style="{ '--position-color': position.color }"
          class="flex w-full items-center justify-between gap-1">
          <!-- NAME / LINK -->
          <a
            v-if="item.name"
            :href="`/champions/${item.key}`">
            <h5
              class="leading-4 font-semibold">
              {{ item.name }}
            </h5>
          </a>

          <a
            v-if="item.name"
            :title="`Official LoL Wiki - ${item.name}`"

            target="_blank"
            :href="wikiLink(item.name)">
            <img
              src="/img/logos/wiki.webp"
              alt="wiki"
              class="size-5 shrink-0 rounded-sm" />
          </a>
        </div>

        <span class="text-nc/60 grow text-sm font-normal italic">
          {{ championToTitle[item?.key] }}
        </span>
      </div>
    </div>

    <div class="relative grid w-full auto-rows-auto overflow-y-auto px-4 pb-2">
      <!-- component OF -->

      <Separator
        :size="4"
        label="ABILITIES"
        placement="end"
        color="neutral" />
    </div>
  </div>
</template>
