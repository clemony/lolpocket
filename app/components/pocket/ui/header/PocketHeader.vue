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
          variant="ghost"
          hover="base"
          size="12"
          class="pointer-events-auto w-max min-w-54 rounded-xl">
          <h1 class="text-10 !font-bold tracking-tight text-nowrap dst">
            {{ pocket.name }}
          </h1>
        </PopoverTrigger>
        <LazyPopoverContent
          align="start"
          sticky="always"
          side="bottom"
          :side-offset="0"
          position-strategy="absolute"
          class="
            pointer-events-auto h-[var(--reka-popover-trigger-height)] w-min
            min-w-[calc(var(--reka-popover-trigger-width)+70px)]
            -translate-y-[var(--reka-popover-trigger-height)] p-0 shadow-none
            drop-shadow-none
          ">
          <Input
            v-model="pocket.name"
            size="header"
            class="
              field-sizing-content size-full
              **:font-bold **:tracking-tight
            "
            @clear:input="pocket.name = ''">
            <template #2>
              <Button
                title="No brain? Meet button."
                variant="ghost"
                class="btn-square size-7"
                @click="pocket.name = generateName()">
                <icon
                  name="shuffle"
                  class="size-3.5" />
              </Button>
            </template>
          </Input>
        </LazyPopoverContent>
      </Popover>
      <PocketPinButton
        :pocket
        size="sq-8"
        class="" />
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="pointer-events-auto flex items-center gap-4 pl-4">
        <PocketLikes :pocket />
      </div>
    </template>
  </IconHeader>
</template>

<style scoped>
</style>