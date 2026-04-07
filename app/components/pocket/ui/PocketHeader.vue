<script lang="ts" setup>
import { generateName } from "~/domain/pocket/generateStrings"

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
).value
</script>

<template>
  <IconHeader v-if="pocket">
    <template #icon>
      <PocketIconSelect :pocket="pocket" />
    </template>
    <!-- header name -->
    <template #title>
      <UPopover>
        <UButton
          class="pointer-events-auto w-max min-w-54 rounded-xl"
          variant="ghost"
          hover="base"
          size="lg">
          <h1
            class="text-2xs font-bold! tracking-tight text-nowrap drop-shadow-2xs">
            {{ pocket.name }}
          </h1>
        </UButton>
        <LazyPopoverContent
          class="pointer-events-auto h-(--reka-popover-trigger-height) w-min min-w-[calc(var(--reka-popover-trigger-width)+70px)] -translate-y-(--reka-popover-trigger-height) p-0 shadow-none drop-shadow-none"
          align="start"
          sticky="always"
          side="bottom"
          :side-offset="0"
          position-strategy="absolute">
          <UInput
            v-model="pocket.name"
            class="field-sizing-content size-full **:font-bold **:tracking-tight"
            size="xl"
            @clear-input="pocket.name = ''">
            <template #trailing>
              <UButton
                class="btn-square size-7"
                title="No brain? Meet button."
                variant="ghost"
                @click="pocket.name = generateName()">
                <icon class="size-3.5" name="shuffle" />
              </UButton>
            </template>
          </UInput>
        </LazyPopoverContent>
      </UPopover>
      <PocketPinButton class="" :pocket="pocket" square size="sm" />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="pointer-events-auto flex items-center gap-4 pl-4">
        <PocketLikes :pocket="pocket" />
      </div>
    </template>
  </IconHeader>
</template>
