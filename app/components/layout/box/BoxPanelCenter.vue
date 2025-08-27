<script lang="ts" setup>
import type { Mail } from './mails'
import { mails } from './mails'

const { title } = defineProps<{
  title: string
}>()
const selected = ref<string | undefined>(mails[0].id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output: Mail[] = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = mails
  }

  else {
    output = mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

/*
            <!--
            <IndicatorTabsList class="ml-auto">
              <IndicatorTabsTrigger
                value="all">
                All mail
              </IndicatorTabsTrigger>
              <IndicatorTabsTrigger
                value="unread">
                Unread
              </IndicatorTabsTrigger>
              <TabIndicator />
            </IndicatorTabsList> -->const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))

const selectedMailData = computed(() => mails.find(item => item.id === selected.value))

<TransitionSlideLeft
        group
        class="flex-1 flex flex-col gap-2 p-4 pt-0">
        <TabsContent
          value="all"
          class="m-0">
          <BoxPane
            v-model:selected="selected"
            :items="filteredMailList" />
        </TabsContent>
        <TabsContent
          value="unread"
          class="m-0">
          <BoxPane
            v-model:selected="selected"
            :items="unreadMailList" />
        </TabsContent>
      </TransitionSlideLeft> */
</script>

<template>
  <Tabs default-value="all">
    <div class="flex items-center px-4 h-16 gap-3">
      <h1 class="dst text-8">
        {{ title }}
      </h1>
      <slot name="tabs" />
    </div>
    <Separator />
    <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div class="relative">
          <icon
            name="search"
            class="absolute left-2 top-2.5 size-4 text-bc/60" />
          <Input
            v-model="searchValue"
            placeholder="Search"
            class="pl-8" />
        </div>
      </form>
    </div>
    <ScrollArea class="h-screen flex">
      <slot />
    </ScrollArea>
  </Tabs>
</template>
