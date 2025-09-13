<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion
}>()
const route = useRoute()
</script>

<template>
  <aside class="flex flex-col shrink-0 gap-10 scrollbar-hidden  py-22 w-94 overflow-y-auto sticky top-0">
    <!--     <div class="w-full">
      <p class="">
        {{ champion.fullName || champion.name }}
      </p>
    </div> -->
    <menu class="space-y-3">
      <h3 class="mb-4">
        Abilities
      </h3>
      <Blink
        v-for="ability in champion.abilities"
        :key="ability.name"
        as="li"
        size="lg"
        :class="cn('justify-start !gap-4', { 'btn-active': route.hash == `#${ability.key}` })"
        :to=" { path: route.path, hash: `#${ability.key}` }"
        variant="ghost">
        <span
          class="size-10 rounded-lg shadow-sm drop-shadow-sm overflow-hidden">
          <Img
            :img="ability.icon"
            :alt="ability.name" />
        </span>
        {{ ability.name }}
      </Blink>
    </menu>

    <Collapsible
      v-model:open="us().collapseStates.championInfo[0]"
      class="field-box ">
      <CollapsibleTrigger class="flex z-0 h-14 w-full px-4 items-center justify-between">
        <h3>Stats</h3>
        <CaretRotate />
      </CollapsibleTrigger>
      <ChampionStats
        :stats="champion.stats" />
    </Collapsible>

    <Collapsible
      v-model:open="us().collapseStates.championInfo[1]"
      class="field-box">
      <CollapsibleTrigger class="flex  h-14 w-full px-4  items-center justify-between">
        <h3>Bio</h3>

        <CaretRotate />
      </CollapsibleTrigger>
      <CollapsibleContent
        class="py-4 px-2 after:left-4"
        menu>
        <p class="text-pretty indent-2 leading-7 pl-2  ">
          {{ champion.lore }}
        </p>
      </CollapsibleContent>
    </Collapsible>
  </aside>
</template>