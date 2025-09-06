<script lang="ts" setup>
import { PopoverAnchor } from 'reka-ui'

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value
</script>

<template>
  <header class="items-center flex gap-2  w-full">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="ghost"
          size="xl"
          class="w-fit">
          <h1 class="text-10 tracking-tight hover:!bg-b3">
            {{ pocket.name }}
          </h1>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sticky="always"
        position-strategy="absolute"
        class="p-0 shadow-none drop-shadow-none w-min translate-x-[34px]  min-w-[calc(var(--reka-popover-trigger-width)+70px)] -translate-y-[var(--reka-popover-trigger-height)] h-[var(--reka-popover-trigger-height)]">
        <Input
          v-model="pocket.name"
          class="size-full **:font-bold field-sizing-content  **:text-10 **:tracking-tight"
          @clear:input="pocket.name = ''">
          <template #2>
            <Button
              title="No brain? Meet button."
              variant="ghost"
              class="size-7 btn-square"
              @click="pocket.name = generateName()">
              <icon
                name="shuffle"
                class="size-3.5" />
            </Button>
          </template>
        </Input>
      </PopoverContent>
    </Popover>
  </header>
</template>