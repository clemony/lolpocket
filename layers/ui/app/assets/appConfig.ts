import img from "./icons/icon-img.json"
import symbols from "./icons/icon-symbols.json"
import badge from "./variants/badge"
import breadcrumb from "./variants/breadcrumb"
import button from "./variants/button"
import card from "./variants/card"
import checkboxGroup from "./variants/checkbox-group"
import chip from "./variants/chip"
import colors from "./variants/colors"
import command from "./variants/command-palette"
import dropdownMenu from "./variants/dropdown-menu"
import input from "./variants/input"
import kbd from "./variants/kbd"
import modal from "./variants/modal"
import navigationMenu from "./variants/navigation-menu"
import pageSection from "./variants/page-section"
import popover from "./variants/popover"
import separator from "./variants/separator"
import tabs from "./variants/tabs"
import textArea from "./variants/text-area"
import toast from "./variants/toast"
import tooltip from "./variants/tooltip"
import user from "./variants/user"

export const appConfig = {
  icon: {
    class: "text-[var(--color-pc)] shrink-0 pointer-events-none",
    mode: "svg",
    size: "16px",
    aliases: {
      ...symbols,
      ...img,
    },
  },
  ui: {
    ...checkboxGroup,
    ...textArea,
    ...pageSection,
    ...user,
    ...input,
    ...breadcrumb,
    ...command,
    ...modal,
    ...card,
    ...chip,
    ...user,
    ...dropdownMenu,
    ...badge,
    ...kbd,
    ...colors,
    ...navigationMenu,
    ...tooltip,
    ...tabs,
    ...toast,
    ...separator,
    ...popover,
    ...button,
  },
}
