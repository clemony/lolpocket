import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default defineAppConfig({

  ui: {
    colors: {
      ad: 'var(--color-ad)',
      b1: 'var(--color-b1)',
      b2: 'var(--color-b2)',
      b3: 'var(--color-b3)',
      bc: 'var(--color-bc)',
      domination: 'var(--color-domination)',
      inspiration: 'var(--color-inspiration)',
      nc: 'var(--color-primary)',
      neutral: 'var(--color-nc)',
      precision: 'var(--color-precision)',
      primary: 'var(--color-primary)',
      resolve: 'var(--color-resolve)',
      sorcery: 'var(--color-sorcery)',
      transparent: 'var(--color-transparent)'
    },
    badge: {
      variants: {
        color: {
          ad: '',
          base: '',
          neutral: '',
        },
        size: {
          lg: {
            base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
            leadingAvatarSize: '2xs',
            leadingIcon: 'size-5',
            trailingIcon: 'size-5'
          },
          md: {
            base: 'text-xs px-2 py-1 gap-1 rounded-md',
            leadingAvatarSize: '3xs',
            leadingIcon: 'size-4',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
            leadingAvatarSize: '3xs',
            leadingIcon: 'size-3.5',
            trailingIcon: 'size-3.5'
          },
          xl: {
            base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
            leadingAvatarSize: '2xs',
            leadingIcon: 'size-6',
            trailingIcon: 'size-6'
          },
          xs: {
            base: 'text-[10px]/3 px-1.5 py-0.5 gap-1 rounded-md',
            leadingAvatarSize: '3xs',
            leadingIcon: 'size-3.5',
            trailingIcon: 'size-3.5'
          }
        },
        square: {
          true: ''
        }
      },
      compoundVariants: [
        {
          color: 'ad',
          variant: 'solid',
          class: 'border-ad dark:font-bold light:font-semibold text-white border light:bg-ad/70 dark:bg-ad/90'
        }
      ]
    },
    button: {
      slots: {
        base: '',
      },
      variants: {
        color: {
          b2: '',
          b3: '',
          base: '',
          domination: '',
          neutral: '',
          primary: '',
          transparent: ''
        },
        variant: {
          solid: '',
          ghost: 'hover:noise active:noise focus-visible:noise  focus:outline-none disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
          outline: '',
        }
      },
      base: 'text-bc',
      compoundVariants: [
        {
          color: 'transparent',
          variant: 'solid',
          class: ''
        },
        {
          color: ['primary', 'b1', 'b2', 'b3'],
          variant: 'solid',
          class: 'noise bg-primary'
        },
        {
          color: 'base',
          variant: 'solid',
          class: 'noise bg-b1'
        },
        {
          color: 'b2',
          variant: 'solid',
          class: 'noise bg-b2'
        },
        {
          color: 'b3',
          variant: 'solid',
          class: 'noise bg-b3'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'noise bg-neutral'
        },

        {
          color: 'primary',
          variant: 'ghost',
          class: 'text-bc hover:bg-primary active:bg-primary focus-visible:bg-primary'
        },
        {
          color: 'base',
          variant: 'ghost',
          class: 'hover:b1 active:bg-primary focus-visible:bg-primary'
        },
      ]
    },
    popover: {
      slots: {
        content: `
         bg-b1/90 shadow-lg  backdrop-blur-md rounded-lg shadow-lg
          ring ring-b3 focus:outline-none pointer-events-auto
        `,
      },
    },
    separator: {
      variants: {
        color: {
          b2: {
            border: 'border-b2'
          },
          b3: {
            border: 'border-b3'
          },
          base: {
            border: 'border-b1'
          },
          nc: {
            border: 'border-nc'
          },
          neutral: {
            border: 'border-neutral'
          },
          primary: {
            border: 'border-primary'
          }
        },
      }
    },
    tabs: {
      slots: {
        indicator: '',
        list: 'rounded-xl ',
        trigger: 'cursor-pointer text-2',
      },
      variants: {
        variant: {
          pill: {
            indicator: 'rounded-lg shadow-sm shadow-black/6 border',
            list: 'border inset-shadow-xs inset-shadow-black/4',
            trigger: 'grow'
          },
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'pill',
          class: {
            indicator: 'bg-default border-b3',
            list: 'bg-primary noise border-b3/80 ',
            trigger: 'data-[state=active]:text-bc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          }
        },
      ]
    },
    tooltip: {
      slots: {
        arrow: 'fill-neutral/90',
        content: cn(
          'animate-none transition-none',
          'pointer-events-auto flex cursor-default flex gap-1 h-6 items-center gap-1 rounded-lg border-tint-neutral/30 bg-neutral/86 px-2 py-0.75 text-[0.9rem] font-medium text-nc shadow-md ring drop-shadow-sm ring-neutral inset-shadow-white/10 backdrop-blur-md select-none'
        ),
      },
    },
  },

  icon: {
    aliases: {
      // math
      'calc-solid': 'streamline:calculator-1-solid',
      'absolute': 'hugeicons:absolute',
      'add': 'lucide:plus',
      'calc': 'teenyicons:calculator-outline',
      'minus': 'lucide:minus',
      'sq-minus': 'lucide:square-minus',
      'sq-plus': 'lucide:square-plus',
      'weighted': 'tabler:math-integral-x',

      // check
      'check-fill': 'bi:check-circle-fill',
      'tick': 'lucide:check',
      'tick-sm': 'teenyicons:tick-small-outline',

      // arrow
      'arrow-curve-right': 'lucide:corner-down-right',
      'arrow-left': 'lucide:arrow-left',
      'arrow-ne': 'lucide:arrow-up-right',
      'arrow-right': 'lucide:arrow-right',
      'arrow-up': 'lucide:arrow-up',
      'caret-down': 'tabler:caret-down-filled',
      'caret-up': 'tabler:caret-up-filled',
      'down': 'lucide:chevron-down',
      'left': 'lucide:chevron-left',
      'left-from-line': 'lucide:arrow-left-from-line',
      'left-pipe': 'tabler:chevron-left-pipe',
      'left-to-line': 'lucide:arrow-left-to-line',
      'right': 'lucide:chevron-right',
      'right-from-line': 'lucide:arrow-right-from-line',
      'right-pipe': 'tabler:chevron-right-pipe',
      'right-to-line': 'lucide:arrow-right-to-line',
      'up': 'lucide:chevron-up',
      'up-down': 'lucide:chevrons-up-down',
      'up-to-line': 'lucide:arrow-up-to-line',
      'up-up': 'lucide:chevrons-up',

      // actions
      'copy': 'lucide:copy',
      'download': 'mingcute:download-2-line',
      'export': 'lucide:upload',
      'filter': 'lucide:list-filter',
      'lock': 'gg:lock',
      'log-in': 'lucide:log-in', // tabler:transfer-in in house
      'log-out': 'lucide:log-out', // tabler:transfer-out
      'open': 'radix-icons:open-in-new-window',
      'pin': 'iconoir:pin',
      'refresh': 'radix-icons:reload',
      'reset': 'lucide:refresh-cw',
      'search': 'lucide:search',
      'tag': 'lucide:tag',
      'tags': 'lucide:tags',
      'toggle': 'gg:toggle-off',
      'unlock': 'gg:lock-unlock',
      'unpin': 'iconoir:pin-slash',
      'update': 'radix-icons:update',

      // menu
      'gear-solid': 'ri:settings-4-fill',
      'gallery': 'lucide:gallery-vertical-end',
      'gear': 'solar:settings-linear',
      'handle': 'radix-icons:button',
      'lines': 'teenyicons:align-text-justify-outline',
      'menu': 'lucide:menu',
      'more': 'ri:more-line',
      'more-vertical': 'ri:more-2-line',
      'radio': 'formkit:radio',
      'settings': 'lucide:settings-2',

      // editing
      'archive': 'lucide:archive',
      'bold': 'lucide:bold',
      'clear': 'tabler:circle-half-vertical',
      'edit': 'material-symbols-light:edit-square-outline',
      'edit-line': 'lucide:pen-line',
      'erase': 'lucide:eraser',
      'h1': 'lucide:heading-1',
      'h2': 'lucide:heading-2',
      'italic': 'lucide:italic',
      'letter-text': 'lucide:letter-text',
      'paperclip': 'lucide:paperclip',
      'pencil': 'lucide:pencil',
      'save': 'lucide:save',
      'strikethrough': 'lucide:strikethrough',
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
      'image': 'lucide:image',
      'images': 'entypo:images',
      'next': 'teenyicons:next-solid',
      'pause': 'teenyicons:pause-solid',
      'play': 'teenyicons:play-solid',
      'shuffle': 'lucide:shuffle',

      // keys
      'win-key': 'streamline-logos:microsoft-windows-logo-3-solid',
      'x-solid': 'teenyicons:x-circle-solid',
      'and': 'lucide:ampersand',
      'backspace': 'cil:backspace',
      'command': 'lucide:command',
      'i': 'ion:information-sharp',
      'info': 'lucide:info',
      'shift': 'lucide:arrow-big-up-dash',
      'slash': 'heroicons:slash',
      'tab': 'hugeicons:arrow-right-03',
      'x': 'lucide:x',

      // symbol
      'alert': 'lucide:circle-alert',
      'ban': 'lucide:ban',
      'error': 'tabler:alert-circle',
      'warning': 'lucide:triangle-alert',

      // external / social
      'at': 'lucide:at-sign',
      'attach': 'meteor-icons:paperclip',
      'chain': 'hugeicons:link-02',
      'chat': 'lucide:message-square',
      'chat-dot': 'lucide:message-square-dot',
      'chat-dots': 'lucide:message-square-more',
      'chat-off': 'lucide:message-square-off',
      'chat-text': 'lucide:message-square-text',
      'chats': 'lucide:messages-square',
      'hash': 'lucide:hash',
      'link': 'lucide:external-link',
      'link-2': 'lucide:link-2',
      'link-sq': 'bx:link-external',
      'mail': 'lucide:mail',
      'mail-all': 'lucide:mails',
      'mail-fill': 'fluent:mail-32-filled',
      'mail-open': 'lucide:mail-open',
      'send': 'lucide:send',
      'share': 'lucide:share',
      'wifi': 'lucide:wifi',

      // logo
      'discord': 'simple-icons:discord',
      'github': 'ph:github-logo',
      'google': 'lineicons:google',
      'riot': 'simple-icons:riotgames',

      // shape
      'circle-big-dot': 'clarity:dot-circle-line',
      'circle-dot': 'lucide:circle-dot',
      'dot': 'lucide:dot',
      'heart': 'gg:heart',
      'heart-fill': 'teenyicons:heart-solid',
      'heart-sm': 'teenyicons:heart-small-solid',
      'heart-sm-outline': 'teenyicons:heart-small-outline',
      'infinity': 'iconoir:infinite',
      'round': 'mynaui:circle-solid',
      'shield': 'teenyicons:shield-tick-outline',
      'square': 'lucide:square',
      'star': 'ph:star',
      'star-fill': 'ph:star-fill',

      'key': 'lucide:key-round',
      'pin-solid': 'iconoir:pin-solid',
      'backpack': 'radix-icons:backpack',
      'bar-chart': 'lucide:chart-no-axes-column',
      'basket': 'lucide:shopping-basket',
      'bell-ring': 'lucide:bell-ring',
      'book': 'tabler:notebook', // 'lucide:book-marked',
      'bot': 'lucide:bot',
      'bot-chat': 'lucide:bot-message-square',
      'bow': 'mdi:bow-arrow',
      'calendar': 'lucide:calendar',
      'cart': 'lucide:shopping-cart',
      'cat': 'solar:cat-outline',
      'chart': 'lucide:bar-chart-3',
      'clock': 'lucide:clock',
      'compass': 'lucide:compass',
      'crown': 'gg:crown',
      'favorite': 'f7:square-favorites-alt',
      'history': 'lucide:history',
      'nexus': 'majesticons:atom-2',
      'paint-bucket': 'lucide:paint-bucket',
      'paintbrush': 'lucide:paintbrush-vertical',
      'panel-dash': 'lucide:panel-top-dashed',
      // pic
      'party': 'lucide:party-popper',
      'plug': 'tabler:plug',
      'shopping-bag': 'lucide:shopping-bag',
      'smile': 'lucide:smile',
      'swatch': 'lucide:swatch-book',
      'todo': 'lucide:list-todo',
      'up-face': 'iconoir:emoji-look-up',
      'user': 'lucide:user',
      'user-cog': 'lucide:user-cog',
      'user-square': 'lucide:square-user',
      // tabler:brand-juejin upside down league xp icon?
    },
    class: 'text-[var(--color-bc)] shrink-0 pointer-events-none',
    mode: 'svg',
    size: '16px'
  },
})
