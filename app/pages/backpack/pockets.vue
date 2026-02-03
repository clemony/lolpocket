<script lang="ts" setup>
definePageMeta({
  title: 'Pockets',
  icon: 'lucide:folder',
  listClass: ' size-4.75',
  order: 1,
  path: '/backpack/pockets',
})

const selected = ref<Pocket>(null)
</script>

<template>
  <div class="">
    <BoxPage>
      <template #center>
        <BoxPanelCenter title="Pockets">
          <template #tabs>
            <ButtonGroup>
              <Button
                class="ml-auto pl-2.5 font-normal"
                color="neutral"
                @click="addPocket()">
                <icon name="add" />
                add pocket
              </Button>
              <ButtonGroupSeparator class="" />
              <Popover>
                <PopoverTrigger
                  square
                  color="neutral">
                  <Icon
                    class="size-4"
                    name="down" />
                </PopoverTrigger>
                <PopoverContent
                  class="w-45 py-1"
                  color="neutral"
                  align="end"
                  :side-offset="1">
                  <PopoverClose as-child>
                    <PopoverItem
                      size="sm"
                      @click="addPocket(true)">
                      <Icon
                        class="size-4"
                        name="lucide:sparkles" />
                      Randomize
                    </PopoverItem>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </ButtonGroup>
          </template>

          <TransitionScalePop class="flex size-full flex-col gap-6 px-4">
            <LazyBackpackBoxCard
              v-for="pocket in ps().pockets.filter(
                (p) =>
                  !(
                    ps().pinned.includes(p.key)
                    || ps().trash.includes(p.key)
                    || ps().archive.includes(p.key)
                  ),
              )"
              :key="pocket.key"
              :pocket
              :selected
              @dblclick="navigateTo(`/pocket/${pocket.key}`)"
              @click="selected = pocket" />
            <Button
              v-tippy="'Add Pocket'"
              class="h-38 w-full"
              variant="ghost">
              <icon
                class="size-7 **:stroke-[1.5]"
                name="add" />
            </Button>
          </TransitionScalePop>
        </BoxPanelCenter>
      </template>
      <template #right>
        <div class="flex h-full flex-col">
          <PocketDetailMenu :pocket-key="selected?.key ?? null" />
          <BackpackCardDetail :pocket="selected" />
        </div>
      </template>
    </BoxPage>
  </div>
</template>
