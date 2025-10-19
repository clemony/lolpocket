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
      scrollbar-class="bg-transparent border-0"
      class="h-[calc(100vh-(var(--spacing)*16))]">
      <div
        class="flex items-center flex-col w-full bg-background/95 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/6 z-1">
        <div class="w-full grid place-items-center h-[45px] border-b">
          <div
            class="flex items-center border-box max-w-220 size-full px-4 gap-3">
            <h1
              class="dst text-7">
              {{ title }}
            </h1>
            <slot name="tabs" />
          </div>
        </div>
        <form class="w-full h-24 flex items-center p-4 self-center max-w-220">
          <Input
            v-model="searchQuery"
            placeholder="Search"
            class="w-full"
            @clear:input="searchQuery = ''">
            <icon
              name="lucide:search"
              class="size-4 text-bc/60" />
          </Input>
        </form>
      </div>
      <div class="z-0 flex pb-6 pt-1 max-w-220 w-full mx-auto">
        <slot />
      </div>
    </ScrollArea>
  </Tabs>
</template>
