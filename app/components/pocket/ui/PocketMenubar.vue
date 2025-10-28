<script setup lang="ts">
<<<<<<< HEAD
import { ChampionIcon, Hicon, ItemsAutoMenu, MiniItemAvatars, MiniSpellAvatars, RuneAndPathImg, RunesAutoMenu, SpellsAutoMenu } from '#components'
import { championPositions } from '~~/shared/appdata'
import type { MenubarGroup } from '~/base/menubar/menubar.types'
=======
import { ChampionIcon, Hicon, ItemsAutoMenu, MiniItemAvatars, MiniRuneSet, MiniSpellAvatars, PositionBadge, RuneAndPathImg, RunesAutoMenu, SpellsAutoMenu, SpellSetDuo } from '#components'
import { championPositions } from '~~/shared/appdata'
import type { MenubarGroup, MenubarItem, MenubarRadioGroup } from '~/base/menubar/menubar.types'
>>>>>>> refs/remotes/origin/main

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
    class: 'w-74',
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
            name: 'champion',
            class: { content: 'w-62' },
            inset: true,
            items: [
              createRadioGroupItem({
                name: 'Core Champion',
                get: () => pocket.value.main.champion,
                optionIcon: k => h(ChampionIcon, { class: 'size-6 rounded-md', k }),
                optionName: k => ix().champNameByKey(k),
                options: pocket.value.champions,
                set: v => (pocket.value.main.champion = v),
              }),
            ],
            shortcut: { component: h(ChampionIcon, { class: 'size-6 shadow-none rounded-full', k: pocket.value.main.champion }) },
            type: 'submenu',
          },

          {
            name: 'role',
            class: { content: 'w-52' },
            inset: true,
            items: [
              createRadioGroupItem({
                name: 'Main Role',
                get: () => pocket.value.main.role,
                optionIcon: k => h(Hicon, { name: `i-lol-${k}`, class: '!size-4 mx-1' }),
                optionName: k => k,
                options: championPositions.map(p => p.name),
                set: v => (pocket.value.main.role = v),
              }),
            ],
            shortcut: { text: pocket.value.main?.role || '' },
            type: 'submenu',
          },
          {
            name: 'runes',
            class: { content: 'w-70' },
            component: RunesAutoMenu,
            inset: true,
            shortcut: { component: h(RuneAndPathImg, { class: 'size-7 rounded-full', pathClass: 'scale-60 translate-x-1 translate-y-1 border-b4/80', set: unref(set) }) },
            type: 'submenu',
          },
          {
            name: 'items',
            class: { content: 'w-56' },
            component: ItemsAutoMenu,
            inset: true,
            shortcut: { component: h(MiniItemAvatars, { set: pocket.value.items.find(s => s.id === pocket.value.main?.items) }) },
            type: 'submenu',
          },
          {
            name: 'spells',
            class: { content: 'w-38' },
            component: SpellsAutoMenu,
            inset: true,
            shortcut: { component: h(MiniSpellAvatars, { set: pocket.value.spells.find(s => s.id === pocket.value.main?.spells) }) },
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
console.log('🌱 - menu:', menu)
</script>

<template>
  <Menubar
    class="h-11 self-end pb-2.5 -ml-4 w-fit z-1">
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
        :class="cn('**:capitalize w-64', group.class)">
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