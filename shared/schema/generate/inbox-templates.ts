export interface InboxTemplate {
  title: string
  action?: {
    type: string
    function: any
    text?: string
    icon?: IconObject
  }
  badge?: BadgeObject
}

type InboxTemplateFactory = (vars: Record<string, string>) => InboxTemplate

const inboxTemplateRegistry: Record<string, InboxTemplateFactory> = {
  deletePocket: createInboxTemplateDeletePocket,
  newPocket: createInboxTemplateNewPocket,
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
    action: {
      function: `pocket/${vars.pocketKey}`,
      icon: {
        name: 'chain',
        class: 'size-3.5  mb-0.5',
      },
      text: 'Open Pocket',
      type: 'navigate',
    },
    badge: {
      class: '',
      icon: {
        name: 'add-sm',
        class: ' size-4 **:stroke-[1.6] -top-2 -left-2',
      },
      text: 'Add Pocket',
    },
  }
}

function createInboxTemplateDeletePocket(vars): InboxTemplate {
  return {
    title: `Pocket <i class="font-semibold text-shade-domination/6">${vars.pocketName}</i> sent to trash.`,
    action: {
      function: `backpack/trash`,
      icon: {
        name: 'open',
        class: 'size-3.5  mb-0.5 dst mr-1 ',
      },
      text: 'Go to trash',
      type: 'navigate',
    },
    badge: {
      class: '',
      icon: {
        name: 'minus-sm',
        class: ' size-4 **:stroke-[1.6] -top-2 -left-2',
      },
      text: 'Delete Pocket',
    },
  }
}
