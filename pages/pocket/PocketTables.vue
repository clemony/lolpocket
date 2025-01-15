<script setup lang="ts">
  const as = useAccountStore();

  const ps = usePocketStore();

  const list = [
    { name: 'All', id: 'tableAll', icon: '', link: 'table' },
    {
      name: 'Pinned',
      id: 'tablePinned',
      icon: 'teenyicons:pin-alt-outline',
      link: 'home',
    },
    { name: 'this tab', link: 'home' },
  ];
</script>
<template>
  <PageLayout class="pb-4">
    <template #header>Pockets</template>

    <template #header-center>
      <Button
        variant="ghost"
        class="text-3 -mb-1"
        @click="useDrawer('PocketDrawer')">
        New Pocket
        <icon
          name="teenyicons:add-small-outline"
          class="mb-px -ml-1 size-4.5" />
      </Button>

      <!--             <VDropdown
                theme="hover"
                :delay="{ show: 400, hide: 200 }"
                placement="bottom"
                class="">
                <label
                    class="group mb-px flex items-center gap-1 font-medium opacity-60 transition-all duration-300 hover:cursor-pointer hover:opacity-100">
                    <span class="w-max min-w-max px-1 capitalize">Options</span>

                    <ToggleButton class="pointer-events-none self-center" />
                </label>

                <template #popper>
                    <ColumnTools />
                </template>
            </VDropdown> -->
    </template>
    <template #header-end>
      <span class="mr-0 flex items-center justify-end gap-3">
        <TableSearch />
        <div class="join">
          <MoveButton
            :to="ps.trashPockets"
            text="Trash"
            class="">
            <icon
              name="fluent:bin-recycle-24-regular"
              class="size-7! shrink-0 scale-x-[115%]" />
          </MoveButton>

          <MoveButton
            :to="ps.archivePockets"
            text="Archive">
            <icon
              name="fluent:archive-32-regular"
              class="size-[22px]" />
          </MoveButton>
        </div>
      </span>
    </template>
    <LayoutSpacer />

    <div class="flex">
      <div
        v-for="tab in list"
        class="size-fit">
        <NuxtLink
          :to="{ name: tab.link }"
          class="relative flex h-12 w-44 items-center justify-center"
          exactActiveClass="tabby-right bg-b1 before:absolute before:shadow-pretty border-x-b2 border-t-b2 border-b-0 rounded-t-xl border shadow-warm">
          {{ tab.name }}
        </NuxtLink>
      </div>
    </div>

    <PocketTable :data="ps.pockets" />
  </PageLayout>
</template>

<style></style>
