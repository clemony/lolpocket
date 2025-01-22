<script setup lang="ts">
  const as = useAccountStore()
  const ts = useTempStore()
  const ps = usePocketStore()

  const folderCheck = ref(true)

  const folders = defaultFolders()
  console.log('💠 - folders:', folders)
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
      <template v-for="folder in folders">
        <li
          v-if="folder.name != 'Trash' && folder.name != 'Archive'"
          :key="folder.name"
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
              <NuxtLink
                :to="`/pocket/${pocket.key}`"
                class="w-full flex gap-3 items-center">
                <PocketIcon
                  :pocket="pocket"
                  class="rounded-lg -ml-1 overflow-hidden object-center shadow-sm size-6"
                  iconClass=" !text-white"
                  imgClass="!size-10 shrink-0" />
                {{ pocket.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
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
