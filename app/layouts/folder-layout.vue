<script lang="ts" setup>
import { useFolders } from "~/domain/backpack/composables/useFolder"

const { routeFolder } = useFolders()
</script>

<template>
  <div class="size-full overflow-hidden">
    <UDashboardPanel
      resizable
      :ui="{
        root: 'size-full pt-10',
        body: 'z-0 mt-14.25 size-full overflow-y-auto rounded-4xl! border border-border bg-p0 px-0! shadow-sm shadow-black/8 drop-shadow-black/4'
      }">
      <template #header>
        <div
          class="absolute z-1 flex w-full shrink-0 items-center self-center pr-3 pl-1">
          <div
            class="flex -translate-y-4 flex-col items-start gap-1 pr-6 *:flex *:items-center *:gap-2 *:self-start">
            <ULink
              size="sm"
              :to="{ name: 'backpack' }"
              class="flex items-center">
              <span class="flex w-8 items-center justify-center">
                <Icon
                  name="i-arrow-left"
                  class="size-3.5 translate-x-6 opacity-0 duration-300 ease-spring **:stroke-[10%]! group-hover/link:translate-x-0 group-hover/link:opacity-100" />
              </span>
              <span
                class="inline-flex text-start leading-none font-semibold text-n4 group-hover/link:underline hover:text-pc">
                Backpack
              </span>
            </ULink>
            <div>
              <BackpackToggle
                size="sm"
                :ui="{ leadingIcon: '**:stroke-[10%]!' }" />
              <h1 class="w-fit truncate pr-6 text-4xl">
                {{ routeFolder.label }}
              </h1>
            </div>
          </div>
          <Grow />
          <BackpackNavTabs />
          <div class="flex w-max shrink-0 items-center gap-1">
            <BackpackView />
            <BackpackOptions />
          </div>
        </div>
      </template>
      <template #body>
        <slot />
      </template>
    </UDashboardPanel>
  </div>
</template>
