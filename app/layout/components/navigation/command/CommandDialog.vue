<script lang="ts" setup>
import { modal, slideover } from "#build/ui"
import {
  LazyCommandHotkeys,
  LazyCommandInbox,
  LazyCommandPalette
} from "#components"
import { focusTrigger, onContentInteractOutside } from "./build/helpers"
import { useCommandFocusNavigation } from "./build/useCommandFocusNavigation"

const emits = defineEmits<{
  close: [value: boolean]
  "update:component": any
}>()

const route = useRoute()

const query = shallowRef<string>("")
const commandInput = useTemplateRef<{ inputRef: HTMLInputElement | null }>(
  "commandInput"
)

const open = shallowRef<boolean>(false)
/* useCommandFocusNavigation({
  state,
  panel: panelRoot,
  trigger: reference
})

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => focusTrigger(state, reference.value)
  }
}) */
const activeComponent = shallowRef<string | null>("menu")
const component: Record<string, Component> = {
  inbox: LazyCommandInbox,
  notifications: LazyCommandInbox,
  hotkeys: LazyCommandHotkeys,
  search: LazyCommandPalette
}

watch(
  () => route.fullPath,
  (newVal, oldVal) => {
    close()
    if (oldVal !== newVal) query.value = ""
  }
)

const modalOpen = shallowRef<boolean>(false)
const sidebarOpen = shallowRef<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    sidebarOpen.value = true
    modalOpen.value = true
  }, 200)
})
</script>

<template>
  <UModal
    v-model:open="open"
    :close="false"
    :fullscreen="true"
    :ui="{
      body: 'relative translate-0 p-0! backdrop-blur-none',
      header: 'absolute w-full! p-0!',
      wrapper: 'w-full',
      title: 'w-full p-0!',
      content:
        'fixed inset-0 h-[100vh] w-[100vw] translate-0 border-0 bg-transparent p-0! shadow-none ring-0 backdrop-blur-none',
      close: 'fixed top-3 right-3'
    }">
    <template #content>
      <div
        role="button"
        class="relative inset-0 flex size-full overflow-hidden"
        @click="emits('close', false)">
        <USidebar
          v-model:open="sidebarOpen"
          :ui="{
            root: cn(
              'y-0 absolute right-0 w-100! duration-400 ease-spring-soft',
              sidebarOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 translate-x-[200%]'
            ),
            container:
              'w-full overflow-hidden rounded-l-4xl border-0 bg-p1 inset-ring inset-ring-p0 ring-offset-1 ring-offset-p3',
            body: 'p-0 pt-44'
          }"
          side="right"
          @click.stop>
          <template #header>
            <CommandSidebarHeader />
          </template>
          <div class="z-0 flex w-full grow flex-col items-center">
            <LazyCommandDialogSidebar />
          </div>
          <template #footer>
            <AccountMenu
              trigger-style="user"
              :content="{
                side: 'top'
              }"
              :user="{
                size: 'lg',
                ui: {
                  name: 'text-lg! leading-4.5 font-bold!',
                  description: 'text-xs! mb-px leading-4',
                  wrapper: 'justify-center align-center flex flex-col'
                }
              }"
              :ui="{
                base: 'pr-2.5',
                trailingIcon: 'size-5'
              }"
              size="xl"
              block />
          </template>
        </USidebar>
        <div class="absolute h-220 w-200 place-self-center rounded-4xl bg-p0">
          <MailIndicatorButton
            :active-component
            @update:component="emits('update:component', $event)" />
        </div>
        <!--  <UPopover
          v-model:open="modalOpen"
          :dismissible="false"
          :modal="false"
          :content="{
            side: 'right',
            align: 'center'
          }"
          :ui="{
            content: 'delay-100 duration-400'
          }"
          @close:prevent="emits('close', false)">
          <div class="absolute size-px place-self-center" />
          <template #content>
            <CommandInput
              size="lg"
              variant="solid"
              color="base"
              :ui="{
                root: 'max-h-fit w-full grow rounded-lg bg-p0',
                base: 'bg-p0'
              }"
              @click.stop
              @update:query="console.log($event)" />
            <div class="relative flex w-full gap-4">
              <div
                class="relative max-h-[inherit] overflow-hidden rounded-xl border border-p3/80 bg-p0 shadow-md"></div>
            </div>
          </template>
        </UPopover> -->
      </div>
    </template>
    <!--     <LazyCommandFooter @update:open="(e: string) => handleUpdate(e)" /> -->
  </UModal>
</template>
