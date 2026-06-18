<script lang="ts" setup></script>

<template>
  <UTheme
    :props="{
      input: {
        size: 'lg',
        modelModifiers: { trim: true },
      },
      switch: {
        color: 'list',
      },
      card: {
        variant: 'ghost',
      },
      tooltip: {
        arrow: true,
        content: { side: 'left', sideOffset: 12 },
      },
      tabs: {
        variant: 'pill',
        size: 'lg',
        color: 'base',
      },
      badge: {
        variant: 'solid',
        color: 'transparent',
        ui: {
          base: 'pointer-events-none p-0',
          label: 'capitalize text-pc font-semibold text-sm align-baseline',
        },
      },
      selectMenu: {
        size: 'lg',
        variant: 'outline',
      },
      empty: {
        size: 'md',
        variant: 'outline',
      },
    }"
    :ui="{
      avatar: {
        root: 'bg-n2',
      },
      tooltip: {
        content: 'rounded-xl! bg-n2/90!',
        arrow:
          'fill-n2/90! group-data-[side=left]/tt:translate-y-px group-data-[side=left]/tt:scale-190!',
      },
      button: {
        base: 'disabled:bg-p3 disabled:shadow-none disabled:inset-ring-p4/40 disabled:drop-shadow-none disabled:fx-1!',
        label: 'group-disabled/btn:opacity-40',
        leadingIcon: 'group-disabled/btn:opacity-30',
      },
      input: {
        root: 'w-full **:[&_input]:select-all!',
        base: 'rounded-xl ring-0 inset-ring-p4/60',
      },

      tabs: {
        root: 'px-0',

        list: 'gap-2 rounded-4xl bg-n2 px-2 inset-shadow-sm inset-ring inset-shadow-p0/14 inset-ring-n5',

        trigger: 'h-full duration-0 active:text-pc',
        label: 'font-semibold group-active/trigger:text-pc',
        indicator: 'fx-depth! fx-noise rounded-2xl bg-p1! fx-1',
      },
      empty: {
        root: 'ring-none bg-transparent inset-ring inset-ring-p4/70',
        header: 'flex-row flex-wrap justify-center',
        avatar: '-ml-4 size-max translate-y-0.75 scale-110',
        title: 'w-max',
        description: 'w-full',
      },
      selectMenu: {
        content:
          'bg-p1/90 inset-ring inset-ring-p0 ring-offset-1 ring-offset-p4/50 backdrop-blur-md',
      },
    }">
    <slot />
  </UTheme>
</template>
