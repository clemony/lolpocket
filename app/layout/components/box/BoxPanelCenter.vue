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
        class="
          bg-background/95 sticky top-0 z-1 flex w-full flex-col items-center
          backdrop-blur supports-[backdrop-filter]:bg-background/6
        ">
        <div class="grid h-[45px] w-full place-items-center border-b">
          <div
            class="border-box flex size-full max-w-220 items-center gap-3 px-4">
            <h1 class="text-7 dst">
              {{ title }}
            </h1>
            <slot name="tabs" />
          </div>
        </div>
        <form class="flex h-24 w-full max-w-220 items-center self-center p-4">
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
      <div class="z-0 mx-auto flex w-full max-w-220 pt-1 pb-6">
        <slot />
      </div>
    </ScrollArea>
  </Tabs>
</template>
