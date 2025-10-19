<script setup lang="ts">
import { ChampionIcon } from '#components'
import type { MenubarItem, MenubarRadioGroup } from '~/base/menubar/menubar.types'

const route = useRoute()
const pocket = ref<Pocket>(ps().getPocket(String(route.params.pocket_key)))

const activeHeader = ref<'pinned' | 'all'>('pinned')

// Reference for the "All" section
const allSection = useTemplateRef<HTMLElement>('allSection')

useIntersectionObserver(
  allSection,
  ([entry]) => {
    activeHeader.value = entry.isIntersecting ? 'all' : 'pinned'
  },
  { threshold: 0 }
)
const set = computed (() => pocket.value?.runes.find(s => s.id === pocket.value.main?.runes))
const spells = computed (() => pocket.value.spells.find(s => s.id === pocket.value.main?.spells))
const dlClass = 'size-3.5  opacity-70 **:stroke-[2.3]  group-hover/subitem:opacity-100'

interface MenubarGroup {
  name: string
  items: MenubarItem[]
}
const menu: MenubarGroup[] = [
  {
    name: 'file',
    items: [
      {
        name: 'export',
        icon: { name: 'export' },
      },
      {
        name: 'share',
        icon: { name: 'send' },
      },
      { name: 'separator' },
      {
        name: 'Download...',
        inset: true,
        items: [
          {
            name: 'PNG',
            icon: { name: 'lucide:image-down' },
            shortcut: { class: dlClass, icon: 'download' }
          },
          {
            name: 'CSV (Excel / Sheets)',
            icon: { name: 'lucide:file-spreadsheet' },
            shortcut: { class: dlClass, icon: 'download' },
          },
          {
            name: 'JSON',
            icon: { name: 'lucide:file-json' },
            shortcut: { class: dlClass, icon: 'download' }
          }
        ],
        type: 'submenu',
      },
      { name: 'separator' },
      {
        name: 'Delete',
        icon: { name: 'trash' },
      },
    ]
  },
  {
    name: 'browse',
    items: [
      {
        name: 'Backpack',
        click: () => navigateTo('/backpack'),
        icon: { name: 'backpack', class: 'size-4.25' },
      },
      { name: 'separator' },
      {
        name: 'Pinned',
        icon: { name: 'pin', class: '**:stroke-[1.8]' },
        items: ps().pockets.filter(p => p.location.pinned).sort((a, b) => a.name.localeCompare(b.name)),
        pocket: true,
        type: 'submenu',
      },
      {
        name: 'All',
        icon: { name: 'folders' },
        items: ps().pockets.filter(p => !p.location.pinned).sort((a, b) => a.name.localeCompare(b.name)),
        pocket: true,
        type: 'submenu',
      },
      { name: 'separator' },
      {
        name: 'Archive',
        click: () => navigateTo('/backpack/archive'),
        icon: { name: 'archive' },
      },
      {
        name: 'Trash',
        click: () => navigateTo('/backpack/trash'),
        icon: { name: 'trash' },
      }
    ]
  },
  {
    name: 'settings',
    items: [
      createCheckboxItem({
        name: () => pocket.value.location.pinned ? 'Pinned' : 'Pin Pocket',
        checkboxType: 'tick-end',
        get: () => pocket.value.location.pinned,
        icon: () => pocket.value.location.pinned ? 'pin-solid' : 'pin',
        iconClass: '**:stroke-[1.8]',
        set: v => pocket.value.location.pinned = v,
      }),
      { name: 'separator' },
      {
        name: 'core',
        items: [
          {
            name: pocket.value.main?.champion || 'Champion',
            inset: true,
            items: [
              {
                name: computed(() => pocket.value.main?.champion || 'Champion'),
                inset: true,
                items: [
                  createRadioGroupItem({
                    name: 'Core Champion',
                    get: () => pocket.value.main.champion,
                    optionIcon: k => h(ChampionIcon, { k }),
                    optionName: k => ix().champNameByKey(k),
                    options: pocket.value.champions,
                    set: v => (pocket.value.main.champion = v),
                  }),
                ],
                type: 'radio',
              },
            ],
            type: 'submenu'
          },
          {
            name: pocket.value.main?.role || 'Role',
            inset: true,
            type: 'submenu',
          },
          {
            name: `${ix().runeNameById(unref(set)?.keystone) || 'Keystone'} / ${unref(set)?.secondary.path || 'Path'}` || 'Runes',
            inset: true,
            type: 'submenu',
          },
          {
            name: pocket.value.main?.items || 'Items',
            inset: true,
            type: 'submenu',
          },
          {
            name: `${unref(spells.value.d)} / ${unref(spells.value.f)}` || 'Spells',
            inset: true,
            type: 'submenu',
          },
        ],
        type: 'group'
      },

      { name: 'separator' },
      createCheckboxItem({
        name: () => pocket.value.public ? 'Published' : 'Private',
        checkboxType: 'switch',
        get: () => pocket.value.public,
        icon: () => pocket.value.public ? 'wifi' : 'lock',
        set: v => pocket.value.public = v,
      }),
      createCheckboxItem({
        name: () => pocket.value.public ? 'Comments On' : 'Comments Off',
        checkboxType: 'switch',
        get: () => pocket.value.public,
        icon: () => pocket.value.public ? 'chat-dots' : 'chat-off',
        set: v => pocket.value.public = v,
      }),
    ]
  }
]
</script>

<template>
  <Menubar
    class="h-11 self-end pb-2.5 -ml-4 w-fit">
    <MenubarMenu
      v-for="group in menu"
      :key="group.name"
      :value="group.name">
      <MenubarTrigger
        as-child
        class="hover:bg-transparent">
        <Button
          variant="link"
          active="secondary"
          size="sm"
          class="rounded-lg open:brightness-98 capitalize px-4 ">
          {{ group.name }}
        </Button>
      </MenubarTrigger>
      <LazyMenubarContent
        :side-offset="2"
        class="**:capitalize w-64">
        <AutoMenuContent
          v-for="item in group.items"
          :key="item.name.toString()"
          :item />
      </LazyMenubarContent>
    </MenubarMenu>

    <!--             <div
              v-if="!ps().pockets.filter(p => p.location.pinned).length"
              class="grid h-8 pb-2 text-2 opacity-50  w-full place-items-center">
              No pockets found.
            </div> -->
  </Menubar>
</template>