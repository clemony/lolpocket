import { useSidebar } from 'base/sidebar/utils'

function closeAndNavigate(link: string) {
  const { open } = useSidebar()
  open.value = false
  navigateTo(link)
}
