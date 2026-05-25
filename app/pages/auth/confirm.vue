<script lang="ts" setup>
import { accountFetch } from "~/composables/account/accountFetch"

definePageMeta({
  path: "/auth/redirect",
  search: false
})

const loadingText = [
  "Polishing data...",
  "Calculating gains...",
  "Crafting Infinity Edge...",
  "Gathering poros..."
]

const config = useRuntimeConfig()
const client = useSupabaseClient()
const route = useRoute()
const session = useSupabaseSession()
const redirect = useSupabaseCookieRedirect()

const progress = ref(0)
const accountFetched = ref(false)
const sessionResolving = ref(false)

function getCookieNames() {
  if (!import.meta.client) return []

  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0] ?? "")
    .filter(Boolean)
}

function logAuthRedirectDebug(stage: string, details: Record<string, unknown>) {
  if (!import.meta.client) return

  const expectedVerifierCookie = `${config.public.supabase.cookiePrefix}-code-verifier`
  const cookieNames = getCookieNames()

  console.group(`Supabase auth redirect debug: ${stage}`)
  console.log("window.location.href:", window.location.href)
  console.log("window.location.origin:", window.location.origin)
  console.log("route.query:", { ...route.query })
  console.log("route.hash:", route.hash)
  console.log("expected verifier cookie:", expectedVerifierCookie)
  console.log(
    "has expected verifier cookie:",
    cookieNames.includes(expectedVerifierCookie)
  )
  console.log(
    "auth cookie names:",
    cookieNames.filter((name) =>
      name.startsWith(config.public.supabase.cookiePrefix)
    )
  )
  console.log("cookie names:", cookieNames)
  console.log("details:", details)
  console.groupEnd()
}

client.auth.onAuthStateChange((event, activeSession) => {
  logAuthRedirectDebug("onAuthStateChange", {
    event,
    hasSession: !!activeSession,
    hasUser: !!activeSession?.user,
    userId: activeSession?.user?.id
  })
})

async function resolveSession() {
  logAuthRedirectDebug("before getSession", {
    stateSession: !!session.value
  })

  const code = route.query.code
  if (typeof code === "string") {
    const exchanged = await client.auth.exchangeCodeForSession(code)

    logAuthRedirectDebug("after exchangeCodeForSession", {
      error: exchanged.error,
      hasSession: !!exchanged.data.session,
      hasUser: !!exchanged.data.session?.user,
      userId: exchanged.data.session?.user?.id
    })

    if (exchanged.error) throw exchanged.error
    if (exchanged.data.session) return exchanged.data.session
  }

  const { data, error } = await client.auth.getSession()

  logAuthRedirectDebug("after getSession", {
    error,
    hasSession: !!data.session,
    hasUser: !!data.session?.user,
    userId: data.session?.user?.id
  })

  if (error) throw error
  return data.session
}

async function fetchAccount() {
  if (accountFetched.value || sessionResolving.value) return

  sessionResolving.value = true

  try {
    const activeSession = await resolveSession()
    if (!activeSession?.user) {
      logAuthRedirectDebug("no active session", {
        stateSession: !!session.value
      })
      return
    }

    session.value = activeSession
    accountFetched.value = true

    const result = await accountFetch()
    progress.value = result.progress.value

    await navigateTo(redirect.pluck() || "/")
  } catch (error) {
    accountFetched.value = false
    throw error
  } finally {
    sessionResolving.value = false
  }
}

watch(
  session,
  () => {
    fetchAccount().catch((error) => {
      console.error("Failed to finish auth redirect", error)
    })
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex w-full! max-w-180! flex-col gap-2">
      <div class="h-6 w-full overflow-hidden px-px text-sm font-medium">
        {{ loadingText[Math.floor(progress / 25)] || loadingText.at(-1) }}
      </div>
      <Progress :value="progress" :max="100" />
    </div>
  </div>
</template>
