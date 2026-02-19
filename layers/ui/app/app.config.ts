import { icon } from "./assets/icons/index.icons"
import * as ui from "./theme/index"
export default defineAppConfig({
  icon,
  ui: {
    ...ui,

    icons: {
      chevronDown: "i-lucide-chevrons-up-down",
      //chevronRight: "i-heroicons-slash",
      check: "i-lucide-check",
      external: "i-lucide-external-link",
    },
  },
})
