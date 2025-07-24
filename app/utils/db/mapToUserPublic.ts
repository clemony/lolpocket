import type { UserPublic } from '~~/types/table.types'

function mapToUserPublic(): Partial<UserPublic> | null {
  const as = useAccountStore()
  const splash = as.publicData?.splash
  return splash != null ? { profile_splash: splash } : null
}
