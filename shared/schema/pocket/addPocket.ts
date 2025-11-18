import { heyGoodJob } from '~~/shared/data/good-job'
import { toast } from '~/composables/utils/useToast'
import { newPocket } from './newPocket'

export async function addPocket(randomize?: boolean) {
  const p = randomize ? newRandomPocket() : newPocket()

  if (p) {
    console.log('📎 - addPocket - p:', p)
    const { error } = await $fetch('/api/supabase/pocket_upsert', {
      body: p,
      headers: useRequestHeaders(['cookie']),
      method: 'POST',
    })

    if (!error) {
      ps().pockets.push(p)

      toast({
        title: `Created ${p.name}!`,
        color: 'neutral',
        description: `${getRandom(heyGoodJob)}, ${as().account.username || as().account.name}`,
        icon: 'tick',
      })
    }
    else {
      sendErrorToast()
    }
  }
}
