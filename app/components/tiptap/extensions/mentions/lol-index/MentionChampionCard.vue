<script setup lang="ts">
import { championPositions } from '~~/shared/references'

const { id } = defineProps<{
  id: number
}>()

const item = ref<Champion>(null)

watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(`#shared/records/champions/${ix().champKeyById(id)}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
})

const position = computed(() => championPositions.find(p => p.name === String(item.value?.positions[0])))
</script>

<template>
  <div
    v-if="item"
    class="flex max-h-[304px] w-full max-w-[258px] flex-col justify-self-center overflow-hidden pt-4 pb-3 **:select-text">
    <div class="flex h-fit w-full gap-4 px-4 ">
      <!-- IMG -->

      <ChampionIcon
        v-if="item"
        :id="item.id"
        :alt="`${item.name} Image`"
        class="size-13" />

      <div class="text-4 flex  w-full flex-col">
        <div
          :style="{ '--position-color': position.color }"
          class=" flex w-full items-center justify-between  gap-1">
          <!-- NAME / LINK -->
          <h5 class="leading-4 font-semibold">
            {{ item.name }}
          </h5>

          <!--        <a
            v-if="item.name"
            :href="`/champions/${item.key}`" -->

          <a
            v-if="item.name"
            v-tippy="{ content: `Official LoL Wiki - ${item.name}`, theme: 'neutral', placement: 'top-end', offset: [12, 8] }"
            target="_blank"
            :href="getWikiLink(item.name)">
            <img
              src="/img/logos/wiki.webp"
              alt="wiki"
              class="size-5 shrink-0 rounded-sm" />
          </a>
          <!-- role -->
          <!--   <div
            class=" z-0 flex items-center gap-1 ">
            <RoleIcon
              :position="position.name"
              class="position-badge-content   !size-5 self-center" />
            <span class=" position-badge-content color-badge-content font-semibold contrast-125">
              {{ position.name }}
            </span>
          </div> -->
        </div>

        <span class="text-2 text-nc/60  grow font-normal italic ">
          {{ ix().getChampionTitle(item?.key) }}
        </span>
      </div>
    </div>

    <div class="relative    grid w-full auto-rows-auto overflow-y-auto px-4 pb-2">
      <!-- component OF -->

      <Separator
        :size="4"
        label="ABILITIES"
        placement="end"
        color="neutral" />
      <ChampionAbility
        v-for="ability, i in item.abilities"
        :key="i"
        :default-open="false"
        size="sm"
        color="neutral"
        :ability />
    </div>
  </div>
</template>

<style>
.position-badge-content {
  color: var(--position-color);
  * {
    color: var(--position-color);
  }
}
</style>