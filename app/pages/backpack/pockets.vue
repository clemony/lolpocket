<script lang="ts" setup>
definePageMeta({
  path: '/backpack',
  name: 'pockets',
  parent: '/backpack',
  icon: 'folder',
  order: 1,
  components: {
    label: '',
  },
  variant: 'ghost',
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
              class="ml-auto font-normal join-item"
              @click="generatePocket()">
              <icon name="add-sm" />
              Add Pocket
            </Button>
          </template>

          <div class="size-full flex flex-col gap-4 px-4">
            <BackpackBoxCard
              v-for="pocket in ps().pockets"
              :key="pocket.key"
              :pocket
              :selected
              @click="selected = pocket" />
          </div>
        </BoxPanelCenter>
      </template>
      <template #right>
        <div class="flex h-full flex-col">
          <PocketDetailMenu :pocket-key="selected?.key" />
          <BackpackCardDetail :pocket="selected" />
        </div>
      </template>
    </BoxPage>
  </div>
</template>
