export const communicationOptions = [
  {
    legend: "Private Messages",
    icon: "i-chat",
    class: " **:stroke-[2.3]",
    description:
      "System and account messages will always be received from lolpocket.",
    type: "items",
    items: {
      peer_messages: {
        icon: "i-mail",
        label: "Allow messages",
        description: "Send and receive messages with other users.",
        id: "peer_messages",
        defaultValue: false
      }
    }
  },
  {
    legend: "notifications",
    icon: "i-ui-notification",
    class: " **:stroke-1 scale-106",
    type: "items",
    items: {
      ping_new_friend: {
        icon: "i-lucide-user-round-plus",
        label: "Friend request",
        description: "Notify upon new friend request.",
        id: "ping_new_friend",
        defaultValue: true
      },
      ping_new_message: {
        icon: "i-lucide-mail-plus",
        label: "New message",
        description:
          "Receive a notification when an inbox message is received.",
        id: "ping_new_message",
        defaultValue: true
      },
      ping_new_pocket: {
        icon: "i-ui-pocket-plus",
        label: "Pocket creation",
        description: "Notify  when a pocket is created.",
        ui: { leadingIcon: "**:stroke-[3.1]! scale-90" },
        id: "ping_new_pocket",
        defaultValue: true
      },
      ping_delete_pocket: {
        icon: "i-ui-pocket-minus",
        label: "Pocket deletion",
        ui: { leadingIcon: "**:stroke-[3.1]! scale-90" },
        description: "Notify when a pocket is deleted.",
        id: "ping_delete_pocket",
        defaultValue: true
      }
    }
  }
]
