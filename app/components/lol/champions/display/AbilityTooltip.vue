<script setup lang="ts">
const { id, ability } = defineProps<{
  id: number
  ability: string
}>()
console.log('🥸 - id:', id)

const item = ref<Ability>(null)
const loading = shallowRef<boolean>(false)
watchEffect(async () => {
  if (!id)
    return

  try {
    const module = await import(
      `#shared/records/abilities/${champKeyById(id)}${ability}.ts`
    )
    item.value = module.default || null
  }
  catch (err) {
    console.error(`Failed to load champion for ${id}`, err)
    item.value = null
  }
  loading.value = false
})

onMounted (() => {
  loading.value = true
})
</script>

<template>
  <div
    v-if="item"
    class="
      flex max-h-[304px] w-[258px] flex-col justify-self-center overflow-hidden
      pt-4 pb-3 **:select-text
    ">
    <div class="flex h-fit w-full gap-4 px-4">
      <!-- IMG -->

      <Img
        alt="icon"
        :img="item?.icon"
        class="size-12 rounded-lg shadow-sm dss" />

      <div class="flex w-full flex-col text-4">
        <div
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
            v-if="id"
            v-tippy="{
              content: `Official LoL Wiki - ${champNameById(id)}`,
              theme: 'neutral',
              placement: 'top-end',
              offset: [12, 8],
            }"
            target="_blank"
            :href="getWikiLink(champNameById(id))">
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

        <span class="grow text-2 font-normal text-nc/60 italic">
          {{ championToTitle[item?.key] }}
        </span>
      </div>
    </div>
  </div>
</template>
