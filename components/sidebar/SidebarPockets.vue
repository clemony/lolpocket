<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()
  const ps = usePocketStore()

  const folders = [
    {
      name: 'All',
      key: 'all-pockets',
      type: 'pocket',
      items: ps.allPockets,
      permanent: true,
      icon: 'teenyicons:folders-outline',
    },
    {
      name: 'Pinned',
      key: 'pinned-pockets',
      type: 'pocket',
      items: ps.pinnedPockets,
      permanent: true,
      icon: 'teenyicons:attach-outline',
    },
  ]

  const folderCheck = ref(true)
</script>
<template>
  <li
    class="collapse"
    key="folders">
    <input
      v-model="folderCheck"
      name="resources"
      type="checkbox" />
    <div class="collapse-title flex items-center gap-4">
      <LittleIcon
        icon="formkit:folder"
        class="size-4.5" />
      Pocket Folders
      <ExpandIndicator v-model:check="folderCheck" />
    </div>
    <ul class="collapse-content">
      <li
        v-for="folder in folders"
        v-tippy="{ content: folder.items.length == 0 ? 'No pockets here!' : 'hi' }"
        class="collapse group has-disabled:opacity-60">
        <input
          :name="folder.name"
          type="checkbox"
          :disabled="!folder.items.length" />

        <div class="collapse-title flex items-center gap-4">
          <LittleIcon
            :icon="folder.icon"
            class="size-4.5" />
          {{ folder.name }}
          <Grow />
          <div
            class="mr-2 badge badge-neutral px-2 py-1 justify-self-end"
            v-if="folder.items.length"
            :key="folder.items.length">
            {{ folder.items.length }}
          </div>
          <ExpandIndicator />
        </div>

        <ul class="collapse-content">
          <li v-for="pocket in folder.items">
            <a
              href="item.link"
              target="_blank"
              class="flex gap-4 items-center">
              <img
                :src="pocket.icon"
                class="size-5.5 rounded-full shadow-sm" />
              {{ pocket.name }}
            </a>
          </li>
        </ul>
      </li>

      <li>
        <NuxtLink
          to="/pocket/Trash"
          class="flex gap-4 items-center">
          <LittleIcon
            icon="teenyicons:bin-outline"
            class="size-4.5" />
          Trash

          <Grow />
          <div
            class="badge badge-neutral px-0 py-1 justify-self-end"
            v-if="ps.trashPockets.length"
            :key="ps.trashPockets.length">
            {{ ps.trashPockets.length }}
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          to="/pocket/Archive"
          class="flex gap-4 items-center">
          <LittleIcon
            icon="teenyicons:archive-outline"
            class="size-4.5" />
          Archive

          <Grow />
          <div
            class="badge badge-neutral px-0 py-1 justify-self-end"
            v-if="ps.archivePockets.length"
            :key="ps.archivePockets.length">
            {{ ps.archivePockets.length }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
<style scoped></style>
