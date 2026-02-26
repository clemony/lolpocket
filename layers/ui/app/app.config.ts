import { icon } from "./icon-index"
import * as ui from "./theme/index"
export default defineAppConfig({
  icon,
  ui: {
    ...ui,

    //chevronRight: "i-heroicons-slash",
    icons: {
      chevronDown: "i-lucide-chevrons-up-down",
      check: "i-lucide-check",
      external: "i-lucide-external-link",
    },
  },
})
