<script lang="ts" setup>
import type { DropdownMenuItem } from '@nuxt/ui'

const { account } = storeToRefs(as())

const router = useRouter()

const routes = router.getRoutes()

const slugRoot = computed (() => `/summoner/${account.value?.puuid}`)

const domains = ['summoner-region-slug', 'summoner-region-slug-champions', 'summoner-region-slug-pockets', 'summoner-region-slug-live',]

const items = computed(() => [
  [
    {
      avatar: {
        size: 'xs',
        src: getSummonerIcon(account.value?.icon)
      },
      label: `${account.value?.name} #${account.value?.tag}`,
      type: 'label',
      ui: {
        item: 'px-1',
        itemLabel: 'font-bold'
      }
    }
  ],
  domains.map((d) => {
    const c = routes.find(r => r.name === d)
    return {
      children: () => {
        if (c.meta?.title !== 'Pockets')
          return
        return [
          [
            {
              icon: 'i-lucide-plus',
              kbds: ['meta', 'n'],
              label: 'New pocket',
              ui: {
                itemLeadingIcon: 'scale-120'
              }
            }
          ],
          [
            routes.find(r => r.path === '/backpack').children.map(c => ({
              icon: c.meta?.icon,
              label: c.meta?.title,
              to: { name: c?.name },
            }))
          ],
          {

          }
        ]
      },
      content: { sideOffset: -8 },
      icon: c.meta?.icon,
      label: c.meta?.title,
      to: `${slugRoot.value}/${c.meta?.slug}`
    }
  }),
  [
    {
      icon: 'mail',
      label: 'Inbox',
    }
  ],
  [
    {
      class: ' data-highlighted:before:bg-transparent -mt-[1px] -mb-[2px] flex items-center  size-full   max-h-10.5 py-0  overflow-hidden  font-medium   mr-4    ',
      icon: 'ui:none',
      label: 'Theme',
      slot: 'colormode' as const

    }
  ],
  [
    {
      children: [
        routes.find(r => r.path === '/support').children.map(r => ({
          icon: r.meta?.icon,
          label: r.meta?.title,
          to: r.path
        })),
        [
          {
            icon: 'i-lucide-circle-plus',
            label: 'More'
          }
        ]
      ],
      icon: 'i',
      label: 'Support',
      ui: {
        itemLeadingIcon: 'scale-130'
      }
    },
    {
      icon: 'gear',
      label: 'Settings',
      ui: {
        itemLeadingIcon: '**:stroke-[2]'
      }
    }
  ],
  [
    {
      icon: 'lucide:log-out',
      kbds: ['shift', 'meta', 'q'],
      label: 'Log out',
      ui: {
        itemLeadingIcon: '**:stroke-[2.2] scale-90'
      }
    }
  ]
])
</script>

<template>
  <UDropdownMenu
    :arrow="true"
    :content="{ align: 'end', alignOffset: -10 }"
    :items="items"
    :ui="{
      content: 'w-64 **:disabled:opacity-100',
      item: 'px-2',
    }"
  >
    <UButton icon="i-lucide-menu" color="neutral" variant="ghost" size="sm" square :ui="{ base: 'shadow-none open:btn-active open:bg-primary open:border-b3 open:noise', leadingIcon: ' **:stroke-[1.9]' }" />

    <template #colormode-trailing>
      <ColorMode />
    </template>
  </UDropdownMenu>
</template>