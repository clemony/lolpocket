<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
</script>

<template>
  <div>
    <NuxtLink :to="`/pocket/${pocket.key}/card`">
      <RightbarButton :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'card' }">
        <slot />
        <RightbarIconWrapper>
          <icon
            name="mingcute:layer-fill"
            class="h-6 opacity-60 w-auto dst shrink-0 peer-checked:text-nc" />
        </RightbarIconWrapper>
        Card
      </RightbarButton>
    </NuxtLink>
  </div>
</template>