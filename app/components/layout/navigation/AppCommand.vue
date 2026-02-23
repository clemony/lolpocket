<script lang="ts" setup>
import { UDrawer, UModal } from "#components"
import type { BadgeProps, CommandPaletteItem } from "@nuxt/ui"

const items: CommandPaletteItem[] = itemIndex.map((i) => ({
  label: i.name,
  value: i.id,
  avatar: { src: `/img/items/${i.id}.webp` },
  suffix: "Item",
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

const badgeColor: Record<string, BadgeProps["color"]> = {
  item: "dom",
  champion: "pre",
  rune: "sorc",
  spell: "insp",
  summoner: "p0",
}
</script>

<template>
  <component
    :is="breakpoints.desktop ? UModal : UDrawer"
    aria-describedby="app-command-search"
    :ui="{
      content: ' max-w-180',
    }"
    :handle="false">
    <Tooltip>
      <UButton
        icon="search"
        label="search..."
        size="md"
        :ui="{
          base: 'shrink-0 cursor-text  w-180! inset-shadow-xs noise bg-p0/50 border border-p3 rounded-xl!',
          label: 'grow text-center  text-n4   ',
          leadingIcon:
            'size-4.5 justify-self-start text-n5 **:stroke-[2.3] opacity-80 group-hover/btn:opacity-100',
        }"
        variant="ring">
        <template #trailing>
          <div class="flex items-center">
            <UKbd
              v-for="k in ['meta', 'K']"
              :key="k"
              variant="ghost"
              square
              :value="k" />
          </div>
        </template>
      </UButton>
      <template #content>
        Search... &nbsp;
        <UKbd
          v-for="k in ['meta', 'K']"
          :key="k"
          color="neutral"
          square
          :value="k" />
      </template>
    </Tooltip>
    <template #content>
      <UCommandPalette
        virtualize
        :fuse="{ resultLimit: 1000 }"
        :groups="groups"
        :ui="{
          root: 'max-h-200 max-w-180 *:first:[&_svg]:size-4.5!',
          itemLabelSuffix: 'hidden',
          itemLeadingAvatarSize: 'sm',
          itemWrapper: 'justify-center',
        }"
        class="h-80 flex-1">
        <template #item-trailing="{ item }">
          <UBadge
            size="sm"
            :color="badgeColor[String(item.suffix)]"
            :label="item.suffix"></UBadge>
        </template>
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
