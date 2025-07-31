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
    title: `<span class="text-white">Pocket <i>"${vars.pocketName}"</i> created!</span>`,
    badge: {
      text: 'Add Pocket',
      icon: {
        name: 'add-sm',
        class: ' size-4 **:stroke-[1.6] -top-2 -left-2',
      },
      class: 'bg-inspiration',
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
    title: `Pocket <b class="text-domination">${vars.pocketName}</b> sent to trash.`,
    badge: {
      text: 'Add Pocket',
      /*       class: 'from-domination/76 to-domination',
      icon: {
        name: 'minus-sm',
        class: ' size-4.5 **:stroke-[2] -mr-0.75 -ml-1.5 mt-px',
      }, */
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
