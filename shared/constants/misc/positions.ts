import All from "~/assets/icons/lp/all.svg"
import Bot from "~/assets/icons/lp/bot.svg"
import Jungle from "~/assets/icons/lp/jungle.svg"
import Mid from "~/assets/icons/lp/mid.svg"
import Support from "~/assets/icons/lp/support.svg"
import Top from "~/assets/icons/lp/top.svg"

export interface TeamPosition {
  color: string
  label: string
  icon: string
  svg: string
}

export const teamPositions: Record<string, TeamPosition> = {
  all: {
    color: "var(--color-n5)",
    label: "all",
    icon: "i-lp-all",
    svg: All,
  },
  top: {
    color: "var(--color-domination)",
    label: "top",
    icon: "i-lp-top",
    svg: Top,
  },
  jungle: {
    color: "var(--color-res)",
    label: "jungle",
    icon: "i-lp-jungle",
    svg: Jungle,
  },
  mid: {
    color: "var(--color-sorc)",
    label: "mid",
    icon: "i-lp-mid",
    svg: Mid,
  },
  bot: {
    color: "var(--color-pre)",
    label: "bot",
    icon: "i-lp-bot",
    svg: Bot,
  },
  support: {
    color: "var(--color-insp)",
    label: "support",
    icon: "i-lp-support",
    svg: Support,
  },
}
