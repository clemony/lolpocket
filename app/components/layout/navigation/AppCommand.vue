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
    <Tooltip :text="`Search ${getDeviceKey()}K`">
      <UButton
        icon="search"
        label="search..."
        size="sm"
        :ui="{
          base: 'shrink-0 cursor-text  w-180! inset-shadow-xs  border border-p3 rounded-xl!',
          label: 'grow text-center  text-n4   ',
          leadingIcon:
            'size-4.5 justify-self-start text-n5 **:stroke-[2.3] opacity-80 group-hover/btn:opacity-100',
        }"
        variant="ring">
        <template #trailing>
          <div class="flex items-center gap-0 self-center">
            <UKbd
              v-for="k in ['meta', 'K']"
              :key="k"
              square
              class="text-sm text-n4"
              size="sm"
              variant="ghost"
              :value="k" />
          </div>
        </template>
      </UButton>
      <template #content>
        Search... &nbsp;
        <UKbd
          v-for="k in ['meta', 'K']"
          :key="k"
          square
          size="sm"
          color="neutral"
          :value="k" />
      </template>
    </Tooltip>
    <template #content>
      <UCommandPalette
        virtualize
        :fuse="{ resultLimit: 1000 }"
        :groups="groups"
        :ui="{ root: 'max-h-200' }"
        class="h-80 flex-1">
        <template #footer>
          <div class="flex h-7 items-center justify-between gap-2">
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
                  <UKbd square size="sm" value="meta" />
                  <UKbd square size="sm" value="k" />
                </template>
              </UButton>
            </div>
          </div>
        </template>
      </UCommandPalette>
    </template>
  </component>
</template>
