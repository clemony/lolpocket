export default defineAppConfig({
  theme: {},
  icon: {
    mode: 'svg',
    class: 'text-[var(--color-bc)] shrink-0 pointer-events-none',
    size: '15px',

    customize: (content: string, name: string, prefix: string, provider: string) => {
      if (prefix !== 'lucide') {
        return content // No changes for non-Lucide icons
      }
      // Apply stroke-width only for Lucide icons
      return content.replace(/stroke-width="[^"]*"/g, `stroke-width="1.8"`)
    },
    aliases: {
      // math
      'add': 'teenyicons:add-outline',
      'add-sm': 'teenyicons:add-small-outline',
      'add-sq-outline': 'basil:add-outline',
      'minus-sm': 'teenyicons:minus-small-outline',
      'calc': 'teenyicons:calculator-outline',
      'calc-solid': 'streamline:calculator-1-solid',
      'minus': 'radix-icons:minus',
      'absolute': 'hugeicons:absolute',
      'weighted': 'tabler:math-integral-x',

      // letters
      'x-sm': 'teenyicons:x-small-outline',
      'x': 'teenyicons:x-outline',
      'and': 'mynaui:ampersand',
      'x-solid': 'teenyicons:x-circle-solid',
      'info': 'teenyicons:info-outline',
      'info-circle': 'mdi:information-slab-circle-outline',
      'slash': 'radix-icons:slash',

      // check
      'tick': 'teenyicons:tick-outline',
      'tick-sm': 'teenyicons:tick-small-outline',
      'check-fill': 'bi:check-circle-fill',

      // arrow
      'down': 'ph:caret-up',
      'up': 'ph:caret-up',
      'down-sm': 'teenyicons:down-small-outline',
      'right-sm': 'teenyicons:right-small-outline',
      'left-sm': 'teenyicons:left-small-outline',
      'right': 'ph:caret-right',
      'left': 'ph:caret-left',
      'up-sm': 'teenyicons:up-small-outline',
      'select': 'radix-icons:caret-sort',
      'arrow-up': 'teenyicons:arrow-up-small-outline',
      'arrow-left': 'mynaui:arrow-left',
      'arrow-right': 'mynaui:arrow-right',
      'popover-caret': 'fa:caret-down',
      'popover-caret-up': 'fa:caret-up',

      // menu
      'search': 'weui:search-outlined',
      'search-bold': 'weui:search-filled',
      'search-sm': 'teenyicons:search-small-outline',
      'more': 'lucide:ellipsis',
      'more-v': 'radix-icons:dots-vertical',
      'reset': 'mynaui:refresh',
      'gear': 'lucide:settings',
      'gear-solid': 'ri:settings-4-fill',
      'nut': 'ph:nut',
      'nut-fill': 'ph:nut-fill',
      'update': 'radix-icons:update',
      'lines': 'teenyicons:align-text-justify-outline',
      'filter': 'teenyicons:filter-outline',
      'refresh': 'radix-icons:reload',
      'copy': 'radix-icons:copy',
      'export': 'radix-icons:share-2',
      'menu': 'lucide:menu',
      'gallery': 'lucide:gallery-vertical-end',

      // editing
      'backspace': 'iconamoon:backspace-light',
      'edit': 'material-symbols-light:edit-square-outline',
      'erase': 'radix-icons:eraser',
      'pin': 'iconoir:pin',
      'pin-solid': 'iconoir:pin-solid',
      'clip': 'teenyicons:attach-outline',
      'trash': 'streamline:recycle-bin-2',
      'archive': 'teenyicons:archive-outline',

      // folder
      'x-folder': 'teenyicons:folder-x-outline',
      'add-folder': 'teenyicons:folder-plus-outline',
      'folder': 'formkit:folder',
      'folders': 'teenyicons:folders-outline',

      // media
      'fast-forward': 'material-symbols-light:fast-forward-outline-rounded',
      'shuffle': 'qlementine-icons:shuffle-16',
      'play': 'teenyicons:play-solid',
      'next': 'teenyicons:next-solid',
      'pause': 'teenyicons:pause-solid',

      // external / social
      'at': 'lucide:at-sign',
      'hash': 'lucide:hash',
      'riot': 'simple-icons:riotgames',
      'discord': 'simple-icons:discord',
      'github': 'ph:github-logo',
      'google': 'lineicons:google',
      'id-card': 'icon-park-twotone:id-card-v',
      'mail': 'fluent:mail-32-regular',
      'mail-fill': 'fluent:mail-32-filled',
      'mail-open': 'fluent:mail-read-32-regular',
      'link': 'mingcute:external-link-line', // lucide:external-link
      'link-lg': 'radix-icons:external-link',
      'chain': 'ph:link-simple',
      'share': 'iconoir:send-diagonal',
      'open': 'radix-icons:open-in-new-window',

      // simple
      'dot': 'radix-icons:dot-filled',
      'infinity': 'solar:infinity-outline',
      'shield': 'teenyicons:shield-tick-outline',
      'star': 'ph:star',
      'star-fill': 'ph:star-fill',
      'heart': 'ph:heart-straight',
      'heart-sm-fill': 'teenyicons:heart-small-solid',
      'heart-sm': 'teenyicons:heart-small-outline',

      // pic
      'bow': 'mdi:bow-arrow',
      'cat': 'streamline-cyber:cat-2',
      'plug': 'tabler:plug',
      'tag': 'lucide:tag',
      'pocket': 'iconamoon:briefcase-light',
      'up-face': 'iconoir:emoji-look-up',
      'images': 'entypo:images',
      'picture': 'radix-icons:image',
      'nexus': 'clarity:atom-solid',
      'clock': 'radix-icons:clock',
      'chart': 'uis:analytics',
      'backpack': 'radix-icons:backpack',
      'lol-backpack': 'lp-lol:backpack',
      'book': 'teenyicons:book-outline',
      'history': 'lucide:history',
    },
  },
})
