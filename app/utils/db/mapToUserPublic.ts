import type { UserPublic } from 'db/table.types'

function mapToUserPublic(): Partial<UserPublic> | null {
  const as = useAccountStore()
  const splash = as.publicData?.splash
  return splash != null ? { splash } : null
}
