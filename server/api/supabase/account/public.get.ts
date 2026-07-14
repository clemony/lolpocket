import { accountSchema } from "#shared/schema"
import * as v from "valibot"
import { supabaseAdminRequest } from "../../../domain/supabase/admin"

const PUBLIC_ACCOUNT_SELECT = [
  "uuid",
  "puuid",
  "username",
  "tag",
  "title",
  "created",
  "peer_messages",
  "public_pockets",
  "splash",
  "color",
  "updated"
].join(",")

const firstQueryValue = (value: unknown) =>
  Array.isArray(value) ? value[0] : value

export default defineEventHandler(async (event): Promise<Account | null> => {
  const query = getQuery(event)
  const puuid = firstQueryValue(query.puuid)
  const uuid = firstQueryValue(query.uuid)

  if (typeof puuid !== "string" && typeof uuid !== "string") {
    throw createError({
      statusCode: 400,
      statusMessage: "puuid or uuid is required"
    })
  }

  const { data } = await supabaseAdminRequest<Account[]>("account", {
    query: {
      limit: "1",
      select: PUBLIC_ACCOUNT_SELECT,
      ...(typeof puuid === "string"
        ? { puuid: `eq.${puuid}` }
        : { uuid: `eq.${uuid}` })
    }
  })

  const account = data[0] ?? null
  if (!account) return null

  const parsed = v.safeParse(accountSchema, account)
  if (!parsed.success) {
    console.error("Invalid public account response", parsed.issues)
    throw createError({
      statusCode: 500,
      statusMessage: "Invalid public account response"
    })
  }

  return parsed.output
})
