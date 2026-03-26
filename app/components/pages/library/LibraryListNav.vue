<script lang="ts" setup>
const nav = computed(() =>
  libraryNav.value.filter((l) => l.label !== useRoute().meta?.title)
)
</script>

<template>
  <div class="w-full items-center justify-between gap-2 pr-2">
    <div class="mb-2 text-sm font-medium opacity-60">Collections</div>
    <div class="w-full pl-1">
      <UButton
        v-for="(link, i) in nav"
        :key="i"
        variant="link"
        trailing-icon="i-link"
        :label="link.label"
        :icon="link.icon"
        :to="link.to"
        :ui="{
          leadingIcon: cn('size-4', link?.class),
          base: 'w-full',
          label: 'font-semibold underline-offset-2 group-hover/btn:underline',
          trailingIcon: 'size-3.5 opacity-50 group-hover/btn:opacity-100'
        }" />
    </div>
  </div>
</template>
