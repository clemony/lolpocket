// CONFIG app

export default defineAppConfig({
  icon: {
    class: 'text-[var(--color-bc)] shrink-0 pointer-events-none',
    mode: 'svg',
    size: '15px',

    /*     customize: (content: string, name: string, prefix: string, provider: string) => {
      if (prefix !== 'lucide') {
        return content
      }
      return content.replace(/stroke-width="[^"]*"/g, `stroke-width="1.8"`)
    }, */
    aliases: {
      // math
      'calc-solid': 'streamline:calculator-1-solid',
      'absolute': 'hugeicons:absolute',
      'add': 'lucide:plus',
      'add-sq-outline': 'lucide:square-plus',
      'calc': 'teenyicons:calculator-outline',
      'minus': 'lucide:minus',
      'weighted': 'tabler:math-integral-x',

      // letters
      'x-solid': 'teenyicons:x-circle-solid',
      'and': 'lucide:ampersand',
      'i': 'ion:information-sharp',
      'info': 'lucide:info',
      'slash': 'lucide:slash',
      'x': 'lucide:x',
      'x-sm': 'lucide:x',

      // check
      'check-fill': 'bi:check-circle-fill',
      'tick': 'lucide:check',
      'tick-sm': 'teenyicons:tick-small-outline',

      // arrow
      'arrow-left': 'lucide:arrow-left',
      'arrow-right': 'lucide:arrow-right',
      'arrow-up': 'lucide:arrow-up',
      'collapse': 'lucide:arrow-left-from-line',
      'down': 'tabler:chevron-down',
      'down-fill': 'tabler:caret-down-filled',
      'expand': 'lucide:arrow-right-from-line',
      'left': 'tabler:chevron-left',
      'left-pipe': 'tabler:chevron-left-pipe',
      'right': 'tabler:chevron-right',
      'right-pipe': 'tabler:chevron-right-pipe',
      'select': 'lucide:chevrons-up-down',
      'up': 'tabler:chevron-up',
      'up-fill': 'tabler:caret-up-filled',

      // actions
      'copy': 'lucide:copy',
      'export': 'lucide:upload',
      'filter': 'lucide:list-filter',
      'log-in': 'lucide:log-in', // tabler:transfer-in in house
      'log-out': 'lucide:log-out', // tabler:transfer-out
      'open': 'iconoir:open-in-window',
      'pin': 'iconoir:pin',
      'refresh': 'radix-icons:reload',
      'reset': 'lucide:refresh-ccw',
      'search': 'tabler:search',
      'tag': 'lucide:tag',
      'tags': 'lucide:tags',
      'unpin': 'iconoir:pin-slash',
      'update': 'radix-icons:update',

      // menu
      'gear-solid': 'ri:settings-4-fill',
      'gallery': 'lucide:gallery-vertical-end',
      'gear': 'lucide:settings',
      'lines': 'teenyicons:align-text-justify-outline',
      'menu': 'lucide:menu',
      'more': 'ri:more-line',
      'more-vertical': 'ri:more-2-line',
      'nut': 'ph:nut',
      'nut-fill': 'ph:nut-fill',
      'settings': 'lucide:settings-2',

      // editing
      'archive': 'lucide:archive',
      'backspace': 'cil:backspace',
      'clear': 'tabler:circle-half-vertical',
      'edit': 'material-symbols-light:edit-square-outline',
      'edit-line': 'lucide:pen-line',
      'erase': 'lucide:eraser',
      'paperclip': 'lucide:paperclip',
      'trash': 'lucide:trash-2',

      // folder
      'folder': 'lucide:folder',
      'folder-add': 'lucide:folder-plus',
      'folder-delete': 'lucide:folder-x',
      'folder-documents': 'formkit:folder',
      'folder-open': 'lucide:folder-closed',
      'folders': 'lucide:folders',

      // media
      'exit-fullscreen': 'lucide:scan-line',
      'fast-forward': 'material-symbols-light:fast-forward-outline-rounded',
      'fullscreen': 'lucide:maximize',
      'next': 'teenyicons:next-solid',
      'pause': 'teenyicons:pause-solid',
      'play': 'teenyicons:play-solid',
      'shuffle': 'qlementine-icons:shuffle-16',

      // keys
      'command': 'lucide:command',
      'shift': 'lucide:arrow-big-up-dash',

      // symbol
      'alert': 'lucide:circle-alert',

      // external / social
      'at': 'lucide:at-sign',
      'attach': 'meteor-icons:paperclip',
      'chain': 'hugeicons:link-02',
      'chat': 'lucide:message-square',
      'hash': 'lucide:hash',
      'link': 'lucide:external-link',
      'mail': 'lucide:mail',
      'mail-all': 'lucide:mails',
      'mail-fill': 'fluent:mail-32-filled',
      'mail-open': 'lucide:mail-open',
      'send': 'lucide:send',
      'share': 'lucide:share',

      // logo
      'discord': 'simple-icons:discord',
      'github': 'ph:github-logo',
      'google': 'lineicons:google',
      'riot': 'simple-icons:riotgames',

      // simple
      'circle-dot': 'lucide:circle-dot',
      'dot': 'lucide:dot',
      'heart': 'ph:heart-straight',
      'heart-sm': 'teenyicons:heart-small-outline',
      'heart-sm-fill': 'teenyicons:heart-small-solid',
      'infinity': 'solar:infinity-outline',
      'shield': 'teenyicons:shield-tick-outline',
      'star': 'ph:star',
      'star-fill': 'ph:star-fill',

      // pic
      'key': 'lucide:key-round',
      'pin-solid': 'iconoir:pin-solid',
      'backpack': 'tabler:briefcase', // 'radix-icons:backpack',
      'book': 'tabler:notebook', // 'lucide:book-marked',
      'bow': 'mdi:bow-arrow',
      'cat': 'lucide:cat',
      'cat-geo': 'streamline-cyber:cat-2',
      'chart': 'lucide:bar-chart-3',
      'clock': 'lucide:clock',
      'history': 'lucide:history',
      'image': 'lucide:image',
      'images': 'entypo:images',
      'nexus': 'lucide:atom',
      'plug': 'tabler:plug',
      'swatch': 'lucide:swatch-book',
      'up-face': 'iconoir:emoji-look-up',

      // 'boot': 'hugeicons:armored-boot',
      // tabler:brand-juejin upside down league xp icon?
    },
  },
  theme: {},
})
