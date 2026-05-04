import type { AvatarProps } from "@nuxt/ui"
import { nowInstantString } from "#shared/utils"

export function createTestMessage(): InboxMessage {
  const currentUserId = user().account?.uuid ?? crypto.randomUUID()
  const preview =
    "Lorem ipsum dolor sit amet, maybe dinner time consectetur adipiscing elit. Phasellus et viverra justo, a vulputate orci."

  return {
    id: crypto.randomUUID(),
    recipient_uuid: currentUserId,
    sender_uuid: currentUserId,
    title: "A system message from clem.",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: preview }]
        }
      ]
    } as unknown as InboxMessage["content"],
    preview,
    created_at: nowInstantString(),
    read_at: null,
    archived_at: null,
    trashed_at: null,
    deleted_at: null,
    can_reply: false,
    from: {
      uuid: currentUserId,
      name: "lolpocket",
      //usertag: "pocat",//user().summoner?.name ?? user().account?.username ?? null,
      username: "clem", //user().account?.username ?? null,
      icon: "/img/cat/clemicon.webp" //String(user().summoner?.icon ?? "")
    },
    to: {
      uuid: currentUserId,
      name: user().summoner?.name ?? user().account?.username ?? null,
      username: user().account?.username ?? null,
      icon: String(user().summoner?.icon ?? "")
    }
  }
}

export function createTestNotification(): Partial<InboxNotification> {
  const currentUserId = user().account?.uuid ?? crypto.randomUUID()
  return {
    id: crypto.randomUUID(),
    recipient_uuid: currentUserId,
    template: "testTemplate",
    vars: {
      sender: "clem",
      adj: "p arrogant"
    },
    /*     icon: "",
    header: '',
    footer: '', */
    created_at: nowInstantString()
  }
}

const lpAvatar: AvatarProps = {
  src: "/img/lp/48.webp",
  size: "xl"
}

const clemAvatar: AvatarProps = {
  src: "/img/cat/clemicon-2.webp",
  size: "xl"
}

export const expandTestTemplate = (n: Partial<InboxNotification>) => ({
  text: `This is a ${n.vars?.adj} test notification from ${n?.vars?.sender}.`,
  avatar: clemAvatar,
  header: "system clembot",
  date: n.created_at
})
