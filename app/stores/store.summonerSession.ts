import { buildSummonerRootPath } from "~/domain/summoner/utils/route"
import { getSummonerIcon } from "~/domain/utils/img"

export const sSession = defineStore("summonerSession", () => {
  const summoner = shallowRef<Summoner | null>(null)
  const ready = ref(false)

  function reset() {
    summoner.value = null
    ready.value = false
  }

  function setSummoner(next: Summoner) {
    summoner.value = { ...next } // snapshot, not reference
    ready.value = true
  }

  const currentSummonerNav = computed(() => ({
    label: summoner.value?.name,
    to: buildSummonerRootPath(summoner.value),
    avatar: {
      src: getSummonerIcon(summoner.value?.icon),
      icon: ""
    },
    slot: "summoner" as const,
    children: [
      {
        icon: "i-history",
        label: "Match History",
        to: buildSummonerRootPath(summoner.value)
      },
      {
        icon: "i-lp-champ-circle",
        label: "Champions",
        slot: "champions" as const,
        to: `${buildSummonerRootPath(summoner.value)}/champions`,
        ui: {
          leadingIcon: "scale-105 **:stroke-[1.2] opacity-80"
        }
      },
      {
        icon: "i-folder",
        label: "Pockets",
        to: `${buildSummonerRootPath(summoner.value)}/pockets`
      },
      {
        icon: "i-lucide-rss",
        label: "Live Match",
        slot: "live" as const,
        to: `${buildSummonerRootPath(summoner.value)}/live`,
        ui: {
          leadingIcon: "scale-92 -translate-y-[0.5px]"
        }
      }
    ],
    ui: {
      linkLeadingAvatar:
        "shadow-xs opacity-90 size-5.5 border border-neutral/60"
    }
  }))

  return {
    ready,
    reset,
    setSummoner,
    summoner,
    currentSummonerNav
  }
})
