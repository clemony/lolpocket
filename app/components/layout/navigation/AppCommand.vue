<script lang="ts" setup>
import { UDrawer, UModal } from "#components"
import type { CommandPaletteItem } from "@nuxt/ui"

const items: CommandPaletteItem[] = Array.from({ length: 1000 })
  .fill(0)
  .map((_, value) => ({
    label: `item-${value}`,
    value,
  }))

const groups = [
  {
    id: "items",
    items,
  },
]
const query = ref<string>("")
const tag = ref<string>("")
const region = shallowRef<keyof typeof regionIndex>("na1")
const queryName = useTemplateRef<HTMLElement>("queryName")

const { focused } = useFocus(queryName)
const router = useRouter()
const route = useRoute()
const user = useSupabaseUser()

const focus = ref<HTMLElement>()

/* const { champions, clear, pages, pockets } = await useSearch(query, tag, {
  pages: true,
})
 */
</script>

<template>
  <component
    :is="breakpoints.desktop ? UModal : UDrawer"
    aria-describedby="app-command-search"
    :handle="false">
    <UButton
      icon="search"
      size="sm"
      square
      :ui="{ base: 'shrink-0 rounded-full', leadingIcon: 'size-5' }"
      variant="ghost" />
    <template #content>
      <UCommandPalette
        virtualize
        :fuse="{ resultLimit: 1000 }"
        :groups="groups"
        :ui="{ root: 'max-h-[50vh]' }"
        class="h-80 flex-1">
        <template #footer>
          <div class="flex items-center justify-between gap-2">
            <LpLogo class="ml-1 size-5 rounded-sm *:text-[9px]" />
            <div class="flex items-center gap-1">
              <UButton
                color="neutral"
                variant="ghost"
                label="Open Command"
                class="text-dimmed"
                size="xs">
                <template #trailing>
                  <UKbd value="enter" />
                </template>
              </UButton>
              <USeparator orientation="vertical" class="h-4" />
              <UButton
                color="neutral"
                variant="ghost"
                label="Actions"
                class="text-dimmed"
                size="xs">
                <template #trailing>
                  <UKbd value="meta" />
                  <UKbd value="k" />
                </template>
              </UButton>
            </div>
          </div>
        </template>
      </UCommandPalette>
    </template>
  </component>
</template>
