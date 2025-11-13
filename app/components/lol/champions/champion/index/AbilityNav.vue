<script setup lang="ts">
const { champion } = defineProps<{
  champion: Champion;
}>();

const route = useRoute();

const abilityCount = computed(() => `grid-cols-${champion.abilities.length}`);
</script>

<template>
  <div class="fixed right-22 bottom-22 flex flex-col gap-6">
    <BtnLink
      v-for="ability in champion.abilities"
      :key="ability.name"
      v-tippy="{ content: ability.name, placement: 'left', theme: 'base' }"
      variant="neutral"
      as="btn"
      shape="circle"
      size="xl"
      :class="
        cn(
          `
          size-20! overflow-hidden border-0 p-0 shadow-sm shadow-black/10
          drop-shadow-sm drop-shadow-black/30
          *:pointer-events-none
        `,
          {
            'btn-active !bg-tint-b2/70': route.hash === `#${ability.key}`,
          },
        )
      "
      :to="{ path: route.path, hash: `#${ability.key}` }"
    >
      <Img :img="ability.icon" :alt="ability.name" class="size-full" />
      <!--       <span
        class="size-10 rounded-lg shadow-sm drop-shadow-sm overflow-hidden">
      </span>
      {{ ability.name }} -->
    </BtnLink>
  </div>
</template>
