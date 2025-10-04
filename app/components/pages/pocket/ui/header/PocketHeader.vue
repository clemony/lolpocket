<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
</script>

<template>
  <IconHeader>
    <template #icon>
      <PocketIconSelect />
      <PocketPinButton
        :pocket
        class="absolute -bottom-2 -left-6" />
    </template>
    <!-- header name -->
    <template #title>
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="ghost"
            size="xl"
            class="w-fit pointer-events-auto ">
            <h1 class="text-10 tracking-tight text-nowrap">
              {{ pocket.name }}
            </h1>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sticky="always"
          side="bottom"
          :side-offset="0"
          position-strategy="absolute"
          class="p-0 shadow-none pointer-events-auto  drop-shadow-none w-min  min-w-[calc(var(--reka-popover-trigger-width)+70px)] -translate-y-[var(--reka-popover-trigger-height)] h-[var(--reka-popover-trigger-height)]">
          <Input
            v-model="pocket.name"
            size="header"
            class=" size-full **:font-bold field-sizing-content  **:tracking-tight"
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
    </template>

    <!-- header sub-text -->
  </IconHeader>
</template>

<style scoped>
</style>