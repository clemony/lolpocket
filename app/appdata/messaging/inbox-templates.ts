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

type InboxTemplateFactory = (vars: Record<string, string>) => InboxTemplate

const inboxTemplateRegistry: Record<string, InboxTemplateFactory> = {
  newPocket: createInboxTemplateNewPocket,
  deletePocket: createInboxTemplateDeletePocket,
  // more...
}

export function getInboxTemplate(item: InboxItem): InboxTemplate {
  const factory = inboxTemplateRegistry[item.template]

  if (!factory) {
    console.warn(`Unknown inbox template: ${item.template}`)
    return {
      title: item.template ?? 'Notification',
    }
  }

  return factory(item.vars)
}

function createInboxTemplateNewPocket(vars): InboxTemplate {
  return {
    title: `Pocket <i class="font-semibold text-shade-inspiration/8">${vars.pocketName}</i> created!`,
    badge: {
      text: 'Add Pocket',
      icon: {
        name: 'add-sm',
        class: ' size-4 **:stroke-[1.6] -top-2 -left-2',
      },
      class: '',
    },
    action: {
      type: 'navigate',
      function: `pocket/${vars.pocketKey}`,
      text: 'Open Pocket',
      icon: {
        name: 'chain',
        class: 'size-3.5  mb-0.5',
      },
    },
  }
}

function createInboxTemplateDeletePocket(vars): InboxTemplate {
  return {
    title: `Pocket <i class="font-semibold text-shade-domination/6">${vars.pocketName}</i> sent to trash.`,
    badge: {
      text: 'Delete Pocket',
      class: '',
      icon: {
        name: 'minus-sm',
        class: ' size-4 **:stroke-[1.6] -top-2 -left-2',
      },
    },
    action: {
      type: 'navigate',
      function: `backpack/trash`,
      text: 'Go to trash',
      icon: {
        name: 'open',
        class: 'size-3.5  mb-0.5 dst mr-1 ',
      },
    },
  }
}
