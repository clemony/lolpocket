<script lang="ts" setup>
const emit = defineEmits(["update:sidebar"])

const { hotkeys } = storeToRefs(localStore())
const query = shallowRef<string | undefined>("")
</script>

<template>
  <div
    ref="sidebar"
    class="flex flex-1 items-center gap-4 pl-px group-collapsed/sidebar:flex-col">
    <LpLogo
      :ui="{ base: 'min-w-10! group-collapsed/sidebar:justify-self-center' }" />

    <UInput
      v-model:model-value="query"
      icon="i-search"
      label="Search"
      size="xl"
      placeholder="Search"
      variant="none"
      :ui="{
        root: 'w-full group-collapsed/sidebar:hidden',
        base: 'flex flex-1 rounded-5xl bg-p0/50 px-0 align-baseline text-md ring-0! inset-shadow-sm inset-ring inset-ring-p2 transition-colors duration-300 placeholder:opacity-0 focus-visible:ring-1! focus-visible:ring-pc/60 @min-[190px]:placeholder:opacity-100',
        leadingIcon:
          'left-0 ml-0 size-5 translate-x-0 align-icon opacity-60 group-hover/btn:opacity-50!',
      }"
      @blur="!query && emit('update:sidebar', 'menu')"
      @focus="emit('update:sidebar', 'search')">
      <template #trailing>
        <KbdClear :kbds="hotkeys?.search" size="md" :model-value="query" />
      </template>
    </UInput>
    <!--   <UButton
      variant="ghost"
      icon="i-search"
      :ui="{
        base: 'absolute hidden size-13! shrink-0 rounded-3xl shadow-none',
        leadingIcon: cn('size-5'),
      }"></UButton>-->
  </div>
</template>
