<script setup lang="ts">
const as = useAccountStore()
const ts = useTempStore()
const ps = usePocketStore()

const folderCheck = ref(true)

const folders = defaultFolders()
</script>

<template>
  <li
    key="folders"
    class="collapse"
  >
    <input
      v-model="folderCheck"
      name="resources"
      type="checkbox"
    />
    <div class="collapse-title flex items-center gap-4">
      <LittleIcon
        icon="folders"
        class="size-4.5"
      />
      Pocket Folders
      <ExpandIndicator v-model:check="folderCheck" />
    </div>
    <ul class="collapse-content">
      <template v-for="folder in folders">
        <li
          v-if="folder.name != 'Trash' && folder.name != 'Archive'"
          :key="folder.name"
          class="collapse group has-disabled:opacity-60"
        >
          <input
            :name="folder.name"
            type="checkbox"
            :disabled="!folder.items.length"
          />

          <div class="collapse-title flex items-center gap-4">
            <LittleIcon
              :icon="folder.icon"
              class="size-4.5"
            />
            {{ folder.name }}
            <Grow />
            <div
              v-if="folder.items.length"
              :key="folder.items.length"
              class="mr-2 badge badge-neutral px-2 py-1 justify-self-end"
            >
              {{ folder.items.length }}
            </div>
            <ExpandIndicator />
          </div>

          <ul class="collapse-content">
            <li v-for="pocket in folder.items" :key="pocket.key">
              <NuxtLink
                :to="`/pocket/${pocket.key}`"
                class="w-full flex gap-3 items-center"
              >
                <PocketIcon
                  :image="pocket.icon"
                  class="**:rounded-md rounded-md size-fit  -ml-1 overflow-hidden object-center size-7 !bg-transparent text-bc shrink-0 shadow-sm"
                />
                {{ pocket.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </template>
      <li>
        <NuxtLink
          to="/pocket/Trash"
          class="flex gap-4 items-center"
        >
          <LittleIcon
            icon="teenyicons:bin-outline"
            class="size-4.5"
          />
          Trash

          <Grow />
          <div
            v-if="ps.trashFolder.length"
            :key="ps.trashFolder.length"
            class="badge badge-neutral px-0 py-1 justify-self-end"
          >
            {{ ps.trashFolder.length }}
          </div>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          to="/pocket/Archive"
          class="flex gap-4 items-center"
        >
          <LittleIcon
            icon="teenyicons:archive-outline"
            class="size-4.5"
          />
          Archive

          <Grow />
          <div
            v-if="ps.archiveFolder.length"
            :key="ps.archiveFolder.length"
            class="badge badge-neutral px-0 py-1 justify-self-end"
          >
            {{ ps.archiveFolder.length }}
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<style scoped></style>
