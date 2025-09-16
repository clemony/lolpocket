import { toast } from 'vue-sonner'

// delete

export function deletePocket(pocket) {
  const ps = usePocketStore()
  const as = useAccountStore()
  const route = useRoute()
  const inPocket = route.path == `/pocket/${pocket.key}`

  pocket.location.folder = 'trash'

  if (inPocket) {
    navigateTo('/backpack')
  }

  if (as.settings.alertDeletePocket) {
    const newPocketToast = toast.success(
      `Pocket ${pocket.name} sent to trash.`,
      {
        description: 'You can restore it for up to 30 days.',
        duration: 7000,
        action: {
          label: 'Restore?',
          // onClick: () => navigateTo({ path: `/${newPocket.key}` }),
        },
        cancel: {
          label: '×',
          onClick: () => toast.dismiss(newPocketToast),
        },
      }
    )

    const vars: Record<string, string> = {
      pocketKey: pocket.key,
      pocketName: pocket.name,
    }

    saveNotification('deletePocket', vars)
  }
}
