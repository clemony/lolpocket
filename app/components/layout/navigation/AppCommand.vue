<script lang="ts" setup>
import { itemIndex } from "#shared/constants/items/itemIndex"
import type { BadgeProps, CommandPaletteItem } from "@nuxt/ui"
// eslint-disable-next-line ts/consistent-type-imports
import { regionIndex } from "#shared/constants/misc/region-index"

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

const component = shallowRef(
  defineAsyncComponent(
    () =>
      import(
        breakpoints.desktop
          ? "@nuxt/ui/components/Modal.vue"
          : "@nuxt/ui/components/Drawer.vue"
      )
  )
)
</script>

<template>
  <component
    :is="component"
    aria-describedby="app-command-search"
    :ui="{
      content: ' max-w-180  ',
    }"
    :handle="false">
    <Tooltip
      align="start"
      arrow
      color="primary"
      :ui="{ content: 'translate-x-6', arrow: 'translate-x-6' }">
      <UButton
        icon="search"
        label="search..."
        size="md"
        :ui="{
          base: 'shrink-0 cursor-text  fx-1 w-180! inset-shadow-xs  bg-p0/50 border border-p3 rounded-xl!',
          label: 'grow text-center  text-n5   ',
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
        <div class="flex items-center gap-1">
          Search... &nbsp;
          <UKbd
            v-for="k in ['meta', 'K']"
            :key="k"
            size="sm"
            color="neutral"
            square
            :value="k" />
        </div>
      </template>
    </Tooltip>
    <template #content>
      <LazyUCommandPalette
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
          <LazyUBadge
            size="sm"
            :color="badgeColor[String(item.suffix)]"
            :label="item.suffix"></LazyUBadge>
        </template>
        <template #footer>
          <div class="flex h-7 items-center justify-between gap-2">
            <LazyLpLogo class="ml-1 size-5 rounded-sm *:text-[9px]" />
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
              <LazyUSeparator orientation="vertical" class="h-4" />
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
      </LazyUCommandPalette>
    </template>
  </component>
</template>
