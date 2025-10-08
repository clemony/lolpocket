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
        <PopoverTrigger as-child>
          <Button
            variant="ghost"
            size="lg"
            class="w-fit pointer-events-auto rounded-xl ">
            <h1 class="text-10 tracking-tight text-nowrap">
              {{ pocket.name }}
            </h1>
          </Button>
        </PopoverTrigger>
        <LazyPopoverContent
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
        </LazyPopoverContent>
      </Popover>
    </template>

    <!-- header sub-text -->

    <template #subheader>
      <div class="flex gap-4 items-center pointer-events-auto pl-4">
        <tippy
          theme="default"
          placement="bottom-start">
          <IconSwitch
            v-model:model-value="pocket.public"
            class="translate-y-0.25 !h-6"
            :items="[{ icon: 'lock', class: 'size-3.5' }, { icon: 'wifi', class: 'mt-px' }]"
            @update:model-value="e => pocket.public = e" />

          <template #content>
            {{ pocket.public ? 'pocket is public' : 'pocket set private' }}
          </template>
        </tippy>

        <PocketLikes :pocket />

        <PocketPinButton
          :pocket
          size="xs"
          class="" />
      </div>
    </template>
  </IconHeader>
</template>

<style scoped>
</style>