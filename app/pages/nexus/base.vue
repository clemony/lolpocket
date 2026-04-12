<script lang="ts" setup>
import { patchIndex } from "~~/shared/constants/patch-index"
definePageMeta({
  title: "Base",
  layout: "default",
  path: "/nexus/base",
  class: "",
  icon: "i-nexus",
  description: "",
  order: 0
})

//Home base for news, personal data, friends, and more
</script>

<template>
  <UPage
    class="mx-auto flex size-full max-w-(--ui-container-lg) flex-col items-center">
    <UPageHeader title="Nexus" class="w-full" />
    <UPageBody class="w-full px-8">
      <div class="h-max">
        <h1 class="flex h-24 items-center px-3">Game Updates</h1>
        <div class="w-full">
          <div class="grid grid-cols-2 gap-10 px-4">
            <LazyPatchPost
              orientation="horizontal"
              :patch="patchIndex[0]"
              class="" />
            <LazyPbePost orientation="horizontal" class="" />
          </div>
        </div>
      </div>

      <div class="w-full">
        <h1 class="flex h-24 items-center px-3">News Feed</h1>
        <div class="flex items-center">
          <LazyRedditPosts />
        </div>
      </div>
    </UPageBody>
  </UPage>
</template>
