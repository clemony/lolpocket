<script lang="ts" setup>
import type { Mail } from './mails'
import { mails } from './mails'

const { title } = defineProps<{
  title: string
}>()
const selected = ref<string | undefined>(mails[0].id)
const searchQuery = ref('')
const debouncedSearch = refDebounced(searchQuery, 250)

const filteredMailList = computed(() => {
  let output: Mail[] = []
  const searchQuery = debouncedSearch.value?.trim()
  if (!searchQuery) {
    output = mails
  }
  else {
    output = mails.filter((item) => {
      return (
        item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
      )
    })
  }

  return output
})
</script>

<template>
  <Tabs
    default-value="all"
    as-child>
    <ScrollArea
      class="h-[calc(100vh-(var(--spacing)*16))]"
      scrollbar-class="bg-transparent border-0">
      <div
        class="bg-background/95 supports-[backdrop-filter]:bg-background/6 sticky top-0 z-1 flex w-full flex-col items-center backdrop-blur-sm">
        <div class="grid h-15 w-full place-items-center border-b">
          <div
            class="border-box flex size-full max-w-220 items-center gap-3 px-4">
            <h1 class="text-3xl dst">
              {{ title }}
            </h1>
            <slot name="tabs" />
          </div>
        </div>
        <form class="flex h-24 w-full max-w-220 items-center self-center p-4">
          <Input
            v-model="searchQuery"
            class="w-full"
            placeholder="Search"
            @clear-input="searchQuery = ''">
            <icon
              class="size-4 text-pc/60"
              name="lucide:search" />
          </Input>
        </form>
      </div>
      <div class="z-0 mx-auto flex w-full max-w-220 pt-1 pb-6">
        <slot />
      </div>
    </ScrollArea>
  </Tabs>
</template>
