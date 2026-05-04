export function migrateStoredSplashUrlsToSkinKeys() {
  const accountSkin = user().migrateAccountSplashUrlToSkinKey()
  const pocketCount = pocketStore().migrateSplashUrlsToSkinKeys()

  return {
    accountSkin,
    pocketCount
  }
}
