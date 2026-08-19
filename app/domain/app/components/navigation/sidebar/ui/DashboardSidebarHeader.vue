<script lang="ts" setup>
const emit = defineEmits(["update:sidebar"])

const { hotkeys } = storeToRefs(localStore())
console.log("🥸 - hotkeys:", hotkeys)
const query = shallowRef<string | undefined>("")
</script>

<template>
  <div
    ref="sidebar"
    class="flex flex-1 items-center justify-between gap-4 pl-px group-collapsed/sidebar:flex-col">
    <LpLogo
      :ui="{ base: 'min-w-10! group-collapsed/sidebar:justify-self-center' }" />

    <UInput
      v-model:model-value="query"
      leading-icon="i-lucide-search"
      label="Search"
      size="xl"
      placeholder="Search"
      variant="none"
      :ui="{
        root: 'group/input group-collapsed/sidebar:hidden',
        base: 'flex max-w-22 flex-1 rounded-5xl px-0 align-baseline text-md ring-0! inset-ring inset-ring-transparent transition-colors duration-300 group-hover/input:bg-p0/50 group-hover/input:opacity-100 placeholder:opacity-0 hover:inset-shadow-sm hover:inset-ring-p2 focus-visible:ring-1! focus-visible:ring-pc/60',
        leadingIcon:
          'left-0 ml-0 size-4 translate-x-0 align-icon **:stroke-[12%]! group-hover/btn:opacity-50!',
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
