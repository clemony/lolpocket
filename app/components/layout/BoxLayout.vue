<script lang="ts" setup>
import { SplitterPanel as ResizablePanel } from 'reka-ui'
import type { LinkProp, Mail } from './box/mails'

const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  isCollapsed: boolean
}>()
const emit = defineEmits(['toggle:collapse'])
// 20 32 48
const route = useRoute()
interface MailProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  mails: Mail[]
}
/*
const selectedMail = ref<string | undefined>(props.mails[0].id)
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

 *//* const filteredMailList = computed(() => {
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
const links: LinkProp[] = [
  {
    title: 'Inbox',
    label: '128',
    icon: 'lucide:inbox',
    variant: 'default',
  },
]
</script>

<template>
  <div class="">
    <TooltipProvider :delay-duration="0">
      <ResizablePanelGroup
        id="resize-panel-group-1"
        direction="horizontal"
        class="h-full  items-stretch">
        <ResizablePanel

          id="resize-panel-1"
          :default-size="20"
          :collapsed-size="4"
          collapsible
          :min-size="15"
          :max-size="20"
          :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')"
          @expand="emit('toggle:collapse', true)"
          @collapse="emit('toggle:collapse', false)">
          <slot
            name="nav" />
        </ResizablePanel>
        <ResizableHandle
          id="resize-handle-1"
          with-handle />
        <ResizablePanel>
          <slot />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  </div>
</template>