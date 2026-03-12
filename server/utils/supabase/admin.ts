interface SupabaseAdminRequestOptions {
  body?: BodyInit | null
  headers?: HeadersInit
  method?: "DELETE" | "GET" | "PATCH" | "POST"
  query?: Record<string, string | undefined>
}

interface SupabaseErrorPayload {
  error_description?: string
  message?: string
}

function getSupabaseAdminConfig() {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const secretKey = config.SUPABASE_SECRET_KEY

  if (!supabaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing NUXT_PUBLIC_SUPABASE_URL runtime config",
    })
  }

  if (!secretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing SUPABASE_SECRET_KEY runtime config",
    })
  }

  return {
    secretKey,
    supabaseUrl,
  }
}

export async function supabaseAdminRequest<T>(
  path: string,
  options: SupabaseAdminRequestOptions = {},
) {
  const { secretKey, supabaseUrl } = getSupabaseAdminConfig()
  const url = new URL(`/rest/v1/${path}`, supabaseUrl)

  for (const [key, value] of Object.entries(options.query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, value)
  }

  const response = await fetch(url, {
    body: options.body,
    headers: {
      apikey: secretKey,
      "content-type": "application/json",
      ...options.headers,
    },
    method: options.method ?? "GET",
  })

  const text = await response.text()
  let data: unknown = null

  if (text) {
    try {
      data = JSON.parse(text)
    }
    catch {
      data = text
    }
  }

  if (!response.ok) {
    const errorData =
      data && typeof data === "object" ? (data as SupabaseErrorPayload) : undefined

    throw createError({
      data,
      statusCode: response.status,
      statusMessage:
        errorData?.message ??
        errorData?.error_description ??
        "Supabase request failed",
    })
  }

  return {
    countHeader: response.headers.get("content-range"),
    data: data as T,
  }
}
