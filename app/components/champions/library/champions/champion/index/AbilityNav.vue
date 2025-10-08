<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion
}>()

const route = useRoute()

const abilityCount = computed (() => `grid-cols-${champion.abilities.length}`)
</script>

<template>
  <div class="flex flex-col fixed bottom-22 right-22 gap-6">
    <BtnLink
      v-for="ability in champion.abilities"
      :key="ability.name"
      v-tippy="{ content: ability.name, placement: 'left', theme: 'base' }"
      variant="neutral"
      as="btn"
      shape="circle"
      size="xl"
      :class="
        cn('p-0 overflow-hidden !size-20 border-0 *:pointer-events-none shadow-black/10 shadow-sm drop-shadow-sm drop-shadow-black/30', {
          'btn-active !bg-tint-b2/70': route.hash === `#${ability.key}`,
        })
      "
      :to="{ path: route.path, hash: `#${ability.key}` }">
      <Img
        :img="ability.icon"
        :alt="ability.name"
        class="size-full" />
      <!--       <span
        class="size-10 rounded-lg shadow-sm drop-shadow-sm overflow-hidden">
      </span>
      {{ ability.name }} -->
    </BtnLink>
  </div>
</template>