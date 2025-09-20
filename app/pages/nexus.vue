<script lang="ts" setup>
import type { description } from 'valibot'
import { motion, useDomRef } from 'motion-v'
import { toast } from 'vue-sonner'

const container = useDomRef()

definePageMeta({
  name: 'nexus',
  icon: 'mdi:atom-variant',
  level: 1,
  order: 1,
  path: '/nexus',
})

console.log('🌱 - ss().getSummoner(as().account.puuid):', ss().cache)
console.log('🌱 - as().account.puuid:', as().account.puuid)
async function hydrateUser1() {
  const client = useSupabaseClient()
  const user = useSupabaseUser().value

  console.log('Authenticated user: ', user)

  if (!user)
    throw new Error('hydrateUser: no logged-in user')

  console.log('logpoint-1')

  try {
    console.log('user.id: ', user.id)
    const { data, error } = await client
      .from('user_account')
      .select('*')
      .eq('uuid', user.id)
      .single()

    console.log('logpoint-2')
    console.log('error: ', error)
    console.log('data: ', data)
    if (error)
      throw error

    if (data) {
      // Use the entire row
      console.log(data)
    }
  }
  catch (error) {
    console.error('Error fetching user account:', error)
  }
}
</script>

<template>
  <div
    class="pt-8 w-full flex flex-col h-full w-full items-center max-h-screen px-8 pb-6">
    <header class="w-full">
      <h1>Nexus</h1>
    </header>

    <div class="size-fit border border-b4/60 rounded-xl">
      <!-- HERHEHRHEHRHEHREHHRHERHER -->
    </div>

    <div class="w-1/5 mx-auto space-y-2">
      <Hihi />
      <Button @click="useFetchSummonerData(as().account.puuid)">
        try update
      </Button>

      <Button @click="hydrateUser()">
        fetch user datasss
      </Button>

      <Button @click="useSignOut()">
        sign out
      </Button>

      <Button
        @click="
          toast('Hello toast!', {
            description:
              'Canadian neurosurgeon Dr. Wilder Penfield, while operating on epilepsy patients, discovered the “toast centre” of the human brain, which is wholly dedicated to detecting when toast is burning.',
          })
        ">
        toast
      </Button>
    </div>

    <Separator class="bg-b3/60 w-full" />

    <div class="w-100 h-60">
      <!-- <RecentPatchWinrates /> -->
    </div>
    <!--
    <div class="w-full h-80 self-end ">
      <News />
    </div> -->
  </div>
</template>
