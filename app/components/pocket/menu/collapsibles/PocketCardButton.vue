<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const route = useRoute()
</script>

<template>
  <div>
    <NuxtLink :to="`/pocket/${pocket.key}/card`">
      <NavBtn :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'card' }">
        <slot />
        <span>
          <icon
            name="mingcute:layer-fill"
            class="h-6 opacity-60 w-auto dst shrink-0 peer-checked:text-nc" />
        </span>
        Card
      </NavBtn>
    </NuxtLink>
  </div>
</template>