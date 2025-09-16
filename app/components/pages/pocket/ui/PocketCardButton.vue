<script lang="ts" setup>
const { pocket } = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
</script>

<template>
  <div v-if="pocket">
    <!--     <NuxtLink :to="`/pocket/${pocket.key}/card`">
      <Btn :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'card' }">
        <slot />

        <span>
          <icon
            name="mingcute:layer-fill"
            class="h-6 opacity-60 w-auto dst shrink-0 peer-checked:text-nc" />
        </span>

        <icon name="vaadin:health-card" />
        Card
      </Btn>
    </NuxtLink> -->
  </div>
</template>
