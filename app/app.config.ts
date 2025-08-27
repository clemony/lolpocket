// CONFIG

export default defineAppConfig({
  theme: {},
  icon: {
    mode: 'svg',
    class: 'text-[var(--color-bc)] shrink-0 pointer-events-none',
    size: '15px',

    /*     customize: (content: string, name: string, prefix: string, provider: string) => {
      if (prefix !== 'lucide') {
        return content
      }
      return content.replace(/stroke-width="[^"]*"/g, `stroke-width="1.8"`)
    }, */
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
      'tick': 'lucide:check',
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
      'expand': 'lucide:arrow-right-from-line',
      'collapse': 'lucide:arrow-left-from-line',

      // actions
      'log-in': 'lucide:log-in',
      'log-out': 'lucide:log-out',
      'search': 'weui:search-outlined',
      'search-bold': 'weui:search-filled',
      'search-sm': 'teenyicons:search-small-outline',

      // menu
      'more': 'lucide:ellipsis',
      'more-vertical': 'lucide:ellipsis-vertical',
      'reset': 'mynaui:refresh',
      'settings': 'lucide:settings-2',
      'gear': 'lucide:settings',
      'gear-solid': 'ri:settings-4-fill',
      'nut': 'ph:nut',
      'nut-fill': 'ph:nut-fill',
      'update': 'radix-icons:update',
      'lines': 'teenyicons:align-text-justify-outline',
      'filter': 'lucide:list-filter',
      'refresh': 'radix-icons:reload',
      'copy': 'lucide:copy',
      'export': 'lucide:share',
      'menu': 'lucide:menu',
      'gallery': 'lucide:gallery-vertical-end',

      // editing
      'backspace': 'iconamoon:backspace-light',
      'edit': 'material-symbols-light:edit-square-outline',
      'edit-line': 'lucide:pen-line',
      'erase': 'radix-icons:eraser',
      'clip': 'teenyicons:attach-outline',
      'trash': 'lucide:trash-2',
      'archive': 'lucide:archive',

      // folder
      'folder-delete': 'lucide:folder-x',
      'folder-add': 'lucide:folder-plus',
      'folder-open': 'lucide:folder-closed',
      'folder': 'lucide:folder',
      'folder-documents': 'formkit:folder',
      'folders': 'lucide:folders',

      // media
      'fast-forward': 'material-symbols-light:fast-forward-outline-rounded',
      'shuffle': 'qlementine-icons:shuffle-16',
      'play': 'teenyicons:play-solid',
      'next': 'teenyicons:next-solid',
      'pause': 'teenyicons:pause-solid',

      // keys
      'shift': 'lucide:arrow-big-up-dash',
      'command': 'lucide:command',

      // symbol
      'alert': 'lucide:circle-alert',

      // external / social
      'at': 'lucide:at-sign',
      'hash': 'lucide:hash',
      'chat': 'lucide:message-square',
      'mail': 'lucide:mail',
      'mail-all': 'lucide:mails',
      'mail-fill': 'fluent:mail-32-filled',
      'mail-open': 'lucide:mail-open',
      'link': 'mingcute:external-link-line', // lucide:external-link
      'link-lg': 'radix-icons:external-link',
      'chain': 'ph:link-simple',
      'share': 'lucide:share',
      'send': 'lucide:send',
      'open': 'radix-icons:open-in-new-window',

      // logo
      'riot': 'simple-icons:riotgames',
      'discord': 'simple-icons:discord',
      'github': 'ph:github-logo',
      'google': 'lineicons:google',

      // simple
      'dot': 'lucide:dot',
      'circle-dot': 'lucide:circle-dot',
      'infinity': 'solar:infinity-outline',
      'shield': 'teenyicons:shield-tick-outline',
      'star': 'ph:star',
      'star-fill': 'ph:star-fill',
      'heart': 'ph:heart-straight',
      'heart-sm-fill': 'teenyicons:heart-small-solid',
      'heart-sm': 'teenyicons:heart-small-outline',

      // pic
      'pin': 'iconoir:pin',
      'pin-solid': 'iconoir:pin-solid',
      'key': 'lucide:key-round',
      'bow': 'mdi:bow-arrow',
      'swatch': 'lucide:swatch-book',
      'cat': 'streamline-cyber:cat-2',
      'plug': 'tabler:plug',
      'tag': 'lucide:tag',
      'up-face': 'iconoir:emoji-look-up',
      'image': 'lucide:image',
      'images': 'entypo:images',
      'nexus': 'lucide:atom',
      'clock': 'lucide:clock',
      'chart': 'lucide:bar-chart-3',
      'backpack': 'radix-icons:backpack',
      'book': 'teenyicons:book-outline',
      'history': 'lucide:history',
    },
  },
})
