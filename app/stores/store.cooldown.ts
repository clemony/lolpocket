// stores/cooldown.ts
import { defineStore } from 'pinia'

interface CooldownEntry {
  timestamp: number
  wait: number
}

export const useCooldownStore = defineStore(
  'cooldown',
  () => {
    const cooldowns = ref<Record<string, CooldownEntry>>({})

    const getKey = (puuid: string, action: string) => `${puuid}:${action}`

    function set(puuid: string, action: string, wait: number) {
      cooldowns.value[getKey(puuid, action)] = {
        timestamp: Date.now(),
        wait,
      }
    }

    function get(puuid: string, action: string): CooldownEntry | null {
      const key = getKey(puuid, action)
      const entry = cooldowns.value[key]

      if (!entry)
        return null

      const now = Date.now()
      const expired = now - entry.timestamp >= entry.wait

      if (expired) {
        delete cooldowns.value[key] // 🔥 Clean up immediately
        return null
      }

      return entry
    }
    function clear(puuid: string, action: string) {
      delete cooldowns.value[getKey(puuid, action)]
    }

    function purgeExpired() {
      const now = Date.now()
      for (const [key, { timestamp, wait }] of Object.entries(
        cooldowns.value
      )) {
        if (now - timestamp >= wait)
          delete cooldowns.value[key]
      }
    }

    // Auto purge every 30s
    setInterval(purgeExpired, 30_000)

    return {
      _raw: cooldowns,
      clear,
      get,
      purgeExpired,
      set,
    }
  },
  {
    persist: true,
  }
)
