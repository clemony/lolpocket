<script setup lang="ts">
const { class: className, summoner } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const state = inject<SummonerData>(SummonerKey)!
const roleStats = await useMatchRoles(
  state.summoner.puuid,
  computed(() => state.matches)
)

const roleModel = computed({
  get: () => state.filter.role,
  set: val => state.setFilter('role', val),
})
</script>

<template>
  <div class="w-full">
    <div class="flex items-center mb-2 -ml-1">
      <Button
        size="sm"
        variant="ghost"
        :class="{ 'pointer-events-none': ms().filter.role === 'ALL' }"
        class=" gap-2 font-medium rounded-lg px-2.5 place-self-center text-3"
        @click="state.clearFilters()">
        {{
          ms().filter.role !== "ALL"
            ? roleStats.find((r) => r.role === ms().filter.role).name
            : "Position"
        }}

        <icon
          v-if="ms().filter.role !== 'ALL'"
          name="x-sm"
          class="shrink-0 -mt-px" />
      </Button>
    </div>

    <div class="w-full h-15 justify-start overflow-hidden px-2">
      <transition-slide
        :offset="{ enter: [10, 0], leave: [-10, 0] }"
        group
        class="flex flex-wrap gap-5 relative w-full">
        <template
          v-for="role in roleStats"
          :key="role.role">
          <label
            v-if="ms().filter.role === 'ALL' || ms().filter.role === role.role"
            v-tippy="{
              content: `${role.name} - ${role.games} game${role.games > 1 ? 's' : ''}`,
            }"
            for="item-types"
            class="size-14 grid place-items-center"
            :class="
              cn({
                'bg-neutral border-neutral shadow-neutral/20 shadow-sm order-2  ':
                  role.role === ms().filter.role,
                'border-b3/80 btn  size-14  mr-0 btn-square': role.games,
              })
            ">
            <input
              v-model="ms().filter.role"
              class="peer hidden absolute"
              type="radio"
              :disabled="!role.games"
              :value="role.role"
              name="item-types" />

            <component
              :is="`i-roles-${role.role.toLowerCase().replace(' ', '-').replace('utility', 'support')}`"
              class="h-5 w-auto dst shrink-0 peer-checked:text-nc"
              :class="{ '!text-bc/80': role.name === 'ALL' }" />
          </label>
        </template>
      </transition-slide>
    </div>
  </div>
</template>

<style scoped></style>
