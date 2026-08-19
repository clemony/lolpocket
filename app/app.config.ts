import { icon } from "../layers/ui/app/icon-index"
import { colors } from "../layers/ui/app/theme/colors"
import * as ui from "../layers/ui/app/theme/index"

const uiColors = Object.fromEntries(colors.map((color) => [color, color]))

export default defineAppConfig({
  icon,
  ui: {
    ...ui,
    colors: uiColors,

    icons: {
      chevronDown: "i-lucide-chevron-up",
      check: "i-lucide-check",
      external: "i-lucide-external-link",
      loading: "i-mingcute-loading-fill",
    },
  },
})
