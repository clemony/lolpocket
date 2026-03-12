export default defineEventHandler(async (event) => {
  if (!import.meta.dev) {
    throw createError({ statusCode: 404, statusMessage: "Not Found" })
  }

  const query = getQuery(event)
  const requestedDelay = Number.parseInt(String(query.ms ?? "1500"), 10)
  const delayMs = Number.isFinite(requestedDelay)
    ? Math.min(Math.max(requestedDelay, 0), 30000)
    : 1500

  const requestedTarget = typeof query.to === "string" ? query.to : ""
  const to = requestedTarget.startsWith("/") ? requestedTarget : "/img/items/1001.webp"

  await new Promise((resolve) => setTimeout(resolve, delayMs))

  return sendRedirect(event, to, 302)
})
