export const inboxTemplateRegistry: Record<string, InboxTemplateFactory> = {
  deletePocket: createInboxTemplateDeletePocket,
  newPocket: createInboxTemplateNewPocket,
  // more...
}

export function getInboxTemplate(item: InboxItem): InboxTemplate {
  const factory = inboxTemplateRegistry[item.template]

  if (!factory) {
    console.warn(`Unknown inbox template: ${item.template}`)
    return {
      title: item.template ?? "Notification",
    }
  }

  return factory(item.vars)
}

function createInboxTemplateNewPocket(
  vars: Record<string, string>
): InboxTemplate {
  return {
    title: `Pocket <i class="font-semibold text-shade-insp/8">${vars.pocketName}</i> created!`,
    action: {
      function: `pocket/${vars.pocketKey}`,
      text: "Open Pocket",
      type: "navigate",
      icon: {
        name: "chain",
        class: "size-3.5  mb-0.5",
      },
    },
    badge: {
      class: "",
      text: "Add Pocket",
      icon: {
        name: "add-sm",
        class: " size-4 **:stroke-[1.6] -top-2 -left-2",
      },
    },
  }
}

function createInboxTemplateDeletePocket(
  vars: Record<string, string>
): InboxTemplate {
  return {
    title: `Pocket <i class="font-semibold text-shade-domination/6">${vars.pocketName}</i> sent to trash.`,
    action: {
      function: `backpack/trash`,
      text: "Go to trash",
      type: "navigate",
      icon: {
        name: "open",
        class: "size-3.5  mb-0.5 ds-2xs mr-1 ",
      },
    },
    badge: {
      class: "",
      text: "Delete Pocket",
      icon: {
        name: "minus-sm",
        class: " size-4 **:stroke-[1.6] -top-2 -left-2",
      },
    },
  }
}
