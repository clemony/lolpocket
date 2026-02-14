<script lang="ts" setup>
const isCollapsed = ref(false)
const route = useRoute()
definePageMeta({
  name: "Inbox",
  icon: "mail",
})
/*
const selectedMail = ref<string | undefined>(props.mails[0].id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

 */ /* const filteredMailList = computed(() => {
  let output: Mail[] = []
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.mails
  }

  else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))

const selectedMailData = computed(() => props.mails.find(item => item.id === selectedMail.value))
 */
</script>

<template>
  <BoxLayout
    :is-collapsed
    @toggle-collapse="(e: boolean) => (isCollapsed = !e)"
    @expand="isCollapsed = true"
    @collapse="isCollapsed = false">
    <template #nav>
      <div
        class="flex size-full h-16 w-full items-center justify-center border-b p-1">
        <UPopover>
          <UButton as-child>
            <UButton
              variant="ghost"
              hover="base"
              on="base"
              :class="
                cn('', {
                  'w-full': !isCollapsed,
                  'h-full self-center rounded-full': isCollapsed,
                })
              ">
              <SummonerIcon
                :class="
                  cn('size-full rounded-full', {
                    'size-7': !isCollapsed,
                    'size-10': isCollapsed,
                  })
                " />
              <span
                v-show="!isCollapsed"
                class="grow items-center text-xl font-semibold ds-2xs *:first:capitalize">
                <SummonerName class="inline" />
                's Inbox
              </span>
              <icon
                v-show="!isCollapsed"
                name="up-down"
                :class="cn('size-4.5 text-pc/60')" />
            </UButton>
          </UButton>
          <LazyPopoverContent
            class="w-(--reka-popover-trigger-width) min-w-64 space-y-1 p-1.5">
            <InboxDropdownMenu />
          </LazyPopoverContent>
        </UPopover>
      </div>
      <BoxNav
        :is-collapsed
        :links="
          (route.matched[0]?.children ?? []).sort(
            (a, b) => Number(a.meta?.order) - Number(b.meta?.order)
          )
        " />

      <Separator />

      <NuxtPage />
    </template>
  </BoxLayout>
</template>
