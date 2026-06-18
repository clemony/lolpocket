<script lang="ts" setup></script>

<template>
  <UPage
    :ui="{
      root: 'relative z-auto mb-44 flex w-full flex-row pt-8 pl-23',
      left: 'lg:col-span-3',
      right: 'hidden',
      center: 'overflow-visible! lg:col-span-7 lg:col-start-4',
    }">
    <template #left>
      <UPageAside
        :ui="{
          root: 'inset-y-0 top-0 bottom-0 z-auto scrollbar-none',
          container:
            'flex w-full origin-right scrollbar-none flex-col items-center gap-y-6 *:w-full',
        }">
        hkhkh
        <slot name="left" />
      </UPageAside>
    </template>

    <UPageBody class="z-auto">
      <slot />
    </UPageBody>
  </UPage>
</template>
