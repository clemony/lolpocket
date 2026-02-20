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
      icon: "",
    },
    slot: "summoner" as const,
    children: [
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "history",
        label: "Match History",
        to: buildSummonerRootPath(summoner.value),
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "lol:champ",
        label: "Champions",
        to: buildSummonerRootPath(summoner.value),
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "ui:pocket",
        label: "Pockets",
        to: buildSummonerRootPath(summoner.value),
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "live",
        label: "Live Match",
        to: buildSummonerRootPath(summoner.value),
      },
    ],
    ui: {
      linkLeadingAvatar:
        "shadow-xs opacity-90 size-5.5 border border-neutral/60",
    },
  }))

  return {
    ready,
    reset,
    setSummoner,
    summoner,
    currentSummonerNav,
  }
})
