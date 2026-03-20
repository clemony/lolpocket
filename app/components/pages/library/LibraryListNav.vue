<script lang="ts" setup>
const nav = computed(() =>
  libraryNav.value.filter((l) => l.label !== useRoute().meta?.title)
)
</script>

<template>
  <div class="w-full items-center justify-between gap-2 pr-2 pl-1">
    <h6 class="mb-2.5 text-sm opacity-80">Other References</h6>
    <UButton
      v-for="(link, i) in nav"
      :key="i"
      variant="link"
      :label="link.label"
      :icon="link.icon"
      :to="link.to"
      :ui="{
        leadingIcon: cn('size-4', link?.class),
        base: 'w-full',
        label: 'grow-0 font-semibold'
      }">
      <span class="underline-offset-2 group-hover/btn:underline">
        {{ link.label }}</span
      >
      <Icon
        name="i-link"
        class="size-3.5 opacity-50 group-hover/btn:opacity-100" />
    </UButton>
  </div>
</template>
