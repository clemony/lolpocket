<script lang="ts" setup>
const route = useRoute()
const { library } = useApp().routes
</script>

<template>
  <div class="w-full py-1.5">
    <h6 class="mb-3 text-pc">Library</h6>
    <div class="grid w-full grid-cols-4 gap-2">
      <UButton
        v-for="(link, i) in library"
        :key="i"
        variant="outline"
        :label="link.label"
        :active="link.to === route.path"
        active-variant="solid"
        active-color="neutral"
        :icon="link.icon"
        :to="link.to"
        :ui="{
          leadingIcon: cn(
            'size-5!',
            link.label === 'Spells'
              ? '**:stroke-[1.5] opacity-90 scale-94'
              : link.label === 'Runes'
                ? '**:stroke-[0.3]!'
                : '',
            route.path === link.to ? '**:text-nc!' : ''
          ),
          base: 'flex w-full items-center justify-center gap-2',
          label: 'grow-0 font-semibold'
        }" />
    </div>
  </div>
</template>
