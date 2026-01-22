import * as v from 'valibot'

export const NodeSchema = v.object({
  content: v.fallback(
    v.array(
      v.object({
        type: v.fallback(v.string(), 'p'),
      })
    ),
    []
  ),
  type: v.fallback(v.string(), 'p'),
})

export const DocSchema = v.object({
  content: v.fallback(v.array(NodeSchema), []),
  type: v.fallback(v.string(), 'doc'),
})
