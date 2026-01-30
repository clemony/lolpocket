<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
</script>

<template>
  <IconHeader>
    <template #icon>
      <PocketIconSelect :pocket />
    </template>
    <!-- header name -->
    <template #title>
      <Popover>
        <PopoverTrigger
          class="pointer-events-auto w-max min-w-54 rounded-xl"
          variant="ghost"
          hover="base"
          size="12"
        >
          <h1 class="text-xxs dst font-bold! tracking-tight text-nowrap">
            {{ pocket.name }}
          </h1>
        </PopoverTrigger>
        <LazyPopoverContent
          class="pointer-events-auto h-(--reka-popover-trigger-height) w-min min-w-[calc(var(--reka-popover-trigger-width)+70px)] -translate-y-(--reka-popover-trigger-height) p-0 shadow-none drop-shadow-none"
          align="start"
          sticky="always"
          side="bottom"
          :side-offset="0"
          position-strategy="absolute"
        >
          <Input
            v-model="pocket.name"
            class="field-sizing-content size-full **:font-bold **:tracking-tight"
            size="header"
            @clear-input="pocket.name = ''"
          >
            <template #2>
              <Button
                class="btn-square size-7"
                title="No brain? Meet button."
                variant="ghost"
                @click="pocket.name = generateName()"
              >
                <icon class="size-3.5" name="shuffle" />
              </Button>
            </template>
          </Input>
        </LazyPopoverContent>
      </Popover>
      <PocketPinButton class="" :pocket size="sq-8" />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="pointer-events-auto flex items-center gap-4 pl-4">
        <PocketLikes :pocket />
      </div>
    </template>
  </IconHeader>
</template>

<style scoped></style>
