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

  const currentSummonerNavItem = computed(() => ({
    label: summoner.value?.name,
    to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
    avatar: {
      src: getSummonerIcon(summoner.value?.icon),
      icon: "",
    },
    children: [
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "history",
        label: "Match History",
        to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "lol:champ",
        label: "Champions",
        to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "ui:pocket",
        label: "Pockets",
        to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
      },
      {
        description: "Fully styled and customizable components for Nuxt.",
        icon: "live",
        label: "Live Match",
        to: `/summoner/${summoner.value?.region}/${summoner.value?.name}_${summoner.value?.tag}`,
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
    currentSummonerNavItem,
  }
})
