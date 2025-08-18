import { db } from 'server/db/supabaseClient' // drizzle client
import { userSettings } from '~~/server/db/schema/userSettings'

export async function useUpdateUserSettings(settings: UserSettings, userId: string) {
  await db
    .insert(userSettings)
    .values({ userId, ...settings })
    .onConflictDoUpdate({
      target: userSettings.userId,
      set: settings,
    })
}