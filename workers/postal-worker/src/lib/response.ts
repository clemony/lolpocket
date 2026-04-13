export function json(
  payload: unknown,
  init: ResponseInit = {},
) {
  const headers = new Headers(init.headers)
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json; charset=utf-8")
  }

  return new Response(JSON.stringify(payload, null, 2), {
    ...init,
    headers
  })
}

export function notFound() {
  return new Response("Not found", { status: 404 })
}

export function methodNotAllowed() {
  return new Response("Method not allowed", { status: 405 })
}

export function badRequest(message: string) {
  return json({ error: message }, { status: 400 })
}

export function unauthorized(message: string) {
  return json({ error: message }, { status: 401 })
}
