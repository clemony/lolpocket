<script lang="ts" setup>
import { backpackNav, backpackSubNav, toolsNav } from "../../../../utils/routes"

const backpack = backpackNav as NavButtonProps[]
const backpackSub = backpackSubNav as NavButtonProps[]
</script>

<template>
  <ul class="menu w-60 gap-1 overflow-hidden p-1">
    <li v-for="item in backpack" :key="item.label" class="gap-1">
      <UButton v-bind="item" :to="item?.to">
        <template v-if="item?.kbds" #trailing>
          <UKbd
            v-for="k in ['meta', 'P']"
            :key="k"
            square
            size="sm"
            :value="k"
            class="relative size-4.5! min-w-4.5! shrink-0 place-items-center p-0!" />
        </template>
      </UButton>

      <ul v-if="item?.label === 'Pockets'" class="gap-1">
        <li v-for="btn in backpackSub" :key="btn.label">
          <UButton v-bind="btn" :to="btn?.to" />
        </li>
      </ul>
    </li>
    <li class="pointer-events-none -mb-2 justify-start text-start text-xs">
      <span class="label">Tools</span>
    </li>
    <li v-for="item in toolsNav" :key="item.label">
      <UButton
        :ui="{
          base: 'justify-start text-start h-18!',
        }"
        variant="highlight">
        <UUser
          :name="item.label"
          :ui="{
            description: 'font-normal',
            name: 'text-sm',
            avatar:
              'shadow-none drop-shadow-none bg-transparent size-4 self-start translate-y-1',
          }"
          :description="item.description"
          :avatar="{
            icon: item.icon,
            ui: {
              root: '**:text-pc! shadow-none drop-shadow-none ',
              icon: cn('size-4', item.ui?.leadingIcon),
            },
          }" />
      </UButton>
    </li>
  </ul>
</template>
