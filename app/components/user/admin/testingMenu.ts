import { LazyLogin } from "#components"
import { heyGoodJob } from "~/domain/lp/ui/good-job"
import { useSignOut } from "../../user/auth/useAuth"
export const testingMenu = computed(() => {
  console.log(
    "🥸 - findSummoner - summonerAccounts():",
    summonerAccounts().accounts
  )

  const toast = useToast()
  function toasty() {
    toast.add({
      color: "neutral",
      orientation: "horizontal",
      title: `Created Toast!`,
      description: `There’s something strangely evocative about the smell of burnt toast. You can probably remember the last time you suddenly detected it and dashed for the grill.

But did you know there’s a part of your brain specifically dedicated to smelling burnt toast?

In 1950, Canadian Dr Wilder Penfield was working on a treatment for cerebral seizures that worked by zapping particular nerve cells with electrical probes. One of his patients was a woman with epilepsy who smelled burnt toast whenever she was about to have a seizure. ${getRandom(heyGoodJob)}!`,
      icon: "x"
    })
  }

  const command = inject<Record<string, () => void>>("command")

  function close() {
    if (command && command.close) command.close()
  }

  const overlay = useOverlay()
  const login = overlay.create(LazyLogin)

  return {
    label: "Testing",
    icon: "i-uil-flask",
    ui: {
      itemLabel: "capitalize",
      itemLeadingIcon: "**:stroke-[2.4] scale-110"
    },
    children: [
      {
        label: "Fetch User Data",
        icon: "i-lucide-helicopter",
        onSelect: () => accountFetch()
      },
      {
        icon: "i-lucide-box",
        label: "Log Summoner Cache",
        onSelect: () => console.log("summoner:", sSummoner().cache)
      },
      {
        label: "Sign Out",
        icon: "i-log-out",
        onSelect: () => {
          close()
          useSignOut()
        }
      },
      {
        label: "Open Login",
        icon: "i-log-in",
        onSelect: () => {
          close()
          return login.open()
        }
      },
      {
        icon: "i-tabler-bread",
        label: "Toast",
        onSelect: () => {
          close()
          toasty()
        }
      }
    ]
  }
})
