import { LazyAuthModal } from "#components"
import { heyGoodJob } from "~/domain/lp/ui/good-job"
import { useSignOut } from "../../user/auth/useAuth"
import { createTestMessage } from "../messages/test-message"
export const testingMenu = (command?: Record<string, () => void>) => {
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

  const overlay = useOverlay()
  const login = overlay.create(LazyAuthModal, {
    destroyOnClose: true,
    props: { type: "logIn" }
  })

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
        onSelect: () => {
          if (command && command.close) command.close()
          accountFetch()
        }
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
          if (command && command.close) close()
          useSignOut()
        }
      },
      {
        label: "Open Login",
        icon: "i-log-in",
        onSelect: () => {
          if (command && command.close) close()
          return login.open()
        }
      },
      {
        label: "Send test message",
        icon: "i-log-in",
        onSelect: () => {
          if (command && command.close) close()
          user().addInboxMessage(createTestMessage())
        }
      },
      {
        icon: "i-tabler-bread",
        label: "Toast",
        onSelect: () => {
          if (command && command.close) close()
          getToast("With breads")
        }
      }
    ]
  }
}
