<script lang="ts" setup>
definePageMeta({
  name: 'pockets',
  icon: 'folder',
  level: 2,
  order: 1,
  parent: '/backpack',
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
            <Button
              variant="neutral"
              class="ml-auto font-normal pr-4 pl-2.5"
              @click="generatePocket(ps().pockets)">
              <icon name="add" />
              Add Pocket
            </Button>
          </template>

          <TransitionScalePop class="size-full flex flex-col gap-6 px-4">
            <LazyBackpackBoxCard
              v-for="pocket in ps().pockets.filter(
                (p) => p.location.folder == '',
              )"
              :key="pocket.key"
              :pocket
              :selected
              @click="selected = pocket" />
            <Button
              v-tippy="'Add Pocket'"
              class="w-full h-38"
              variant="ghost">
              <icon
                name="add"
                class="size-7 **:stroke-[1.5]" />
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
