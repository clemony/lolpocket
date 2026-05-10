<script lang="ts" setup>
import { usePocketFolders } from "~/domain/pocket/folder/useFolder"
import { asFolderButton } from "~/domain/pocket/helpers/typeAssert"

const getFolders = usePocketFolders()
</script>

<template>
  <UPage
    class="size-full max-h-[calc(100vh-var(--ui-header-height)*2)] overflow-y-auto">
    <UPageBody class="mx-auto size-full max-w-(--ui-container-lg) px-10 py-4">
      <BackpackGrid :folder="asFolderButton(getFolders?.pockets.value)" />
      <template v-for="(folder, i) in getFolders?.folders.value" :key="i">
        <BackpackGrid
          v-if="asFolderButton(folder).children"
          header
          :folder="asFolderButton(folder)" />
      </template>
    </UPageBody>
  </UPage>
</template>
