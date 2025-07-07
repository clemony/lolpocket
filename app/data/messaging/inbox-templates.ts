export interface InboxTemplate {
  title: string
  badge?: BadgeObject
  action?: {
    type: string
    function: any
    text?: string
    icon?: IconObject
  }
}

export function getInboxTemplate(item: InboxItem) {
  if (item.template == "newPocket")
    return createInboxTemplateNewPocket(item.vars)

  if (item.template == "deletePocket")
    return createInboxTemplateDeletePocket(item.vars)
}

function createInboxTemplateNewPocket(vars): InboxTemplate {
  return {
    title: `Pocket <b  class="text-inspiration">${vars.pocketName}</b> created!`,
    badge: {
      text: "Pocket",
      icon: {
        name: "add-sm",
        class: " size-5 **:stroke-[2] -mr-1 -ml-2",
      },
      class: "from-inspiration/76 to-inspiration",
    },
    action: {
      type: "navigate",
      function: `pocket/${vars.pocketKey}`,
      text: "Open Pocket",
      icon: {
        name: "open",
        class: "size-3.5  mb-0.5 dst mr-1 ",
      },
    },
  }
}

function createInboxTemplateDeletePocket(vars): InboxTemplate {
  return {
    title: `Pocket <b class="text-domination">${vars.pocketName}</b> sent to trash.`,
    badge: {
      text: "Pocket",
      class: "from-domination/76 to-domination",
      icon: {
        name: "minus-sm",
        class: " size-4.5 **:stroke-[2] -mr-0.75 -ml-1.5 mt-px",
      },
    },
    action: {
      type: "navigate",
      function: `backpack/trash`,
      text: "Go to trash",
      icon: {
        name: "open",
        class: "size-3.5  mb-0.5 dst mr-1 ",
      },
    },
  }
}
