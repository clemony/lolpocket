<script setup lang="ts">
const { id } = defineProps<{
  id: string
}>()

const item = ref<Ability | null>(null)
watchEffect(async () => {
  if (!id) return

  try {
    const module = await import(`#shared/records/abilities/${id}.ts`)
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load ability for ${id}`, err)
    item.value = null
  }
})

const champ = computed(() => {
  const ckey = id.slice(0, -1)
  return champNameByKey(ckey)
})
</script>

<template>
  <div
    v-if="item"
    class="flex w-full flex-col pt-4 pb-3">
    <div class="grid h-fit w-full grid-cols-[36px_1fr] grid-rows-1 gap-4 px-4">
      <!-- IMG -->

      <Ability
        :id
        class="min-size-12 size-12 rounded-lg shadow-sm dss" />

      <div class="col-start-2 flex w-full flex-col text-lg">
        <div class="flex w-full justify-between gap-1">
          <!-- NAME / LINK -->
          <a
            class="hover:*:first:underline"
            :href="`/champions/${id.length - 1}`">
            <h3 class="text-xl! font-bold!">{{ item?.name }}</h3>
            <h5 class="leading-4 font-medium italic">
              {{ champ }} - {{ item?.key }}
            </h5>
          </a>

          <a
            v-if="champ"
            :title="`Official LoL Wiki - ${champ}`"
            target="_blank"
            :href="wikiLink(champ)">
            <img
              class="size-5 shrink-0 rounded-sm"
              src="/img/logos/wiki.webp"
              alt="wiki">
          </a>
        </div>
      </div>
    </div>
    <div class="w-full overflow-y-scroll">
      <Separator
        color="neutral"
        :size="3" />
      <!--  -->
      <div class="w-full px-4">
        <AbilityStats
          class="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 *:w-max *:justify-start *:text-start *:leading-none **:cursor-default **:select-none *:hover:underline"
          :ability="item" />
      </div>

      <Separator
        color="neutral"
        :size="3" />
      <div class="w-full space-y-3 px-4 pb-4 text-wrap">
        <AbilityDescription
          v-for="(effect, i) in item.effects"
          :key="i"
          class="space-y-3"
          size="sm"
          color="neutral"
          :effect="effect" />
      </div>
    </div>
  </div>
</template>
