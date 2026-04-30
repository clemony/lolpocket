import type * as v from "valibot"

const locationKeySchema = computed(() => user().folderLocationSchema)
export type LocationKey = v.InferOutput<typeof locationKeySchema.value>
