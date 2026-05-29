import type { DropdownMenuItem } from "@nuxt/ui"
import { getToast } from "~/composables/ui/toast"
import { heyGoodJob } from "~/domain/about/ui/good-job"
import { accountFetch } from "~/domain/user/composables/accountFetch"
import { useSignOut } from "../auth/useAuth"
import {
  createTestMessage,
  createTestNotification
} from "../messages/test-message"

export const testingMenu = (
  close?: () => void,
  openLogin?: () => void
): {
  label: string
  icon: string
  ui: DropdownMenuItem["ui"]
  children: DropdownMenuItem[]
} => {
  console.log("🥸 - findSummoner - publicUsers():", publicUsers().cache)

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
        onClick: () => {
          if (close) close()
          accountFetch()
        }
      },
      {
        icon: "i-lucide-box",
        label: "Log Summoner Cache",
        onClick: () => console.log("summoner:", summonerStore().cache)
      },
      {
        label: "Sign Out",
        icon: "i-log-out",
        onClick: () => {
          if (close) close()
          useSignOut()
        }
      },
      {
        label: "Open Login",
        icon: "i-log-in",
        onClick: () => {
          if (close) close()
          if (openLogin) openLogin()
        }
      },
      {
        label: "Send test message",
        icon: "i-log-in",
        onClick: () => {
          if (close) close()
          user().addInboxMessage(createTestMessage())
        }
      },
      {
        label: "Send test notification",
        icon: "i-alert",
        onClick: () => {
          if (close) close()
          user().addInboxNotification(
            createTestNotification() as InboxNotification
          )
        }
      },
      {
        icon: "i-tabler-bread",
        label: "Toast",
        onClick: () => {
          if (close) close()
          getToast("With breads")
        }
      }
    ]
  }
}
