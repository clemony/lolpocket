<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
const { summoner } = storeToRefs(sSession())

const open = shallowRef<boolean>(false)
</script>

<template>
  <IconHeader>
    <template #icon>
      <SummonerIcon
        class="pointer-events-none size-20 rounded-full transition-all duration-500 ease-in-out group-open/icon:brightness-40 group-hover/icon:brightness-40"
        :summoner="summoner ?? undefined" />

      <icon
        class="pointer-events-none absolute z-2 size-6 text-nc! opacity-0 transition-all duration-500 ease-in-out group-open/icon:opacity-100 group-hover/icon:opacity-80"
        name="images" />
    </template>
    <!-- header name -->
    <template #title>
      <h1
        :class="
          cn(
            'overflow-y-visible font-serif text-[36px]/15 font-black! text-pc/94',
            { 'opacity-40': !summoner?.name },
          )
        "
        as="h1">
        {{ summoner?.name ?? "summoner" }}
      </h1>
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="flex items-center gap-4 px-0.5">
        <SummonerId :summoner="summoner ?? undefined" type="tag" />
        <SummonerId :summoner="summoner ?? undefined" type="region" />
        <SummonerId :summoner="summoner ?? undefined" type="level" />
      </div>
    </template>
  </IconHeader>
</template>
