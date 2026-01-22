import { floatingShiftSubtle, sizeVariants, variantVariants } from "@ui"

export default defineAppConfig({
  ui: {
    variants: {
      variants: { ...variantVariants },
    },
    //
    colors: {
      b1: "var(--color-default)",
      b2: "var(--color-primary-100)",
      b3: "var(--color-primary-200",
      bc: "var(--color-bc",
      primary: "var(--color-primary-50)",
      neutral: "var(--color-primary-950)",
      nc: "var(--color-primary-300",
      inspiration: "var(--color-inspiration-300)",
      resolve: "var(--color-resolve-400)",
      sorcery: "var(--color-sorcery-500)",
      domination: "var(--color-domination-500)",
      precision: "var(--color-precision-300)",
    },
    popover: {
      slots: {
        content: `
         bg-default/90 shadow-lg  backdrop-blur-md rounded-lg shadow-lg
          ring ring-neutral/40 focus:outline-none pointer-events-auto
          ${floatingShiftSubtle}
        `,
      },
    },
    tooltip: {
      slots: {
        content: `
          flex items-center ring-neutral h-max max-h-80 max-w-104 border-tint-neutral/30 inset-shadow-white/10 bg-neutral/86 text-nc gap-1 backdrop-blur-sm p-0 shadow-sm rounded-lg ring cursor-default select-none pointer-events-auto
          ${floatingShiftSubtle}
          `,
        arrow: "fill-neutral/90 scale-y-140 scale-x-180",
      },
    },
  },

  icon: {
    aliases: {
      // math
      "calc-solid": "streamline:calculator-1-solid",
      absolute: "hugeicons:absolute",
      add: "lucide:plus",
      "sq-plus": "lucide:square-plus",
      "sq-minus": "lucide:square-minus",
      calc: "teenyicons:calculator-outline",
      minus: "lucide:minus",
      weighted: "tabler:math-integral-x",

      // check
      "check-fill": "bi:check-circle-fill",
      tick: "lucide:check",
      "tick-sm": "teenyicons:tick-small-outline",

      // arrow
      "arrow-curve-right": "lucide:corner-down-right",
      "arrow-left": "lucide:arrow-left",
      "arrow-ne": "lucide:arrow-up-right",
      "arrow-right": "lucide:arrow-right",
      "arrow-up": "lucide:arrow-up",
      "left-from-line": "lucide:arrow-left-from-line",
      "right-from-line": "lucide:arrow-right-from-line",
      "right-to-line": "lucide:arrow-right-to-line",
      "left-to-line": "lucide:arrow-left-to-line",
      down: "tabler:chevron-down",
      "caret-down": "tabler:caret-down-filled",
      left: "tabler:chevron-left",
      "left-pipe": "tabler:chevron-left-pipe",
      right: "tabler:chevron-right",
      "right-pipe": "tabler:chevron-right-pipe",
      select: "lucide:chevrons-up-down",
      up: "tabler:chevron-up",
      "up-up": "tabler:chevrons-up",
      "caret-up": "tabler:caret-up-filled",
      "up-to-line": "lucide:arrow-up-to-line",

      // actions
      copy: "lucide:copy",
      download: "mingcute:download-2-line",
      export: "lucide:upload",
      filter: "lucide:list-filter",
      lock: "gg:lock",
      "log-in": "lucide:log-in", // tabler:transfer-in in house
      "log-out": "lucide:log-out", // tabler:transfer-out
      open: "radix-icons:open-in-new-window",
      pin: "iconoir:pin",
      refresh: "radix-icons:reload",
      reset: "lucide:refresh-ccw",
      search: "lucide:search",
      tag: "lucide:tag",
      tags: "lucide:tags",
      toggle: "gg:toggle-off",
      unlock: "gg:lock-unlock",
      unpin: "iconoir:pin-slash",
      update: "radix-icons:update",

      // menu
      "gear-solid": "ri:settings-4-fill",
      gallery: "lucide:gallery-vertical-end",
      gear: "solar:settings-linear",
      lines: "teenyicons:align-text-justify-outline",
      menu: "lucide:menu",
      more: "ri:more-line",
      "more-vertical": "ri:more-2-line",
      settings: "lucide:settings-2",
      handle: "radix-icons:button",
      radio: "formkit:radio",

      // editing
      archive: "lucide:archive",
      bold: "lucide:bold",
      clear: "tabler:circle-half-vertical",
      edit: "material-symbols-light:edit-square-outline",
      "edit-line": "lucide:pen-line",
      erase: "lucide:eraser",
      h1: "lucide:heading-1",
      h2: "lucide:heading-2",
      italic: "lucide:italic",
      "letter-text": "lucide:letter-text",
      paperclip: "lucide:paperclip",
      pencil: "lucide:pencil",
      save: "lucide:save",
      strikethrough: "lucide:strikethrough",
      trash: "lucide:trash-2",

      // folder
      folder: "lucide:folder",
      "folder-add": "lucide:folder-plus",
      "folder-delete": "lucide:folder-x",
      "folder-documents": "formkit:folder",
      "folder-open": "lucide:folder-closed",
      folders: "lucide:folders",

      // media
      "exit-fullscreen": "lucide:scan-line",
      "fast-forward": "material-symbols-light:fast-forward-outline-rounded",
      fullscreen: "lucide:maximize",
      image: "lucide:image",
      images: "entypo:images",
      next: "teenyicons:next-solid",
      pause: "teenyicons:pause-solid",
      play: "teenyicons:play-solid",
      shuffle: "lucide:shuffle",

      // keys
      "win-key": "streamline-logos:microsoft-windows-logo-3-solid",
      "x-solid": "teenyicons:x-circle-solid",
      and: "lucide:ampersand",
      backspace: "cil:backspace",
      command: "lucide:command",
      i: "ion:information-sharp",
      info: "lucide:info",
      shift: "lucide:arrow-big-up-dash",
      slash: "heroicons:slash",
      tab: "hugeicons:arrow-right-03",
      x: "lucide:x",

      // symbol
      alert: "lucide:circle-alert",
      ban: "lucide:ban",
      error: "tabler:alert-circle",
      warning: "lucide:triangle-alert",

      // external / social
      at: "lucide:at-sign",
      attach: "meteor-icons:paperclip",
      chain: "hugeicons:link-02",
      chat: "lucide:message-square",
      "chat-dot": "lucide:message-square-dot",
      "chat-dots": "lucide:message-square-more",
      "chat-off": "lucide:message-square-off",
      "chat-text": "lucide:message-square-text",
      chats: "lucide:messages-square",
      hash: "lucide:hash",
      link: "lucide:external-link",
      "link-2": "lucide:link-2",
      "link-sq": "bx:link-external",
      mail: "lucide:mail",
      "mail-all": "lucide:mails",
      "mail-fill": "fluent:mail-32-filled",
      "mail-open": "lucide:mail-open",
      send: "lucide:send",
      share: "lucide:share",
      wifi: "lucide:wifi",

      // logo
      discord: "simple-icons:discord",
      github: "ph:github-logo",
      google: "lineicons:google",
      riot: "simple-icons:riotgames",

      // shape
      "circle-big-dot": "clarity:dot-circle-line",
      "circle-dot": "lucide:circle-dot",
      round: "mynaui:circle-solid",
      dot: "lucide:dot",
      heart: "gg:heart",
      "heart-fill": "teenyicons:heart-solid",
      "heart-sm": "teenyicons:heart-small-solid",
      "heart-sm-outline": "teenyicons:heart-small-outline",
      infinity: "iconoir:infinite",
      shield: "teenyicons:shield-tick-outline",
      square: "lucide:square",
      star: "ph:star",
      "star-fill": "ph:star-fill",

      // pic
      party: "lucide:party-popper",
      key: "lucide:key-round",
      "pin-solid": "iconoir:pin-solid",
      backpack: "radix-icons:backpack", // 'radix-icons:backpack',
      "bar-chart": "lucide:chart-no-axes-column",
      basket: "lucide:shopping-basket",
      "bell-ring": "lucide:bell-ring",
      book: "tabler:notebook", // 'lucide:book-marked',
      bot: "lucide:bot",
      "bot-chat": "lucide:bot-message-square",
      bow: "mdi:bow-arrow",
      calendar: "lucide:calendar",
      cart: "lucide:shopping-cart",
      cat: "solar:cat-outline",
      chart: "lucide:bar-chart-3",
      clock: "lucide:clock",
      compass: "lucide:compass",
      crown: "gg:crown",
      favorite: "f7:square-favorites-alt",
      history: "lucide:history",
      nexus: "majesticons:atom-2",
      "paint-bucket": "lucide:paint-bucket",
      paintbrush: "lucide:paintbrush-vertical",
      "panel-dash": "lucide:panel-top-dashed",
      plug: "tabler:plug",
      "shopping-bag": "lucide:shopping-bag",
      smile: "lucide:smile",
      swatch: "lucide:swatch-book",
      todo: "lucide:list-todo",
      "up-face": "iconoir:emoji-look-up",
      user: "lucide:user",
      "user-cog": "lucide:user-cog",
      "user-square": "lucide:square-user",

      // 'boot': 'hugeicons:armored-boot',
      // tabler:brand-juejin upside down league xp icon?
    },
    class: "text-[var(--color-bc)] shrink-0 pointer-events-none",
    mode: "svg",
    size: "15px",
  },
  theme: {},
})
