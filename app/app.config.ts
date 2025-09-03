// CONFIG app

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
      'add': 'lucide:plus',
      'add-sq-outline': 'lucide:square-plus',
      'calc': 'teenyicons:calculator-outline',
      'calc-solid': 'streamline:calculator-1-solid',
      'minus': 'lucide:minus',
      'absolute': 'hugeicons:absolute',
      'weighted': 'tabler:math-integral-x',

      // letters
      'x-sm': 'lucide:x',
      'x': 'lucide:x',
      'and': 'lucide:ampersand',
      'x-solid': 'teenyicons:x-circle-solid',
      'info': 'lucide:info',
      'info-circle': 'lucide:info',
      'slash': 'lucide:slash',

      // check
      'tick': 'lucide:check',
      'tick-sm': 'teenyicons:tick-small-outline',
      'check-fill': 'bi:check-circle-fill',

      // arrow
      'down': 'tabler:chevron-down',
      'up': 'tabler:chevron-up',
      'right': 'tabler:chevron-right',
      'left': 'tabler:chevron-left',
      'down-fill': 'tabler:caret-down-filled',
      'up-fill': 'tabler:caret-up-filled',
      'right-pipe': 'tabler:chevron-right-pipe',
      'left-pipe': 'tabler:chevron-left-pipe',
      'select': 'lucide:chevrons-up-down',
      'arrow-up': 'lucide:arrow-up',
      'arrow-left': 'lucide:arrow-left',
      'arrow-right': 'lucide:arrow-right',
      'expand': 'lucide:arrow-right-from-line',
      'collapse': 'lucide:arrow-left-from-line',

      // actions
      'log-in': 'lucide:log-in', // tabler:transfer-in in house
      'log-out': 'lucide:log-out', // tabler:transfer-out
      'search': 'tabler:search',
      'open': 'iconoir:open-in-window',
      'update': 'radix-icons:update',
      'filter': 'lucide:list-filter',
      'refresh': 'radix-icons:reload',
      'copy': 'lucide:copy',
      'export': 'lucide:share',
      'tag': 'lucide:tag',
      'tags': 'lucide:tags',
      'pin': 'iconoir:pin',
      'unpin': 'iconoir:pin-slash',

      // menu
      'more': 'ri:more-line',
      'more-vertical': 'ri:more-2-line',
      'reset': 'mynaui:refresh',
      'settings': 'lucide:settings-2',
      'gear': 'lucide:settings',
      'gear-solid': 'ri:settings-4-fill',
      'nut': 'ph:nut',
      'nut-fill': 'ph:nut-fill',
      'lines': 'teenyicons:align-text-justify-outline',
      'menu': 'lucide:menu',
      'gallery': 'lucide:gallery-vertical-end',

      // editing
      'backspace': 'tabler:backspace',
      'edit': 'material-symbols-light:edit-square-outline',
      'edit-line': 'lucide:pen-line',
      'erase': 'lucide:eraser',
      'clear': 'tabler:circle-half-vertical',
      'paperclip': 'lucide:paperclip',
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
      'link': 'mingcute:external-link-line', // lucide:external-link tabler:external-link
      'link-lg': 'radix-icons:external-link',
      'chain': 'ph:link-simple', // 'tabler:link' uil:link-alt
      'share': 'lucide:share',
      'send': 'lucide:send',

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
      'pin-solid': 'iconoir:pin-solid',
      'key': 'lucide:key-round',
      'bow': 'mdi:bow-arrow',
      'swatch': 'lucide:swatch-book',
      'cat-geo': 'streamline-cyber:cat-2',
      'cat': 'lucide:cat',
      'plug': 'tabler:plug',
      'up-face': 'iconoir:emoji-look-up',
      'image': 'lucide:image',
      'images': 'entypo:images',
      'nexus': 'lucide:atom',
      'clock': 'lucide:clock',
      'chart': 'lucide:bar-chart-3',
      'backpack': 'tabler:briefcase', // 'radix-icons:backpack',
      'book': 'tabler:notebook', // 'lucide:book-marked',
      'history': 'lucide:history',

      // 'boot': 'hugeicons:armored-boot',
      // tabler:brand-juejin upside down league xp icon?
    },
  },
})
