import {
  LazyMessage,
  LazyMessagePreview,
  LazyNotification,
  UButton,
} from "#components"
import type { InboxMessage, InboxNotification } from "#shared/types"
import { nowInstantString } from "#shared/utils"
import type { ButtonProps } from "@nuxt/ui"
import type { Box, CommandMessage } from "~/domain/user/types/inbox.types"

export const inboxButtonProps: ButtonProps & { tabindex?: string } = {
  size: "xs",
  tabindex: "-1",
  variant: "ghost",
  ui: {
    label: "text-xs group-hover/btn:underline text-n3 group-hover/btn:text-pc",
    trailingIcon: "text-n3 group-hover/btn:**:text-pc align-top size-3",
  },
}

async function openMessageModal(message: InboxMessage, update?: () => void) {
  const overlay = useOverlay()
  const modal = overlay.create(LazyMessage)
  if (modal.isOpen) modal.patch({ message })
  if (update) update()

  try {
    await modal.open({ message })
    if (!modal.isOpen && !message.read_at) message.read_at = nowInstantString()
  } finally {
    if (update) update()
  }
}

export const useInbox = (update?: () => void) => {
  const { inbox } = storeToRefs(user())
  return computed<Record<string, Box>>(() => ({
    messages: {
      label: "Messages",
      slot: "messages",
      count: inbox.value?.messages.filter((m) => m.read_at).length ?? 0,
      items: [
        ...(inbox.value?.messages ?? [])
          .map((m: InboxMessage) => ({
            ...m,
            component: LazyMessagePreview,
            onClick: () => openMessageModal(m),
          }))
          .reverse(),
        inbox.value.messages.length
          ? {
              component: UButton,
              props: {
                label: "View all...",
                to: "/inbox/all",
                size: "lg",
                variant: "ghost",
                block: true,
                ui: {
                  base: "justify-center drop-shadow-none shadow-none rounded-none text-xs inset-ring-0 fx-1! hover:depth-0! hover:inset-ring-0",
                  label: "grow-0 group-hover/btn:underline",
                },
              },
            }
          : null,
      ].filter(Boolean) as CommandMessage[],
      to: "/inbox/all",
      actions: [
        {
          ...inboxButtonProps,
          label: "Inbox",
          trailingIcon: "i-link",
        },
      ],
      empty: {
        title: "Empty",
        description: "Nothing to see here!",
        icon: "i-mdi-mailbox-open-outline",
      },
    },
    notifications: {
      label: "Notifications",
      slot: "notifications",
      items: (inbox.value?.notifications ?? []).map((m: InboxNotification) => ({
        ...m,
        component: LazyNotification,
      })),
      actions: [
        {
          ...inboxButtonProps,
          icon: "i-reset",
          tooltip: { text: "Clear all", side: "bottom" },
          ui: {
            ...inboxButtonProps.ui,
            base: "anchor",
          },
        },
      ],
      empty: {
        title: "Nothing notable found.",
        description: "You'll be alerted when something happens.",
        avatar: {
          icon: "i-ui-no-notification",
          ui: { root: "mb-0", icon: "text-pc" },
        },
      },
    },
  }))
}
