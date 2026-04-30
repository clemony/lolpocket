export const inboxTemplateRegistry: Record<string, InboxTemplateFactory> = {
  deletePocket: createInboxTemplateDeletePocket,
  newPocket: createInboxTemplateNewPocket
  // more...
}

export function getInboxTemplate(item: InboxItem): InboxTemplate {
  const factory = inboxTemplateRegistry[item.template]

  if (!factory) {
    console.warn(`Unknown inbox template: ${item.template}`)
    return {
      text: item.template ?? "Notification"
    }
  }

  return factory(item.vars)
}

function createInboxTemplateNewPocket(
  vars: Record<string, string>
): InboxTemplate {
  return {
    text: `Pocket <i class="font-semibold text-shade-insp/8">${vars.pocketName}</i> created!`,
    action: {
      to: `pocket/${vars.pocketKey}`,
      label: "Open Pocket",
      icon: {
        name: "chain",
        class: "size-3.5  mb-0.5"
      }
    },
    avatar: { icon: "i-add" }
  }
}

function createInboxTemplateDeletePocket(
  vars: Record<string, string>
): InboxTemplate {
  return {
    text: `Pocket <i class="font-semibold text-shade-domination/6">${vars.pocketName}</i> sent to trash.`,
    action: {
      to: `/backpack/trash`,
      label: "Go to trash",
      icon: {
        name: "open",
        class: "size-3.5  mb-0.5 ds-2xs mr-1 "
      }
    },
    avatar: {
      icon: "minus"
    }
  }
}
