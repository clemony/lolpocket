<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const route = useRoute()
</script>

<template>
  <div>
    <NuxtLink :to="`/pocket/${pocket.key}/complete`">
      <SidebarButton :class="{ 'btn-active [&_span]:border-b1 [&_span]:inset-shadow-black/16 [&_span]:bg-b1/60  border-r-b2': route.name == 'complete' }">
        <slot />
        <RightbarIconWrapper>
          <icon
            name="infinity"
            class="h-4.5 w-auto dst shrink-0 peer-checked:text-nc" />
        </RightbarIconWrapper>
        Summary
        <Grow />
      </SidebarButton>
    </NuxtLink>
  </div>
</template>