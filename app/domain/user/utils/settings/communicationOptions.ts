import type { SwitchGroup } from "./settingsProps"

export const communicationOptions: SwitchGroup[][] = [
  [
    {
      legend: "Private Messages",
      icon: "i-chat",
      class: " **:stroke-[2.3]",
      description:
        "System and account messages will always be received from lolpocket.",
      type: "items",
      items: [
        {
          icon: "i-mail",
          label: "Allow messages",
          description: "Send and receive messages with other users.",
          id: "peer_messages" as OptionKey<string>,
          defaultValue: false
        }
      ]
    }
  ],
  [
    {
      legend: "notifications",
      icon: "i-ui-notification",
      class: " **:stroke-1 scale-106",
      type: "items",
      items: [
        {
          icon: "i-lucide-user-round-plus",
          label: "Friend request",
          description: "Notify upon new friend request.",
          id: "ping_new_friend" as OptionKey<string>,
          defaultValue: true
        },
        {
          icon: "i-lucide-mail-plus",
          label: "New message",
          description:
            "Receive a notification when an inbox message is received.",
          id: "ping_new_message" as OptionKey<string>,
          defaultValue: true
        },
        {
          icon: "i-lp-pocket-plus",
          label: "Pocket creation",
          description: "Notify  when a pocket is created.",
          ui: { icon: "**:stroke-[3.3]! inline align-icon scale-90" },
          id: "ping_new_pocket" as OptionKey<string>,
          defaultValue: true
        },
        {
          icon: "i-lp-pocket-minus",
          label: "Pocket deletion",
          ui: { icon: "**:stroke-[3.3]! scale-90 inline align-icon" },
          description: "Notify when a pocket is deleted.",
          id: "ping_delete_pocket" as OptionKey<string>,
          defaultValue: true
        }
      ]
    }
  ]
]
